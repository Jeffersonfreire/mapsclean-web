import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Locales suportados: fr-BE (padrão), pt-BR, en
  const supported = ['fr-BE', 'pt-BR', 'en'] as const;
  const isSupported = typeof locale === 'string' && (supported as readonly string[]).includes(locale);
  const lang: string = isSupported ? (locale as string) : 'fr-BE';
  const messages = (await import(`./messages/${lang}.json`)).default;
  return { locale: lang, messages };
});

export const defaultLocale = 'fr-BE';
export const locales = ['fr-BE', 'pt-BR', 'en'];

