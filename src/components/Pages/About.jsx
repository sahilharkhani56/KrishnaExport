import { Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const About = () => {
  return (
    <>
      <article
        className="article "
        style={{
          marginBottom: 8,
          backgroundImage: `url(https://t3.ftcdn.net/jpg/05/81/44/10/240_F_581441049_0rIodz8sxTBHW4jZBImvB0UHtNsq9cav.jpg)`,
        }}
      >
        <h1 className="imageText">About Krishna Export</h1>
      </article>
      <Grid spacing={4} container sx={{ padding: 4 }}>
        <Grid item xs={12} lg={6}>
          <Item sx={{boxShadow:"none"}}>
            <img
              src="https://t3.ftcdn.net/jpg/02/16/77/52/240_F_216775221_AVR7BTTol2SOU2lieoa6ouWjZiTpe1Xf.jpg"
              className="aboutImage"
            />
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item sx={{paddingLeft:4,paddingRight:4,boxShadow:'none'}}>
            <Typography align="left">
              Krishna Export is a prominent commercial entity in the
              agricultural commodities trade and processing industry, having
              been founded in 2021. Our headquarters are in Rajkot, Gujarat, an
              agricultural product powerhouse in India. We deal in a variety of
              agricultural products, such as peanuts, black sesame seeds, black
              cumin seeds, coriander seeds, mustard seeds, chia seeds, Desi
              chickpeas, white chickpeas, flax seeds, quinoa seeds, fenugreek
              seeds, green millet, yellow millet, yellow maize, white maize,
              turmeric finger and powder, chilli powder and flakes, whole dry
              ginger and powder, cumin powder, fenugreek powder, coriander
              powder, Moringa leaves, white onion flakes, red onion powder &
              flakes, garlic powder & flacks, garlic granules, red fried onion,
              etc.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
