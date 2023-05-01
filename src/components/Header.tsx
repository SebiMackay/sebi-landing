import { ReactNode, useState } from "react";
import CookieBanner from "./CookieBanner";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";


// TODO:add last selected tab to header,can save to localstorage
export default function Header() {
    return (
        <>
            <CookieBanner />
            <header
                className="h-20  bg-kryptokurz-background sticky top-0 z-50 hidden lg:flex items-center justify-center [&>a]:text-base [&>a]:cursor-pointer [&>a]:mx-4 text-kryptokurz-gray font-semibold"
            >
                <a className="hover:text-gray-200" href="/">Domov</a>
                <a className="hover:text-gray-200" href="/slovnik">Slovník</a>
                <a className="hover:text-gray-200" href="/nastroje">Nástroje</a>
                <a className="hover:text-gray-200" href="/krypto101">Krypto 101</a>
                <a className="hover:text-gray-200" href="/kontakt">Kontakt</a>
                <a className="hover:text-gray-200 pr-2" href="/portfolio">Portfólio</a>
                <section className="[&>a]:cursor-pointer [&>a]:mx-1 [&>a]:font-medium">
                    <a className="bg-kryptokurz-green hover:bg-green-600 text-white rounded py-2.5 px-4"
                        href="/cennik"
                    >Produkty/Cenník</a
                    >
                    <a
                        className="border-2 border-kryptokurz-green hover:border-green-600 text-kryptokurz-green hover:text-green-600 rounded py-2.5 px-6"
                        href="https://www.client.kryptokurz.sk/">Účet</a
                    >
                </section>
            </header>
            <section className="w-full bg-kryptokurz-background sticky top-0 flex justify-end p-6 visible lg:hidden">
                <HeaderMenu>
                    <Bars3Icon className="w-7 h-7 text-white cursor-pointer" />
                </HeaderMenu>
            </section>
        </>
    )
}

type HeaderMenuProps = {
    children: ReactNode;
}
type HeaderMenuItemProps = {
    text: string;
    link: string;
}
function HeaderMenu({ children }: HeaderMenuProps) {
    return (
        <Menu as="div" className="relative inline-block text-left z-50">
            <Menu.Button className="inline-flex w-full justify-center rounded-md">
                {children}
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md">
                <div className="flex flex-col bg-kryptokurz-background border-0 
                [&>:nth-child(6)]:border-b-0 [&>:nth-child(7)]:border-b-0 [&>:nth-child(7)]:bg-kryptokurz-green">
                    <HeaderMenuItem text="Domov" link="/" />
                    <HeaderMenuItem text="Slovník" link="/slovnik" />
                    <HeaderMenuItem text="Nástroje" link="/nastroje" />
                    <HeaderMenuItem text="Krypto 101" link="/krypto101" />
                    <HeaderMenuItem text="Kontakt" link="/kontakt" />
                    <HeaderMenuItem text="Portfólio" link="/portfolio" />
                    <HeaderMenuItem text="Cenník" link="/cennik" />
                    <HeaderMenuItem text="Účet" link="https://client.kryptokurz.sk" />
                </div>
            </Menu.Items>
        </Menu>
    )
}

function HeaderMenuItem({ text, link }: HeaderMenuItemProps) {
    return (
        <Menu.Item>
            <a href={link} className="p-2 mx-1 border-b border-b-kryptokurz-gray font-semibold text-lg text-white last:text-kryptokurz-green last:border last:border-kryptokurz-green">{text}</a>
        </Menu.Item>
    )
}