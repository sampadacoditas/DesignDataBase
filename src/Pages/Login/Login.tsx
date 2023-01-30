import React, { useEffect, useReducer, useState } from "react";
import styles from "./Login.module.scss";
import { loginReducer } from "./LoginReducer/Login.reducer";
import http from "../../Services/Services";
import utility from "../../utility/utility";
import {Link,useNavigate} from "react-router-dom"
import { checkToken, getNewAccessToken, login } from "../../Services/AxiosServiceFile";
import { Box } from "@mui/material";

export const Login = () => {
  let navigate = useNavigate();
  const [tokens, setTokens] = useState<any>({});
  const [state, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });
  
  console.log(state);


  const submitForm = async (event: any) => {
    event.preventDefault();
    let storeEntry = { email: state.email, password: state.password };
    try {
      //  let loginResponse = await login (storeEntry);
       let loginResponse=await http.post("auth/login",storeEntry)
       console.log(loginResponse)

       setTokens({ ...tokens, ...loginResponse.data });
       localStorage.setItem("token", JSON.stringify(loginResponse.data));
       console.log(loginResponse.data);
      
      if (loginResponse) {
        navigate("/home")
      }
    } 
    catch (e: any) {
      console.log("error", e);
    }
  };
  const getToken = async () => {
		const res: any = await getNewAccessToken();
		setTokens({ ...tokens, ...res.data });
		localStorage.setItem("token", JSON.stringify(res.data));
		console.log(res.data);
	};
	const checkOldToken = async () => {
		const res: any = await checkToken();
		// setState(res.data.message);
		setTokens({ ...tokens, ...res.data });
	};

  return (
    <div className={styles.loginContainer}>
      <div className={styles.center}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={submitForm}>
          <div className={styles["text-field"]}>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                dispatch({ type: "setEmail", payload: e.target.value });
              }}
              required
            />
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles["text-field"]}>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                dispatch({ type: "setPassword", payload: e.target.value });
              }}
              required
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            {/* <Link to="/forgotPassword" className={styles.forgotPassword}>
              Forgot Password?
            </Link> */}
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>

      {/* <button onClick={getToken}>Get Acces Token</button>
			<button onClick={checkOldToken}>Check Token</button> */}
			{/* <Box>Acces Token Status {state}</Box> */}
			{/* <Box>Acces Token Is {tokens.access_token}</Box>
			<Box>Refresh Token Is {tokens.refresh_token}</Box> */}
      
    </div>
  );
};
