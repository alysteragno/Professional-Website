import Line from './line';
type Section = {
    name: string;
    className?: string;
}
export default function SectionName( { name, className }: Section ) {
    return (
        <div className={`p-6 
                         lg:flex ${className || '' }`}>
            <div>
                <h2
                    className="text-3xl font-bold mb-4 text-center border-b-[0.1px]
                    lg:pb-0 pb-3 lg:text-4xl lg:border-0 lg:text-start"
                    style={{ borderColor: "var(--color-quaternary)" }}
                >
                {name}
                </h2>
            </div>
             <Line/>
        </div>
    )
}