import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Locales suportados: fr-BE (padrão), pt-BR, en
  const supported = ['fr-BE', 'pt-BR', 'en'];
  const lang = supported.includes(locale) ? locale : 'fr-BE';
  const messages = (await import(`./messages/${lang}.json`)).default;
  return { messages };
});

export const defaultLocale = 'fr-BE';
export const locales = ['fr-BE', 'pt-BR', 'en'];

