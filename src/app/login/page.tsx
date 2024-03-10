'use client';
import React from 'react';
import Image from 'next/image';
import googleIcon from '../../../public/google_logo.svg'; // update the path to where your icon is stored
import buildingImage from '../../../public/city.svg'; // Update with the path to your image
import supabase from '@/lib/helper/supabaseClient';

const LoginPage = () => {
  // Dummy function to handle form submission
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    })
  }


  return (
    <div className="flex h-screen bg-white"> {/* Set the background to white */}
      <div className="m-auto">
        {/* Login Form */}
        <div className="card w-96 bg-white shadow-xl"> {/* Card background to white */}
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold text-black">Sign in to your account</h2> {/* Text to black */}
            {/* Social Login Buttons */}
            <div className="flex flex-col gap-2 my-4">
              <button className="btn btn-outline btn-ghost">
                <Image src={googleIcon} alt="Google" width={20} height={20} /> Sign in with Google
              </button>
            </div>
            <div className="text-black divider">
              OR
            </div>
            {/* Email Password Form */}
            <form className="text-black" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-black">Email address</span> {/* Text to black */}
                </label>
                <input id="email" type="email" placeholder="Enter Email" className="bg-white input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text text-black">Password</span> {/* Text to black */}
                </label>
                <input id="password" type="password" placeholder="Enter Password" className="bg-white input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-blue-600">Forgot password?</a> {/* Link color */}
                </label>
              </div>
              <div className="form-control mt-4">
                <button type="submit" className="btn btn-white">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Right Side Image */}
      <div className="hidden lg:block lg:w-1/2">
        <Image src={buildingImage} alt="Building" />
      </div>
    </div>
  );
};

export default LoginPage;
