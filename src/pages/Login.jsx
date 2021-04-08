import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const Login = (props) => {
  return (
    <div className="login">
      <h1>Login:</h1>
      <GoogleLoginButton />
      <GithubLoginButton />
    </div>
  );
};
export default Login;
