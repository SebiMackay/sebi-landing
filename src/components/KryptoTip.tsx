type KryptoTipProps = {
    svg: SVGElement;
    title: string;
    description: string;
}
function KryptoTip() {
    return (
        <section className="w-[500px] flex  [&>svg]:text-kryptokurz-green [&>svg]:w-14 [&>svg]:h-14">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M56.7 7.3a18 18 0 00-28.7 21l-8 7.9V40h-6v6H8v6H4l-2 2v8h8l25.8-26A18 18 0 0056.7 7.3zm-5.9 11.5a4 4 0 110-5.7 4 4 0 010 5.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path></svg>
            <div className='w-[400px] ml-4 [&>p]:text-white [&>span]:text-kryptokurz-gray'>
                <p className="text-2xl">
                    "Not your keys, not your coins"
                </p>
                <span className="text-lg">
                    V preklade "Nie tvoje kľúče, nie tvoje mince". Ak nevlastníš súkromný kľúč, alebo seed od peňaženky v ktorej je tvoje krypto, tak nie je tvoje. V krypte je najbezpečnejšie držať svoje krypto vo svojej vlastnej peňaženke, od ktorej máš kľúč iba ty. Ten kto má kľúč od peňaženky, má prístup ku všetkému v nej.
                    NIKDY NEZDIEĽAJ SVOJE SÚKROMNÉ
                    KĽÚČE!!
                </span>
            </div>
        </section>
    )
}

export default KryptoTip;

/**
 * <svg className="text-kryptokurz-green w-14 h-14"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle data-name="layer2" cx="21" cy="23" r="5" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle><circle data-name="layer2" cx="43" cy="41" r="5" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle><path data-name="layer2" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M46 18L18 46" stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer1" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M32 4.5L38 2l4.5 4.6H49l2.5 5.9 5.9 2.5v6.5L62 26l-2.5 6 2.5 6-4.6 4.5V49l-5.9 2.5-2.5 5.9h-6.5L38 62l-6-2.5-6 2.5-4.5-4.6H15l-2.5-5.9L6.6 49v-6.5L2 38l2.5-6L2 26l4.6-4.5V15l5.9-2.5L15 6.6h6.5L26 2l6 2.5z" stroke-linejoin="round" stroke-linecap="round"></path></svg>
 */