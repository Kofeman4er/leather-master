'use client';

import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6246d28b-c263-48d9-8a4d-e1bf4fea81d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div 
    id = "contact" className='w-full px-[12%] py-10 scroll-mt-20  bg-gray-900 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <h4 
        className='text-center mb-2 text-lg text-white'>Connect with me</h4>
        <h2 
        className='text-center text-5xl text-white'>Get in touch</h2>
        <p
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-white'>
            Have questions? We’re here to help! Fill out the form below, and we’ll get back to you as soon as possible!
        </p>
        <form 
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input 
                type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-orange-600 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>
                <input 
                type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-orange-600 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>
            </div>
            <textarea 
            rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-orange-600 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></textarea>

            <button 
            type='submit' className='cursor-pointer px-6 py-3 w-max flex items-center justify-between transition gap-2 bg-black/80 rounded text-white font-semibold mx-auto border border-orange-600 hover:bg-orange-600'>Submit now</button>

            <p className='mt-4 text-white'>{result}</p>
        </form>
    </div>
  )
}

export default Contact