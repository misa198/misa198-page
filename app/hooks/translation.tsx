import en from '@/locales/en/index.json';
import vi from '@/locales/vi/index.json';
import { useRouter } from 'next/router';

interface Message {
  [key: string]: string | Message;
}

const getMessage = (messages: Message, key: string) => {
  const path = key.split('.');
  let message: any = messages;
  try {
    path.forEach((p) => {
      message = message[p];
    });
    return message ? message : key;
  } catch (e) {
    return key;
  }
};

export const useTranslate = () => {
  const router = useRouter();
  const { locale } = router;
  let language = en;
  if (locale === 'vi') language = vi;

  function t(key: string) {
    return getMessage(language, key);
  }

  return { t, locale };
};
