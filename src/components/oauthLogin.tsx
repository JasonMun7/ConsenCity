// LoginForm.tsx
import React from 'react';
import Image from 'next/image';
import googleIcon from '../../public/google_logo.svg'; // update the path to where your icon is stored


interface LoginFormProps {
  handleOAuthLogin: React.MouseEventHandler<HTMLButtonElement>;
}

const OauthLogin: React.FC<LoginFormProps> = ({ handleOAuthLogin }) => {
  return (
    <div>
      {/* Social Login Buttons */}
      <div className="flex flex-col gap-2 my-4">
        <button onClick={handleOAuthLogin} className="btn btn-outline btn-ghost">
          <Image src={googleIcon} alt="Google" width={20} height={20} /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default OauthLogin;
