// LoginForm.tsx
import React from 'react';

interface LoginFormProps {
  handleSignUp: React.FormEventHandler<HTMLFormElement>;
}

const EmailSignUp: React.FC<LoginFormProps> = ({ handleSignUp }) => {
  return (
    // <form className="text-black" action="/auth/sign-up" method="post">
    <form className="text-black" onSubmit={handleSignUp}>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text text-black">Email address</span>
        </label>
        <input id="email" type="email" placeholder="Enter Email" className="bg-white input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text text-black">Password</span>
        </label>
        <input id="password" type="password" placeholder="Enter Password" className="bg-white input input-bordered" required />
        <div className="label" style={{ marginLeft: 'auto' }}>
          <a href="/login" className="label-text-alt link link-hover text-blue-600">Sign In</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        </div>
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-white">Sign Up</button>
        </div>
      </div>

    </form>
  );
};

export default EmailSignUp;