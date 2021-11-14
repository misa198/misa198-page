import { useTranslate } from '@app/hooks/translate';
import { FC } from 'react';

interface Props {
  url: string;
}

const Comments: FC<Props> = () => {
  const { t } = useTranslate();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">{t('app.blog.comments')}</h2>
    </div>
  );
};

export default Comments;
