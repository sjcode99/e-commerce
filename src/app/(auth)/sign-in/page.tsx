import CustomButton from "@/components/Button";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2">
      <div className="w-full max-w-sm">
        <h2 className="text-4xl font-medium">Log in to Exclusive</h2>
        <p className="text-black text-base mt-4 mb-10">Enter your details below</p>

        <div className="relative z-0 w-full mb-7 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email or Phone Number
          </label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
          <input
            type="password"
            name="password"
            id="floating_pswd"
            className="block py-2.5 px-0 w-full text-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_pswd"
            className="peer-focus:font-medium absolute text-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className="flex justify-between items-center">
          <CustomButton text="Login" size="small" bgColor={true} />
          <Button variant={"link"} className="text-[#DB4444] mt-4">
            Forgot Password?
          </Button>
          {/* <CustomButton text="Forgot Password?" size="small" bgColor={false} /> */}
        </div>
      </div>
    </div>
  );
}
