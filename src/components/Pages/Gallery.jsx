import { Grid, Paper, styled } from "@mui/material";
import images from "./Images";
import React from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Gallery = () => {
  return (
    <>
      <article
        className="article "
        style={{
          backgroundImage: `url(https://t3.ftcdn.net/jpg/06/88/37/54/240_F_688375462_EnOqCmUWlKTPgwVhakawMeESRPVV56O4.jpg)`,
        }}
      >
        <h1 className="imageText">Gallery</h1>
      </article>
      <Grid container spacing={4} sx={{padding:4}}>
      {images.map((index)=>(
        <Grid item xs={6} lg={3} key={index}>
          <Item sx={{boxShadow:"none"}}>
            <img src={index} className="imagegallery"/>
          </Item>
        </Grid>
      ))}
        
        {/* <Grid item xs={6} lg={3}>
          <Item>

          </Item>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Gallery;
