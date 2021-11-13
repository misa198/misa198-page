import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import { NextPage } from 'next';

const PortfolioPage: NextPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo
        title={t('app.about.title')}
        description={t('app.about.description')}
      />
      <div className="container mx-auto">
        <h2 className="">{t('app.404.title')}</h2>
      </div>
    </>
  );
};

export default PortfolioPage;
