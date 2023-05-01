function Footer() {
    return (
        <footer className="py-10 text-kryptokurz-gray w-full flex items-center justify-center ">

            <p className="w-1/2 font-semibold">
                © {new Date().getFullYear()}<br />
                Investovanie do kryptomien  môže viesť k peňažnej strate.
                Kryptokurz.sk nie je zodpovedný za stratu peňazí a neposkytuje finančné poradenstvo.
                Poskytuje vzdelanie a informácie potrebné k vlastnej analýze trhu.
            </p>
        </footer>
    )
}

export default Footer