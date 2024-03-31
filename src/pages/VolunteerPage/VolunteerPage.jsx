import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import DirectionsIcon from "@mui/icons-material/Directions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const OpportunityCard = (props) => {
  return (
    <Card sx={{ border: '1px solid #143109' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.cardData.category}
        </Typography>
        <Typography variant="h5" component="div">
          {props.cardData.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.cardData.location}
        </Typography>
        <Typography variant="body2">
          {props.cardData.skillLevel}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const VolunteerPage = () => {
  const campaigns = [
    {
      id: 1,
      title: "Campaign 1",
      category: "Humanitarian",
      location: "New York",
      skillLevel: "Beginner",
    },
    {
      id: 2,
      title: "Campaign 2",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 3,
      title: "Campaign 3",
      category: "Animals",
      location: "Colombo",
      skillLevel: "Advanced",
    },
    {
      id: 4,
      title: "Campaign 4",
      category: "Humanitarian",
      location: "Los Angeles",
      skillLevel: "Beginner",
    },
    {
      id: 5,
      title: "Campaign 5",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 6,
      title: "Campaign 6",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 7,
      title: "Campaign 7",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 8,
      title: "Campaign 8",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 9,
      title: "Campaign 9",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 10,
      title: "Campaign 10",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    // Add more campaign data with locations as Colombo, New York, or Los Angeles
    {
      id: 11,
      title: "Campaign 11",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 12,
      title: "Campaign 12",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 13,
      title: "Campaign 13",
      category: "Humanitarian",
      location: "Los Angeles",
      skillLevel: "Beginner",
    },
    {
      id: 14,
      title: "Campaign 14",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 15,
      title: "Campaign 15",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 16,
      title: "Campaign 16",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 17,
      title: "Campaign 17",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 18,
      title: "Campaign 18",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 19,
      title: "Campaign 19",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 20,
      title: "Campaign 20",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 21,
      title: "Campaign 21",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 22,
      title: "Campaign 22",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 23,
      title: "Campaign 23",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 24,
      title: "Campaign 24",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 25,
      title: "Campaign 25",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 26,
      title: "Campaign 26",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 27,
      title: "Campaign 27",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 28,
      title: "Campaign 28",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 29,
      title: "Campaign 29",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 30,
      title: "Campaign 30",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
  ];
  return (
    <div>
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{
          marginTop: 8,
          padding: 4,
        }}
      >
        <Grid item xs={12} sm={12} md={10} component={Paper} sx={{ p: 4 }}>
          <Grid xs={12} md={12}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                m: 1,
              }}
              fullWidth
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your Opportunities"
                inputProps={{ "aria-label": "Search your Opportunities" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <Button
                variant="contained"
                sx={{ background: "#143109" }}
                color="success"
              >
                Search
              </Button>
            </Paper>
          </Grid>
          <Grid xs={12} md={12} sx={{ mt: 4 }}>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          component={Paper}
          sx={{ p: 4, mt: 1 }}
        >
          <Stack spacing={2}>
            <Grid container justifyContent="center">
              <Pagination count={10} variant="outlined" color="primary" />
            </Grid>
          </Stack>

          <Grid xs={12} md={12}>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {campaigns.map((Obj) => (
                  <Grid item xs={12} sm={6} md={3}>
                    {" "}
                    <OpportunityCard cardData={Obj} />{" "}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VolunteerPage;
