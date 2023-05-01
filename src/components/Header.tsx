import CookieBanner from "./CookieBanner";

function Header() {
    return (
        <>
            <CookieBanner />
            <header
                className="h-28 flex items-center justify-center [&>a]:text-base [&>a]:cursor-pointer [&>a]:mx-4 text-kryptokurz-gray font-semibold"
            >
                <a className="hover:text-gray-200" href="/">Domov</a>
                <a className="hover:text-gray-200" href="/slovnik">Krypto Slovník</a>
                <a className="hover:text-gray-200" href="/nastroje">Nástroje</a>
                <a className="hover:text-gray-200" href="/krypto101">Krypto 101</a>
                <a className="hover:text-gray-200" href="/kontakt">Kontakt</a>
                <a className="hover:text-gray-200 pr-2" href="/portfolio">Portfólio</a>
                <section className="[&>a]:cursor-pointer [&>a]:mx-1 [&>a]:font-medium">
                    <a className="bg-green-700 hover:bg-green-600 text-white rounded py-2.5 px-4"
                    >Produkty/Cenník</a
                    >
                    <a
                        className="border-2 border-green-700 hover:border-green-600 text-green-700 hover:text-green-600 rounded py-2.5 px-6"
                        href="https://www.client.kryptokurz.sk/">Účet</a
                    >
                </section>
            </header>
        </>
    )
}

export default Header;