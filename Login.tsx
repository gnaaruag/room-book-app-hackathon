'use client'
import {signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className="bg-[#53c9eabe] h-screen flex flex-col
    items-center justify-center text-center">
        <img
          src="https://cdn.sanity.io/images/12w2r3bf/production/cfa6b8a2645278b5de40f3807c27babd63360c8f-512x512.png"
          
          width={300}
          height={300}
          alt="logo"
          />
           
        
        
        <button 
        onClick={()=>signIn("google")}
        className="text-black font-bold text-3xl
        animate-pulse">Sign In to use Edoc-X</button>



    </div>
  );
}

export default Login;