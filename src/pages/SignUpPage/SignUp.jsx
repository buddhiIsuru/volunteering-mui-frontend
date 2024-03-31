import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Chip,
  Container,
  FilledInput,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "./../../assets/logo-removebg-preview.png";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

// Create a theme with custom background color
const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#B5BFA1", // Change this color to your desired background color
    },
  },
});

const InterestsList = [
  {
    label: "Art",
    isSelected: false,
  },
  {
    label: "Sport",
    isSelected: false,
  },
  {
    label: "Technology",
    isSelected: false,
  },
  {
    label: "Music",
    isSelected: false,
  },
  {
    label: "Cooking",
    isSelected: false,
  },
  {
    label: "Health",
    isSelected: false,
  },
  {
    label: "Art",
    isSelected: false,
  },
  {
    label: "Sport",
    isSelected: false,
  },
  {
    label: "Technology",
    isSelected: false,
  },
  {
    label: "Music",
    isSelected: false,
  },
  {
    label: "Cooking",
    isSelected: false,
  },
  {
    label: "Health",
    isSelected: false,
  },
];

export default function SignInPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [country, setCountry] = React.useState("");

  const handleSubmit = (event, { setSubmitting }) => {
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setTimeout(() => {
      alert("Form submitted successfully!");
      setSubmitting(false);
    }, 1000);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{
          height: "auto", // small screens
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          component={Paper}
          elevation={6}
          square
          sx={{
            [defaultTheme.breakpoints.down("sm")]: {
              borderRadius: "0",
            },
            [defaultTheme.breakpoints.up("sm")]: {
              borderRadius: "20px",
            },
          }}
        >
          <Grid xs={12} sm={12} md={6}></Grid>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 70, height: 70 }} src={logo} />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
            {/* Left side form fields */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        variant="standard"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        variant="standard"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl variant="standard" required fullWidth>
                        <InputLabel htmlFor="standard-adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl variant="standard" required fullWidth>
                        <InputLabel htmlFor="standard-adornment-password">
                          Confirm Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                 {/* Right side form fields */}
                <Grid item xs={12} sm={12} md={6}>
                  <Grid container spacing={2} sx={{ px: 2 }}>
                    <Grid item xs={12}>
                      <FormControl variant="standard" required fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">
                          Country
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          label="country"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="sri_lanka">Sri Lanka</MenuItem>
                          <MenuItem value="spain">Spain</MenuItem>
                          <MenuItem value="united_state">United State</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <Stack direction="row" spacing={2}>
                          <FormLabel
                            id="demo-row-radio-buttons-group-label"
                            sx={{ paddingTop: 1 }}
                          >
                            I'm
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="organization"
                              control={<Radio />}
                              label="Organization"
                            />
                            <FormControlLabel
                              value="individual"
                              control={<Radio />}
                              label="Individual"
                            />
                          </RadioGroup>
                        </Stack>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={{mb:3}}>Select your Interests</Typography>
                      <Stack
                        direction={{ xs: "row"}}
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                      >
                        {InterestsList.map((Obj) => (
                          <Chip
                            // size="small"
                            label={Obj.label}
                            variant="outlined"
                            color={Obj.isSelected ? "primary" : "success"}
                            onClick={() => {
                              Obj.isSelected = !Obj.isSelected;
                            }}
                          />
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
