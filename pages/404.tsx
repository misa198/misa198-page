import { useTranslate } from '@app/hooks/translate';
import notFound from '@public/images/not-found.svg';
import { NextPage } from 'next';
import Image from 'next/image';

const NotFoundPage: NextPage = () => {
  const { t } = useTranslate();

  return (
    <div className="container mx-auto">
      <div className="pt-20 px-10 lg:px-40">
        <Image src={notFound} alt="Not found" />
      </div>
      <h2 className="text-4xl font-bold text-center mt-16">
        {t('app.404.title')}
      </h2>
    </div>
  );
};

export default NotFoundPage;
