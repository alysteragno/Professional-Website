
type Props = {
    id: string;
    placeholder: string;
    className?: string;
    required?: boolean;
    minLength?: number;
    pattern?: string;
};

export default function ContactInput( { id, placeholder, className, required, minLength, pattern } : Props ) {
    return (
        <input  
            type="text" 
            id={id}
            name={id}
            placeholder={placeholder}
            className={`border-2 border-[#8892B0] rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-white-500 resize-none ${className || '' }`}
            required={required}
            minLength={minLength}
            autoComplete="on"
            pattern={pattern}
        />
    )
}   