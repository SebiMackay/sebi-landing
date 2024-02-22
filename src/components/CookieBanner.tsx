import { useState, useEffect } from "react";
import { inject } from "@vercel/analytics";


function CookieBanner() {
  const [open, setOpen] = useState(false);

  const injectGAScript = () => {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-227185768-1";
    document.body.appendChild(gaScript);
    gaScript.onload = () => {
      // Initialize Google Analytics once the script is loaded
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-227185768-1");

      // Trigger a pageview
      gtag("event", "pageview");
    };
  };

  const injectAnalytics = () => {
    injectGAScript();
    inject();
  };

  useEffect(() => {
    const prev = localStorage.getItem("cookie_ack");
    if (prev) {
      setOpen(!Boolean(prev));
      injectAnalytics();
    } else {
      setOpen(true);
    }
  }, []);
  return (
    <section
      className={`${open ? "visible" : "hidden"
        } w-full min-h-14 bg-kryptokurz-cookie-banner text-xs whitespace-pre-line text-white p-4 flex flex-wrap lg:flex-nowrap  items-center
        justify-between
        `}
    >
      <p>
        Táto webová stránka používa súbory cookie, aby ste pri jej návšteve mali
        čo najlepší zážitok. Pre viac informácií si prečítajte naše{" "}
        <a href="/gdpr" className="underline text-gray-400 ml-1">
          zásady ochrany osobných údajov
        </a>
        . Ak si želáte akceptovať použitie nepodstatných súborov cookie,
        kliknite na tlačidlo "Súhlasím"
      </p>
      <section className="mr-4 [&>button]:mx-1 my-2 flex">
        <button
          className="border border-white py-1.5 px-4"
          onClick={() => {
            setOpen(false);
          }}
        >
          Zamietnuť
        </button>
        <button
          className="border border-white py-1.5 px-4"
          onClick={() => {
            setOpen(false);
            localStorage.setItem("cookie_ack", "true");
            injectAnalytics();
          }}
        >
          Súhlasím
        </button>
      </section>
    </section>
  );
}

export default CookieBanner;
