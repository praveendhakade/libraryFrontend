import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ILogin, ISignUp } from "../types/heros";
import { useAuth } from "../hooks/authHook";

export const Auth = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for login, 1 for signup
  const { login, signup } = useAuth();
  const [formData, setFormData] = useState<ISignUp>({
    username: "",
    password: "",
    confirmPassword: "", // Only used for signup
  });

  // Handle tab change between login and signup
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setFormData({ username: "", password: "", confirmPassword: "" }); // Reset form data on tab change
  };

  // Handle form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (activeTab === 1 && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const loginState: ILogin = {
      username: formData.username,
      password: formData.password,
    };

    if (activeTab === 0) {
      login(loginState);
    } else {
      signup(loginState);
    }

    // Reset form after submission
    setFormData({ username: "", password: "", confirmPassword: "" });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {activeTab === 0 ? "Login" : "Sign Up"}
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ marginBottom: 2 }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username Address"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          {activeTab === 1 && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {activeTab === 0 ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
