import * as Mui from "@mui/material";

const Login = () => {
  return (
    <div>
      <Mui.TextField label="Username" />
      <Mui.TextField label="Password" type="password" />
      <Mui.Button variant="contained">Login</Mui.Button>
    </div>
  );
};

export default Login;
