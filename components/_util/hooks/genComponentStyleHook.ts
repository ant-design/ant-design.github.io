/* eslint-disable no-redeclare */
import { CSSInterpolation, useStyleRegister } from '@ant-design/cssinjs';
import { useContext } from 'react';
import { GlobalToken, OverrideToken } from '../theme/interface';
import { mergeToken, statisticToken, UseComponentStyleResult, useToken } from '../theme';
import { ConfigContext } from '../../config-provider';

export type OverrideTokenWithoutDerivative = Omit<OverrideToken, 'derivative'>;
export type OverrideComponent = keyof OverrideTokenWithoutDerivative;
export type GlobalTokenWithComponent<ComponentName extends OverrideComponent> = GlobalToken &
  OverrideToken[ComponentName];
export type StyleInfo = {
  hashId: string;
  rootPrefixCls: string;
  iconPrefixCls: string;
};
export type TokenWithComponentCls<T> = T & { componentCls: string };

function genComponentStyleHook<ComponentName extends OverrideComponent>(
  component: ComponentName,
  styleFn: (
    prefixCls: string,
    token: TokenWithComponentCls<GlobalTokenWithComponent<ComponentName>>,
    info: StyleInfo,
  ) => CSSInterpolation,
  defaultComponentToken?:
    | OverrideTokenWithoutDerivative[ComponentName]
    | ((token: GlobalToken) => OverrideTokenWithoutDerivative[ComponentName]),
) {
  return (prefixCls: string): UseComponentStyleResult => {
    const [theme, token, hashId] = useToken();
    const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);
    const { token: proxyToken, flush } = statisticToken(token);

    let componentToken: OverrideTokenWithoutDerivative[ComponentName];
    if (typeof defaultComponentToken === 'function') {
      componentToken = defaultComponentToken(token);
    } else {
      componentToken = defaultComponentToken;
    }
    const overrideComponentToken = token[component] as any;
    if (componentToken && overrideComponentToken) {
      Object.keys(componentToken).forEach(key => {
        if (overrideComponentToken[key] !== undefined) {
          (componentToken as any)[key] = overrideComponentToken[key];
        }
      });
    }
    const mergedToken = mergeToken<
      TokenWithComponentCls<GlobalTokenWithComponent<OverrideComponent>>
    >(proxyToken, { componentCls: `.${prefixCls}` }, componentToken || {});

    return [
      useStyleRegister({ theme, token, hashId, path: [prefixCls] }, () => {
        const style = styleFn(
          prefixCls,
          mergedToken as unknown as TokenWithComponentCls<GlobalTokenWithComponent<ComponentName>>,
          {
            hashId,
            rootPrefixCls: getPrefixCls(),
            iconPrefixCls,
          },
        );
        flush(component);
        return style;
      }),
      hashId,
    ];
  };
}

export default genComponentStyleHook;
