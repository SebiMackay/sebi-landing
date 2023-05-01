import { useState, useEffect } from "react";

function CookieBanner() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const prev = localStorage.getItem("cookie_ack");
        if (prev) {
            setOpen(!Boolean(prev));
        } else {
            setOpen(true);
        }
    }, []);
    return (
        <section className={`${open ? "visible" : "hidden"} w-full min-h-14 bg-kryptokurz-cookie-banner text-xs whitespace-pre-line text-white p-4 flex flex-wrap lg:flex-nowrap  items-center
        justify-between
        `}>
            <p>
                Táto webová stránka používa súbory cookie, aby ste pri jej návšteve mali čo najlepší zážitok.
                Pre viac informácií si prečítajte naše <a href="/gdpr" className="underline text-gray-400 ml-1">zásady ochrany osobných údajov</a>.
                Ak si želáte akceptovať použitie nepodstatných súborov cookie, kliknite na tlačidlo "Súhlasím"
            </p>
            <section className="mr-4 [&>button]:mx-1 my-2 flex">
                <button className="border border-white py-1.5 px-4" onClick={() => { setOpen(false); }}>Zamietnuť</button>
                <button className="border border-white py-1.5 px-4" onClick={() => { setOpen(false); localStorage.setItem("cookie_ack", "true"); }}>Súhlasím</button>
            </section>
        </section>
    )
}

export default CookieBanner;