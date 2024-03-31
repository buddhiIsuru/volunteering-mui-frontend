import React from "react";
import { Container, Typography } from '@mui/material';
import BannerImage from './../../assets/wallpaperflare.com_wallpaper.jpg'

const HomePage=()=>{

  return (
    <div style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${BannerImage})`, // Replace 'path_to_your_image.jpg' with the actual path to your image
        color: '#ffffff', // Text color
        backgroundColor: 'rgba(181, 191, 161, 0.9)',
        backgroundPosition: 'center',
        textAlign: 'center',
      }}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is some introductory text about my website.
        </Typography>
      </Container>
    </div>
  );
}

export default HomePage;