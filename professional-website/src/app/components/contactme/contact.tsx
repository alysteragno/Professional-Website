import ContactInput from '../contactme/contactInput';
import ComponentName from '../sectionName'

export default function Contact() {
    return (
        <div>
            <div className='lg:flex lg:justify-center'>
                <ComponentName name = "Contact me" />
            </div>
            <div className="flex flex-col items-center w-full">
                <div>
                    <div className="flex space-x-4">
                        <ContactInput 
                            id="firstname"
                            placeholder="First Name"
                            className="w-full"
                        />
                        <ContactInput 
                            id="lastname"
                            placeholder="Last Name"
                            className="w-full"
                        />
                    </div>

                    {/* Email Input */}
                    
                    <div className="w-full">
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        className="w-full h-32 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500 resize-none"
                    />
                    </div>

                    <div className='items-center flex justify-center my-5'>
                        <button 
                            className='border-2 rounded-xl p-4 w-full hover:cursor-pointer hover:bg-[#1B2D47]'
                        >
                            <h4 className='font-bold text-xl'>Submit</h4>
                        </button>
                    </div>          
                </div>
            </div>
      </div>
    );
}
