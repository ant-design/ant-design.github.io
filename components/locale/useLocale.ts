import * as React from 'react';
import { merge } from 'rc-util/lib/utils/set';

import type { Locale } from '.';
import type { LocaleContextProps } from './context';
import LocaleContext from './context';
import defaultLocaleData from './en_US';

export type LocaleComponentName = Exclude<keyof Locale, 'locale'>;

const useLocale = <C extends LocaleComponentName = LocaleComponentName>(
  componentName: C,
  defaultLocale?: Locale[C] | (() => Locale[C]),
): readonly [NonNullable<Locale[C]>, string] => {
  const fullLocale = React.useContext<LocaleContextProps | undefined>(LocaleContext);

  const getLocale = React.useMemo<NonNullable<Locale[C]>>(() => {
    const locale = defaultLocale || defaultLocaleData[componentName];
    const localeFromContext = fullLocale?.[componentName] ?? {};
    // Form 和 DatePicker 的 locale 通常不止一层，需要做一次 merge
    return merge(typeof locale === 'function' ? locale() : locale, localeFromContext);
  }, [componentName, defaultLocale, fullLocale]);

  const getLocaleCode = React.useMemo<string>(() => {
    const localeCode = fullLocale?.locale;
    // Had use LocaleProvide but didn't set locale
    if (fullLocale?.exist && !localeCode) {
      return defaultLocaleData.locale;
    }
    return localeCode!;
  }, [fullLocale]);

  return [getLocale, getLocaleCode] as const;
};

export default useLocale;
