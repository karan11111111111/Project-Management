import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Button } from '@/components/ui/button'

const Auth = () => {
    const [active, setActive] = useState(true);
    return (
        <div className="flex justify-center items-center  h-screen bg-gray-1900">
            <div className="box h-auto w-[25rem] p-10 bg-black-700  rounded-lg shadow-2xl shadow-[#E91E63]">
                <div className="loginbox w-full space-y-5">
                    {active ? <Signup /> : <Login />}
                    <div className="text-center">
                        <span className="text-gray-400">{active ? "Already have an account?" : "Don't have an account?"}</span>
                        <Button 
                            variant="ghost" 
                            onClick={() => setActive(!active)} 
                            className="ml-2 text-rose-400"
                        >
                            {active ? "Sign In" : "Sign Up"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
