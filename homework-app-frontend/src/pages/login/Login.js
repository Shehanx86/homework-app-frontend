import React, { useState } from "react";
import Header from "../../components/header/Header";
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from "../../redux/auth/actions";

function Login() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [credentials, setcredentials] = useState({});
    const [tokens, setTokens] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'username': {
                setcredentials({...credentials, username: value});
                break;
            }
            case 'password': {
                setcredentials({...credentials, password: value});
                break;
            }
            default: {}
        }
    }

    const checkLogin = () => {
      auth.authSuccess && console.log(auth)
    }

    const handleSubmit = () => {
      dispatch(loginAction(credentials));
    }

  return (
    <>
      <Header />
      <div className="">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
          <button type="button" onClick={checkLogin} className="btn btn-primary">
            check
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
