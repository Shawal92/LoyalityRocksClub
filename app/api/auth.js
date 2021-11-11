import client from "./client";
import authStorage from "../auth/storage";

//const token = authStorage.getToken();
// const config = {
//   headers: { Authorization: `Bearer ${token}` }
// };  

 const login = (email, password,loginAttempt) => client.post("/Account/Login", { email, password, loginAttempt});

 const forgetPassword = (email) => client.post("/Account/ForgetPassword", {email});

export default {
  login , forgetPassword
};
