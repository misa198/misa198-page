import { useTranslate } from '@app/hooks/translate';
import Button from '@components/common/Button';
import bg from '@public/images/background.svg';
import introduction from '@public/images/introduction-background.svg';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

const Introduction: FC = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className="absolute z-0 top-0 right-0 left-auto w-full max-w-xl">
        <Image src={bg} alt="background" />
      </div>
      <section className="container mx-auto px-4 py-12 mb-14 flex relative z-10 md:pt-52 md:px-32 md:mb-32">
        <div className="w-full flex flex-col items-center md:w-1/2 md:items-start md:justify-center">
          <h3
            className="font-bold text-center mb-8 md:text-left"
            style={{
              fontSize: '31pt',
            }}
          >
            {t('app.home.introduction-title')}
          </h3>
          <p className="text-center text-secondary text-2xl mb-12 md:text-left md:text-3xl">
            {t('app.home.introduction-subtitle')}
          </p>
          <Link href="/portfolio" passHref>
            <a>
              <Button variant="contained" color="primary">
                {t('app.home.introduction-see-more')}
              </Button>
            </a>
          </Link>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src={introduction} alt="introduction" />
        </div>
      </section>
    </>
  );
};

export default Introduction;
