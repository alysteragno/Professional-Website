'use client';
import ContactInput from '../contactme/contactInput'
import ComponentName from '../sectionName'
import { useForm } from 'react-hook-form'


type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
export default function Contact() {

    const {
        register,
        handleSubmit,
        } = useForm<FormData>()
    
    const onFormSubmit = async (formData: FormData) => {
        console.log(formData)
    }
    return (
        <div>
            <div className='lg:flex lg:justify-center'>
                <ComponentName name = "Contact me !" />
            </div>
            <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div>
                        <div className="flex justify-between  w-[29em] lg:w-[35em]">
                            <div className='flex justify-between w-full'>
                                <ContactInput 
                                    id="firstname"
                                    placeholder="First Name"
                                    className="w-[14em] lg:w-[17em]"
                                    required={true}
                                    minLength={3}
                                    pattern="^[^\d]*$"
                                    {...register('firstName',)}
                                />
                                <ContactInput 
                                    id="lastname"
                                    placeholder="Last Name"
                                    className="w-[14em] lg:w-[17em]"
                                    required={true}
                                    minLength={3}
                                    pattern="^[^\d]*$"
                                    {...register('lastName',)}
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <ContactInput
                                id="Email"
                                placeholder='Email'
                                className='w-full'
                                required={true}
                                minLength={10}
                                {...register('email',)}
                            />
                        </div>
                        <div className="w-full">
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            className="w-full h-32 p-3 border-2 border-[#8892B0] rounded-md focus:outline-none focus:ring-2 focus:ring-white-500 resize-none"
                            required={true}
                            {...register('message',)}
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
              </form>
            </div>
      </div>
    );
}
