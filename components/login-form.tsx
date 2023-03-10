
import { useState } from 'react';
import { login } from '../api/indexApi';
import { useForm } from '../hooks/useForm';
import Alert from './alert';

export default function LoginForm() {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const initialState = {
        username: "",
        password: "",
    };

    const handleLogin = async () => {
        const { username, password }: any = values;
        if(!username && !password){
            setError('All fields must be not empty')
            return;
        }
        const result = await login(username, password);
        if (result.statusCode === 401) {
            setMessage('Username & password do not match our records');
            setOpen(true);
            return;
        }
        
        localStorage.setItem('__AUTHTOKEN__', result.token);
        localStorage.setItem('__USER__', username);
        window.location.reload();

    }

    const { onChange, onSubmit, values } = useForm(
        handleLogin,
        initialState
    );


    return (
        <div className="flex items-center justify-center lg:py-12 py-4 px-4 sm:rounded-lg">
            <div className="w-full bg-white max-w-md ">
                <div className="flex items-stretch">
                    <img className="px-0" role="img-header" src="./img/header-login.png" alt="Your Company" />
                    <img className="mx-0 mt-12 mx-auto h-16 w-auto" src="./img/logo.png" alt="Your Company" />
                </div>
                <div className="lg:py-6 sm:py-4: px-6 sm:px-6 lg:px-8">
                    <h2 className="mt-6 pt-12 text-start text-3xl font-bold tracking-tight text-gray-900">Login</h2>
                    <p className="mt-2 text-start text-sm text-gray-600">Please sign in to continue</p>
                </div>
                <form className="py-6 lg:py-6 sm:py-4: px-6 sm:px-6 lg:px-8" onSubmit={onSubmit}>
                    <div className="-space-y-px rounded-md">
                        <div className="py-4">
                            <label htmlFor="username">Username</label>
                            <input name="username" id="username" type="text" onChange={onChange} className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black sm:text-sm" placeholder="Username" />
                        </div>
                        <div className="py-4">
                            <label htmlFor="password">Password</label>
                            <input name="password" id="password" type="password" onChange={onChange} className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black sm:text-sm" placeholder="Password" />
                        </div>
                        <p className='text-red-500 pb-6'>{error}</p>
                    </div>

                    <div className="flex">
                        <button type="submit" aria-label="login" className="group w-full relative rounded-full border border-transparent bg-rose-500 py-2 px-10 text-lg font-medium text-white hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Login
                        </button>
                    </div>

                    <div className='flex flex-col-reverse divide-y divide-y-reverse text-center'>
                        OR
                    </div>

                    <div className="flex justify-center mt-12">
                        <div className="text-sm">
                            Login Demo Username: <span className="font-medium text-orange-600">user_demo</span> Password: <span className="font-medium text-orange-600">Passw0rd</span>
                        </div>
                    </div>
                </form>
            </div>
            <Alert open={open} setOpen={setOpen} message={message}/>
        </div>
    )
}