import { FC } from 'react';
import styles from './Footer.module.css';
import { useTranslate } from '@app/hooks/translate';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import Link from 'next/link';

const footerLinks = [
  {
    href: 'https://github.com/misa198',
    Icon: GitHub,
  },
  {
    href: 'https://twitter.com/misa19820',
    Icon: Twitter,
  },
  {
    href: 'https://www.linkedin.com/in/th%C3%A0nh-v%C5%A9-2223581b3/',
    Icon: Linkedin,
  },
];

const Footer: FC = () => {
  const { t } = useTranslate();

  return (
    <footer className={`w-full ${styles.footer}`}>
      <div className="container mx-auto mt-52">
        <div
          className="text-4xl select-none mb-8 text-center md:text-left"
          style={{ fontFamily: '"Righteous", sans-serif' }}
        >
          {t('app.common.name')}
        </div>
        <div className="mb-8 flex flex-col items-center md:flex-row justify-between">
          <div className="mb-5 md:mb-0">{t('app.footer.copyright')}</div>
          <div className="flex mb-2">
            {footerLinks.map(({ href, Icon }, index) => (
              <Link key={index} href={href} passHref>
                <a className="mx-2 md:mx-0 md:ml-4" target="_blank">
                  <Icon className="text-highlight" />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
