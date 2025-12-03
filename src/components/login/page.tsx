'use client';

import supabase from "../../lib/api/supabase";

const Login = () => {
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });
    console.log(data, error);
  };
  const signInWithKakao = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });
    console.log(data, error);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };

  return (
    <>
      <div className="text-blue-500 text-2xl">Login</div>
      <div className="text-green-500">Welcome to the Login Page!</div>

      <button
        className="cursor-pointer bg-gray-800 text-white rounded-xl px-3 py-1 flex items-center justify-center"
        onClick={signInWithGithub}
      >
        Login With Github!
      </button>
      <button
        className="cursor-pointer bg-yellow-300 text-yellow-900 font-bold rounded-xl px-3 py-1 flex items-center justify-center"
        onClick={signInWithKakao}
      >
        Login With KaKao!
      </button>
      <button
        className="cursor-pointer bg-gray-100 rounded-xl px-3 py-1 flex items-center justify-center"
        onClick={signOut}
      >
        Logout...
      </button>
    </>
  );
};

export default Login;
