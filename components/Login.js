import { signIn } from 'next-auth/client';
function Login() {
  return (
    <div className="grid place-items-center">
      <h1
        className="p-5 bg-theme-accent-blue rounded-full text-white cursor-pointer"
        onClick={signIn}
      >
        Login with github
      </h1>
    </div>
  );
}

export default Login;
