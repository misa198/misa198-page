import { domain, seoImage } from '@constants/config';
import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const defaultProps = {
  title: 'Misa198',
  description: 'Misa198',
  url: domain,
  image: seoImage,
};

const Seo: FC<Props> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  url = defaultProps.url,
  image = defaultProps.image,
}) => {
  return (
    <Head>
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta name="title" content="Misa198" />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Misa198" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content="Misa198" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
