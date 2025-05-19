import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {




  return (
    <div className="Login">
      <div className="card">
        <div className="left">
          <h1>BREAKKER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
         <Link to='/register'>
         <button>Register</button>
         </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;