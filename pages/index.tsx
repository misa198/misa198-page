import { useTranslate } from '@app/hooks/translate';
import Seo from '@components/common/Seo';
import Contact from '@components/pages/home/Contact';
import Contributions from '@components/pages/home/Contributions';
import Greeting from '@components/pages/home/Greeting';
import Introduction from '@components/pages/home/Introduction';
import Projects from '@components/pages/home/Projects';
import { FC } from 'react';

const Home: FC = () => {
  const { t } = useTranslate();

  return (
    <>
      <Seo
        title={t('app.home.title')}
        description={t('app.home.description')}
      />
      <Introduction />
      <Projects />
      <Contributions />
      <Greeting />
      <Contact />
    </>
  );
};

export default Home;
