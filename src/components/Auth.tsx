import { Link } from 'react-router-dom';
export const Auth = ({ type }: { type: "signin" | "signup" }) => {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className=''>
                <div className="text-2xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">
                  {type==="signin" ? "Dont have an account" :"Already have an account"}
                    <Link className="pl-2 underline" to={type==="signin" ? "/signup" :"/signin"}>{type==="signin" ? "Sign In" :"Sign Up"}</Link>
                </div>
                <div className='pt-4'>
                    <form className="bg-white w-full pt-6 pb-8">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Email
                            </label>
                            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="something@gmail.com" />
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Password
                            </label>
                            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***************" />
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className="max-w-lg">
                            <button className="bg-zinc-950 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                               {type==="signin" ? "Sign in" : "SignUp"} 
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>
} 