// LoginForm.tsx
import React from 'react';

interface LoginFormProps {
  handleLogin: React.FormEventHandler<HTMLFormElement>;
}

const EmailLogin: React.FC<LoginFormProps> = ({ handleLogin }) => {
  return (
    <form className="text-black" onSubmit={handleLogin}>
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label style={{ marginRight: 'auto' }} className="label mt-1">
            <a href="#" className="label-text-alt link link-hover text-blue-600">Forgot password?</a>
          </label>
          <label className="label mt-1">
            <a href="/signup" className="label-text-alt link link-hover text-blue-600">Sign Up</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button type="submit" className="btn btn-white">Sign In</button>
        </div>
      </div>

    </form>
  );
};

export default EmailLogin;
