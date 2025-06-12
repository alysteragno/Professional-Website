import ContactInput from '../contactme/contactInput';
import ComponentName from '../sectionName'

export default function Contact() {
    return (
        <div>
            <div className='lg:flex lg:justify-center'>
                <ComponentName name = "Contact me !" />
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <div className="flex justify-between  w-[29em] lg:w-[35em]">
                        <div className='flex justify-between w-full'>
                            <ContactInput 
                                id="firstname"
                                placeholder="First Name"
                                className="w-[14em] lg:w-[17em]"
                            />
                            <ContactInput 
                                id="lastname"
                                placeholder="Last Name"
                                className="w-[14em] lg:w-[17em]"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <ContactInput
                            id="Email"
                            placeholder='Email'
                            className='w-full'
                        />
                    </div>
                    <div className="w-full">
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        className="w-full h-32 p-3 border-2 border-[#8892B0] rounded-md focus:outline-none focus:ring-2 focus:ring-white-500 resize-none"
                    />
                    </div>

                    <div className='items-center flex justify-center my-5'>
                        <button 
                            className='border-2 border-[#8892B0] rounded-xl p-4 w-full hover:cursor-pointer hover:bg-[#1B2D47]
                                       lg:w-[12em] lg:p-3'
                        >
                            <h4 className='font-bold text-xl lg:text-lg'>Submit</h4>
                        </button>
                    </div>          
                </div>
            </div>
      </div>
    );
}
