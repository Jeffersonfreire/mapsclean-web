import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const supported = ['fr-BE', 'pt-BR', 'en'] as const;
  const isSupported = typeof locale === 'string' && supported.includes(locale as any);
  const lang: string = isSupported ? (locale as string) : 'fr-BE';
  const messages = (await import(`../src/i18n/messages/${lang}.json`)).default;
  return { locale: lang, messages };
});


