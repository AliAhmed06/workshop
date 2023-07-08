"use client";
import React, { useState } from 'react'
import SimpleField from './components/SimpleField';
import { useRouter } from 'next/navigation';

function page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginHandler = (e) => {
    e.preventDefault();
    if(name == "test" && password == "test"){
      router.push("/home");
    }
    else{
      alert('Invalid credentials');
    }

    console.log(`name is = ${name} and password is = ${password}`);

  }
  
  return (
    <div className='bg-[url("/images/bg.jpg")] bg-no-repeat bg-center bg-cover w-full h-screen '>
      <div className='flex items-center h-full w-full  justify-center bg-black bg-opacity-50'>
        <div className='  w-[100%] bg-black p-5 
                        md:w-[80%] lg:w-[30%]'>
          <h2 className='text-white  text-center text-2xl font-bold'>Sign in</h2>

          <form className='mt-5 space-y-3'>
            
            <SimpleField placeholder={"Enter Name"} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <SimpleField placeholder={"Enter Password"} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button 
              className='bg-red-700 w-full py-2 font-bold text-white'
              onClick={loginHandler}
            >Signin</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default page