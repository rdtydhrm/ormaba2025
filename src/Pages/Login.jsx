import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Fab,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import apiURL from "../APIURL";
import background from "/background7.jpg"

function Login() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const postLogin = async (loginDetails) => {
    const response = await axios({
      method: "POST",
      baseURL: apiURL,
      url: "/api/login",
      data: loginDetails,
    });
    return response;
  };

  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      document.cookie = "yes=Yes";
      navigate("/");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate({ nim, password });
  };

  return (
    <>
      <Box
        sx={{
          m: 4,
          position: "absolute",
          display: { xs: "none", md: "inline" },
          top: 2,
        }}
      >
        <Button variant="contained" size="medium" onClick={() => navigate("/")}>
          Back
        </Button>
      </Box>
      <Box
        sx={{
          width: "100vw",
          backgroundImage: `url(${background})`,
          backgroundSize: { xs: "400vw", md: "100vw" },
          backgroundPosition: "top center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          pb: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: -1,
          }}
        />
        <Container sx={{ height: "100vh" }}>
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            {mutation.isError ? (
              <Snackbar
                open={true}
                autoHideDuration={6000}
                onClose={() => mutation.reset()}
              >
                <Alert severity="error" sx={{ width: "100%" }}>
                  NIM atau password salah.
                </Alert>
              </Snackbar>
            ) : (
              <></>
            )}
            <Box
              sx={{
                display: {md:"flex", xs:'none'},
                justifyContent: "center",
                alignItems: "center",
                pt: 4,
                transform: "scaleY(-1)",
              }}
            >
              <img src="/wide2.png" alt="" height="90vw" />
            </Box>
            <Box
              sx={{
                display: {md:"none", xs:'flex'},
                justifyContent: "center",
                alignItems: "center",
                pt: 4,
                transform: "scaleY(-1)",
              }}
            >
              <img src="/wide2.png" alt="" height="38vw" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mr: 4, display: "flex" }}>
                <img src="/wing.png" height={"50px"} />
              </Box>
              <Typography variant="h3">Login</Typography>
              <Box sx={{ ml: 4, display: "flex", transform: "scaleX(-1)" }}>
                <img src="/wing.png" height={"50px"} />
              </Box>
            </Box>
            <TextField
              required
              label="NIM"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              sx={{ my: 3, width: "25ch" }}
            />
            <FormControl
              required
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3, width: "25ch" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", mb: 3 }}
            >
              Gunakan Akun SIAM <LockIcon fontSize="inherit" />
            </Typography>
            {mutation.isPending ? (
              <CircularProgress size={48} />
            ) : (
              <Fab
                variant="extended"
                type="submit"
                sx={{ bgcolor: "primary.main" }}
              >
                Login
                <LoginIcon sx={{ ml: 1 }} />
              </Fab>
            )}
            <Box
              sx={{
                display: {md:"flex", xs:'none'},
                justifyContent: "center",
                alignItems: "center",
                pt: 4,
              }}
            >
              <img src="/wide2.png" alt="" height="90vw" />
            </Box>
            <Box
              sx={{
                display: {md:"none", xs:'flex'},
                justifyContent: "center",
                alignItems: "center",
                pt: 4,
              }}
            >
              <img src="/wide2.png" alt="" height="38vw" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
