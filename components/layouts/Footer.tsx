import { useTranslate } from '@app/hooks/translate';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import styles from './Footer.module.css';

const Tooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

const footerLinks = [
  {
    href: 'https://github.com/misa198',
    Icon: GitHub,
    tooltip: 'GitHub',
  },
  {
    href: 'https://twitter.com/misa19820',
    Icon: Twitter,
    tooltip: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/th%C3%A0nh-v%C5%A9-2223581b3/',
    Icon: Linkedin,
    tooltip: 'LinkedIn',
  },
];

const Footer: FC = () => {
  const { t, locale } = useTranslate();
  const router = useRouter();
  const { pathname, query, asPath } = router;

  function onChangeLanguage() {
    router.push({ pathname, query }, asPath, {
      locale: locale === 'en' ? 'vi' : 'en',
    });
  }

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
          <div className="flex mb-2 select-none">
            <span
              className="material-icons text-highlight cursor-pointer"
              data-for="change-language"
              data-tip
              onClick={onChangeLanguage}
            >
              translate
            </span>
            <Tooltip effect="solid" id="change-language">
              {t('app.footer.change-language')}
            </Tooltip>
            {footerLinks.map(({ href, Icon, tooltip }, index) => (
              <Link key={index} href={href} passHref>
                <a
                  className="mx-2 md:mx-0 md:ml-4"
                  target="_blank"
                  data-for={`nav-link-${index}`}
                  data-tip
                >
                  <Icon className="text-highlight" />
                  <Tooltip effect="solid" id={`nav-link-${index}`}>
                    {tooltip}
                  </Tooltip>
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
