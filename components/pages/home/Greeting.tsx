import { useTranslate } from '@app/hooks/translate';
import greeting from '@public/images/greeting.svg';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Greeting.module.css';

const Greeting: FC = () => {
  const { t } = useTranslate();

  return (
    <section className={`pt-16 md:pt-20 ${styles.greeting}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full px-10 mb-14 md:w-1/2 md:px-0">
            <Image src={greeting} alt="greeting" />
          </div>
          <div className="w-full text-center flex flex-col items-center md:w-1/2 md:text-left md:items-start md:justify-center md:pl-8">
            <h2 className="font-bold text-2xl mb-3 md:text-3xl">
              {t('app.home.greeting-title')}
            </h2>
            <p className="text-xl text-gray-500 md:text-2xl">
              {t('app.home.greeting-subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
