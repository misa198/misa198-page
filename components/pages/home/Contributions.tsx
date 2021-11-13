import { useTranslate } from '@app/hooks/translate';
import { username } from '@constants/config';
import { FC } from 'react';
import GitHubCalendar from 'react-github-calendar';

const Contributions: FC = () => {
  const { t } = useTranslate();

  return (
    <section className="container mx-auto mt-16 md:mt-20">
      <h1 className="text-2xl font-bold mb-8">
        {t('app.home.contribution-title')}
      </h1>
      <GitHubCalendar
        username={username}
        fontSize={16}
        blockSize={22}
        hideColorLegend
        labels={{
          totalCount: t('app.home.contribution-total-label'),
        }}
      />
    </section>
  );
};

export default Contributions;
