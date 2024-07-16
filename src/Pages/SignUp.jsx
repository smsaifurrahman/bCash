/** @format */

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../Hooks/useAxiospublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const password = form.password.value
        const userType = form.userType.value;
        const userStatus = 'Pending';

        const userInfo = {
            name, email, phone, password, userType , userStatus
        }
        console.log(userInfo);

        try {
            const { data } = await axiosPublic.post("/user", userInfo);
            console.log(data);
         } catch (err) {
            console.log(err.message);
         }

        
      
         
      }

   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="flex flex-col max-w-md  rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-4 text-center">
               <h1 className="mb-3 text-4xl font-bold">Register</h1>
               <p className="text-xl text-gray-400">Welcome to bCash</p>
            </div>
            <form
               onSubmit={handleSubmit}
               noValidate=""
               action=""
               className="space-y-4 ng-untouched ng-pristine ng-valid"
            >
               <div className="space-y-2">
                  <div>
                     <label htmlFor="name" className="block mb-2 text-sm">
                        Name
                     </label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                     />
                  </div>

                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter Your Email Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm">
                        Phone
                     </label>
                     <input
                        type="number"
                        name="phone"
                        
                        required
                        placeholder="Enter Your Phone Number"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm">
                        Phone
                     </label>
                     <select 
                     name="userType"
                     className="select select-info w-full max-w-xs">
                        <option disabled selected>
                           Register As
                        </option>
                        <option>Regular user</option>
                        <option>Agent</option>
                        
                     </select>
                  </div>
                  <div>
                     <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm mb-2">
                           PIN
                        </label>
                     </div>
                     <input
                        // type='password'
                        name="password"
                        autoComplete="new-password"
                        id="password"
                        required
                        placeholder="Enter 5 digit PIN"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                     />
                  </div>
               </div>

               <div>
                  <button
                     type="submit"
                     className="bg-rose-500 w-full rounded-md py-3 text-white"
                  >
                     Continue
                  </button>
               </div>
            </form>

            <p className="px-6 text-sm text-center text-gray-400">
               Already have an account?{" "}
               <Link
                  to="/"
                  className="hover:underline hover:text-rose-500 text-gray-600"
               >
                  Login
               </Link>
               .
            </p>
         </div>
      </div>
   );
};

export default SignUp;
