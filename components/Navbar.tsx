'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

import Button from './ui/Button';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const changeSelectedMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-white shadow dark:bg-navy-750">
      <nav className="mx-auto flex h-16 items-center justify-between px-2">
        <Link className="cursor-pointer" href="/">
          <Image
            src={
              theme === 'light'
                ? '/logos/icon-right-logo.svg'
                : '/logos/icon-right-logo-dark.svg'
            }
            alt="InkFlow AI Convert logo"
            width={180}
            height={20}
          />
        </Link>
        <ul className=" flex items-center gap-4">
          <li>
            <Link
              className="font-medium transition-colors hover:text-indigo-500"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium transition-colors hover:text-indigo-500"
              href="/"
            >
              Cloud
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button type="button" onClick={changeSelectedMode} tone="default">
                {theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
