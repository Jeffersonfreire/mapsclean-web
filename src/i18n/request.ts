import {getRequestConfig} from 'next-intl/server';

// Arquivo exigido pelo next-intl para App Router
export default getRequestConfig(async ({locale}) => {
  const supported = ['fr-BE', 'pt-BR', 'en'];
  const lang = supported.includes(locale) ? locale : 'fr-BE';
  const messages = (await import(`./messages/${lang}.json`)).default;
  return {messages};
});


