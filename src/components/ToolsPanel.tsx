type Tool = {
    img: string;
    name: string;
    description: string;
    link?: string;
}
type ToolsPanelProps = {
    title: string;
    tools: Tool[];
}
function ToolsPanel({ title, tools }: ToolsPanelProps) {
    return (
        <article className="w-[400px] flex flex-col items-center rounded shadow-2xl">
            <section className="text-white font-semibold bg-kryptokurz-green w-full p-6">
                {title}
            </section >
            <section className="w-full">
                {tools.map(tool => (
                    <a href={tool.link} target="_blank" className="flex p-8 border border-kryptokurz-gray border-t-0">
                        <img className="w-12 h-12 mr-5" src={tool.img} />
                        <section className="flex flex-col">
                            <span className="text-white text-lg font-semibold">{tool.name}</span>
                            <span className="text-kryptokurz-gray text-md font-semibold pl-0 p-1">"{tool.description}"</span>
                        </section>
                    </a>
                ))}
            </section>
        </article >
    )
}

export default ToolsPanel;