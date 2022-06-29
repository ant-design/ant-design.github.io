import type { CSSInterpolation } from '@ant-design/cssinjs';
import { Theme, useCacheToken, useStyleRegister } from '@ant-design/cssinjs';
import React from 'react';
import version from '../version';
import type { DeepPartial } from '../_util/type';
import type {
  AliasToken,
  GlobalToken,
  MapToken,
  OverrideToken,
  PresetColorType,
  SeedToken,
} from './interface';
import { PresetColors } from './interface';
import defaultDerivative from './themes/default';
import darkDerivative from './themes/dark';
import defaultSeedToken from './themes/seed';
import { clearFix, operationUnit, resetComponent, resetIcon, roundedArrow } from './util';
import formatToken from './util/alias';
import type { FullToken } from './util/genComponentStyleHook';
import genComponentStyleHook from './util/genComponentStyleHook';
import getArrowStyle from './util/placementArrow';
import statisticToken, { merge as mergeToken, statistic } from './util/statistic';

export {
  resetComponent,
  resetIcon,
  clearFix,
  roundedArrow,
  getArrowStyle,
  operationUnit,
  // colors
  PresetColors,
  // Statistic
  statistic,
  statisticToken,
  mergeToken,
  // hooks
  useStyleRegister,
  genComponentStyleHook,
};
export type {
  SeedToken,
  AliasToken,
  PresetColorType,
  // FIXME: Remove this type
  AliasToken as DerivativeToken,
  FullToken,
};

// ================================ Context =================================
type DerivativeFn = (token: SeedToken) => MapToken;

export const DesignTokenContext = React.createContext<{
  token: Partial<SeedToken>;
  derivative?: DerivativeFn;
  override?: DeepPartial<OverrideToken>;
  hashed?: string | boolean;
}>({
  token: defaultSeedToken,
});

// ================================== Hook ==================================
// In dev env, we refresh salt per hour to avoid user use this
// Note: Do not modify this to real time update which will make debug harder
const saltPrefix =
  process.env.NODE_ENV === 'production' ? version : `${version}-${new Date().getHours()}`;

export function useToken(): [Theme<SeedToken, MapToken>, GlobalToken, string] {
  const {
    token: rootDesignToken,
    override,
    derivative,
    hashed,
  } = React.useContext(DesignTokenContext);

  const theme = React.useMemo(() => {
    let derivativeFn: DerivativeFn = defaultDerivative;
    if (typeof derivative === 'function') {
      derivativeFn = derivative;
    } else if (derivative === 'dark') {
      derivativeFn = darkDerivative;
    }

    return new Theme(derivativeFn);
  }, [derivative]);

  const salt = `${saltPrefix}-${hashed || ''}`;

  const [token, hashId] = useCacheToken<GlobalToken, SeedToken>(
    theme,
    [defaultSeedToken, rootDesignToken],
    {
      salt,
      override,
      formatToken,
    },
  );

  return [theme, token, hashed ? hashId : ''];
}

export type UseComponentStyleResult = [(node: React.ReactNode) => React.ReactElement, string];

export type GenerateStyle<
  ComponentToken extends object = AliasToken,
  ReturnType = CSSInterpolation,
> = (token: ComponentToken) => ReturnType;
