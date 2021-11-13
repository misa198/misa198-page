import { useTranslate } from '@app/hooks/translate';
import { useWindowWidth } from '@react-hook/window-size';
import classnames from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Menu, X } from 'react-feather';
import ScrollLock from 'react-scrolllock';

const navLinks = [
  {
    href: '/',
    label: 'app.header.home',
  },
  {
    href: '/portfolio',
    label: 'app.header.portfolio',
  },
  {
    href: '/blogs',
    label: 'app.header.blogs',
  },
];

const Header: FC = () => {
  const { t } = useTranslate();
  const windowWidth = useWindowWidth();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  function onToggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className="relative w-full container mx-auto p-4 flex justify-between items-center z-20 md:px-32">
      <ScrollLock isActive={isOpenMenu && windowWidth < 768} />
      <Link href="/" passHref>
        <a
          className="text-3xl select-none"
          style={{
            fontFamily: '"Righteous", sans-serif',
          }}
        >
          {t('app.common.name')}
        </a>
      </Link>
      <span className="cursor-pointer md:hidden" onClick={onToggleMenu}>
        <Menu />
      </span>
      <div
        className={classnames(
          'absolute z-10 inset-0 w-screen h-screen bg-black transition-all duration-300 md:hidden',
          {
            'visible opacity-60': isOpenMenu,
            'invisible opacity-0': !isOpenMenu,
          },
        )}
      />
      <div
        className={classnames(
          `absolute z-20 top-0 right-0 left-auto bg-white w-64 h-screen flex flex-col py-4 pl-5 pr-4
          transform transition-transform duration-300 md:static md:flex-row md:h-auto md:p-0 md:w-auto
          md:transform-none md:bg-transparent md:transition-none`,
          {
            'translate-x-0': isOpenMenu,
            'translate-x-full': !isOpenMenu,
          },
        )}
      >
        <div className="w-full flex justify-end mb-3 md:hidden">
          <span className="cursor-pointer" onClick={onToggleMenu}>
            <X />
          </span>
        </div>
        {navLinks.map(({ href, label }, index) => (
          <Link key={index} href={href} passHref>
            <a className="mb-3 md:mb-0 md:mx-4 md:hover:text-highlight md:transition-colors duration-200">
              {t(label)}
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
