function Footer() {
    return (
        <footer className="py-10 px-2 text-kryptokurz-gray w-full flex items-center justify-center ">

            <p className="font-semibold w-full text-left flex items-center justify-center">
                © {new Date().getFullYear()}<br />
                Investovanie do kryptomien  môže viesť k peňažnej strate.<br />
                Kryptokurz.sk nie je zodpovedný za stratu peňazí a neposkytuje finančné poradenstvo.<br />
                Poskytuje vzdelanie a informácie potrebné k vlastnej analýze trhu.
            </p>
        </footer>
    )
}

export default Footer