import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supported = ['fr-BE', 'pt-BR', 'en'];
  const lang = supported.includes(locale) ? locale : 'fr-BE';
  const messages = (await import(`../src/i18n/messages/${lang}.json`)).default;
  return {messages};
});


