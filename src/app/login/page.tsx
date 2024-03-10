'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import buildingImage from '../../../public/city.svg';
import supabase from '../../lib/helper/supabaseClient';
import { supabaseBrowser } from '@/lib/supabase/browser';
import EmailLogin from '@/components/emailLogin';
import OauthLogin from '@/components/oauthLogin';

const LoginPage = () => {
  const [error, setError] = useState<string>('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement)?.value;
    signInEmailUser(email, password);
  };

  const handleLoginWithOAuth = (provider: "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback"
      }
    })
  }

  async function signInEmailUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      setError('Invalid username or password');
      return;
    }
    window.location.href = '/';
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="m-auto">
        <div className="card-container">
          <div className="card bg-white shadow-xl">
            <div className="card-body flex flex-row justify-between items-center">
              <div className="w-[60%] px-20">
                <h2 className="text-center text-3xl font-bold text-black">Sign in to your account</h2>
                <OauthLogin handleOAuthLogin={() => handleLoginWithOAuth("google")} />
                <div className="text-black divider">
                  OR
                </div>
                {error && <p style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>{error}</p>}
                <EmailLogin handleLogin={handleLogin} />
              </div>
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

export default LoginPage;
