import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault();
    const login = true;
    if(login) {
      navigate('/dashboard')
    }
  }

  return(
    <form onSubmit={loginHandler}>
      <input type="text" name="username"/>
      <input type="password" name="password"/>
      <button>Login</button>
    </form>
  );
}