import {getRequestConfig} from 'next-intl/server';

// Arquivo exigido pelo next-intl para App Router
export default getRequestConfig(async ({ locale }) => {
  const supported = ['fr-BE', 'pt-BR', 'en'] as const;
  const isSupported = typeof locale === 'string' && (supported as readonly string[]).includes(locale);
  const lang: string = isSupported ? (locale as string) : 'fr-BE';
  const messages = (await import(`./messages/${lang}.json`)).default;
  return { locale: lang, messages };
});


