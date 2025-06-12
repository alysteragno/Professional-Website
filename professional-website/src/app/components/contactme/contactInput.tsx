export default function ContactInput() {
    return (
          <div className="flex justify-center space-x-4">
                <form action="">
                <input 
                   type="text" 
                   id="firstName" 
                   name="firstName" 
                   placeholder="First Name"
                   className="border border-gray-300 rounded-md p-2 mb-4"
                />
                </form>
            </div>
    )
}