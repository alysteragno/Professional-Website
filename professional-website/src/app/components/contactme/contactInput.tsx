
type Props = {
    id: string;
    placeholder: string;
    className?: string;
};

export default function ContactInput( { id, placeholder, className } : Props ) {
    return (
        <div>
            <form 
                action=""
                className=""
            >
            <input  
                type="text" 
                id={id}
                name={id}
                placeholder={placeholder}
                className={`border-2 border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-white-500 resize-none ${className || '' }`}
            />
            </form>
         
        </div>
    )
}   