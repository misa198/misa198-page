import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import { NextPage } from 'next';

const PortfolioPage: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo
        title={`${t('app.about.title')} | ${t('app.common.name')}`}
        description={t('app.about.description')}
      />
      <div className="container mx-auto mt-12">
        <h2 className="text-center text-xl text-gray-600">
          {t('app.about.subtitle')}
        </h2>
      </div>
    </>
  );
};

export default PortfolioPage;
