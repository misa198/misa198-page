import { useTranslate } from '@app/hooks/translate';
import { FC } from 'react';

interface Props {
  url: string;
}

const Comments: FC<Props> = ({ url }) => {
  const { t } = useTranslate();

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mt-8">{t('app.blog.comments')}</h2>
      <div
        className="fb-comments"
        data-href={url}
        data-numposts="5"
        data-width="100%"
        data-order-by="reverse_time"
      />
    </div>
  );
};

export default Comments;
