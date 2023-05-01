type InfoPanelProps = {
    imgSrc?: string;
    level: number;
    title: string;
    description: string;
}
function InfoPanel(props: InfoPanelProps) {
    return (
        <section className="w-[400px] h-[700px] min-h-96 flex flex-col items-center justify-center shadow-2xl rounded-md p-8">
            <img src={props.imgSrc} />
            <span className="text-white text-2xl text-center font-semibold my-2">{props.level}.Stupeň</span>
            <span className="text-white text-xl text-center">{props.title}</span>
            <span className="text-kryptokurz-gray my-4">
                {props.description}
            </span>
        </section>
    )
}

export default InfoPanel;