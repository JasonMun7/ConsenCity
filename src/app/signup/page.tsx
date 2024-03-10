'use client';
import React from 'react';
import Image from 'next/image';
import buildingImage from '../../../public/city.svg'; // Update with the path to your image
import EmailSignUp from '../../components/emailSignup';
import { supabaseBrowser } from '@/lib/supabase/browser';

const SignUpPage = () => {
  const supabase = supabaseBrowser();
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement)?.value;

    await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'https://localhost:3000',
      }
    });
  };

  return (
    <div className="flex h-screen bg-white w-auto"> {/* Set the background to white */}
      <div className="m-auto">
        <div className="card-container">
          <div className="card bg-white shadow-xl"> {/* Card background to white */}
            <div className="card-body flex flex-row justify-between">
              <div className='w-[60%] px-20 flex flex-col justify-center'>
                <h2 className="text-center text-3xl font-bold text-black ">Sign up</h2>
                {/* Login Form */}
                <EmailSignUp handleSignUp={handleSignUp}></EmailSignUp></div>
              <div className="card-image w-[40%]">
                <Image src={buildingImage} alt="Building" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
