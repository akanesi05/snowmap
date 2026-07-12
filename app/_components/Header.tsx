"use client";
import Link from "next/link";
import Image from "next/image";
import type { Session } from "next-auth";
import { useState } from "react";
import { signOut } from "next-auth/react";

type HeaderProps = {
  session: Session | null;
};
export default function Header({ session }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu((openMenu) => !openMenu);
  };
  const closeFunction = () => {
    setOpenMenu(false);
  };
  return (
    <header className="bg-[#0EA5E9] py-4 px-4 text-white">
      <div className="flex justify-between mx-auto max-w-6xl items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="ロゴ" width={32} height={32} />
          <span className="font-bold text-lg">Snow Map</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/places/index">聖地一覧</Link>
          <Link href="/places/new">聖地投稿</Link>
          {session && session.user ? (
            <>
             
              <Link
              href="/profile"
            >
              <p className="hover:text-blue-300">{session.user.name}</p>
            </Link>
              <button className="cursor-pointer" onClick={() => signOut()}>ログアウト</button>
            </>
          ) : (
            <>
              <Link href="/auth/login">ログイン</Link>
              <Link href="/auth/register">新規登録</Link>
            </>
          )}
        </div>
        <button className="text-xl md:hidden" onClick={menuFunction}>
          ☰
        </button>
      </div>
      <nav className={`${openMenu ? "block" : "hidden"} md:hidden px-4 py-4 `}>
        <ul>
          <li className="mt-2 text-xl ">
            <Link href="/places/index" onClick={closeFunction}>
              聖地一覧
            </Link>
          </li>
          <li className="mt-2 text-xl ">
            <Link href="/places/new" onClick={closeFunction}>
              聖地投稿
            </Link>
          </li>
        </ul>
        {session && session.user ? (
          <ul>
            <li className="text-xl ">
               <Link
              href="/profile"
            >
             <p className="hover:text-blue-300">{session.user.name}</p>
            </Link>
      
              <button className="mt-2 cursor-pointer" onClick={() => signOut()}>ログアウト</button>
            </li>
          </ul>
        ) : (
          <>
            <ul>
              <li className="mt-2 text-xl">
                <Link href="/auth/login" onClick={closeFunction}>
                  ログイン
                </Link>
              </li>
              <li className="mt-2 text-xl ">
                <Link href="/auth/register" onClick={closeFunction}>
                  新規登録
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}
