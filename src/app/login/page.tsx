'use client';
import React from 'react';
import Image from 'next/image';
import buildingImage from '../../../public/city.svg'; // Update with the path to your image
// import supabase from '@/lib/helper/supabaseClient';
import { supabaseBrowser } from '@/lib/supabase/browser';
import LoginForm from '@/components/loginForm';
// import {supabase} from ''

const LoginPage = () => {

  // Dummy function to handle form submission
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement)?.value;
    signUpNewUser(email, password);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  function signUpNewUser(email: string, password: string) {
    const supabase = supabaseBrowser()
    supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'https://localhost:3000',
      },
    })
  }

  return (
    <div className="flex h-screen bg-white"> {/* Set the background to white */}
      <div className="m-auto">
        {/* Login Form */}
        <LoginForm handleLogin={handleLogin}></LoginForm>
      </div>
      {/* Right Side Image */}
      <div className="hidden lg:block lg:w-1/2">
        <Image src={buildingImage} alt="Building" />
      </div>
    </div>
  );
};

export default LoginPage;
