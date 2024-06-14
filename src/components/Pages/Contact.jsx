import { Avatar, Chip, Grid, Paper, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import { useMediaQuery } from "@chakra-ui/react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Contact = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 760px)");
  const [sz,setsz]=useState(12);
  useEffect(()=>{
    isLargerThan800?setsz(12):setsz(4);
  },[isLargerThan800])
  return (
    <>
      <article
        className="article "
        style={{
          marginBottom: 8,
          backgroundImage: `url(https://t3.ftcdn.net/jpg/03/09/32/74/240_F_309327405_nwDRBIlJHwAdGQM6E5aYhLjt0odVHshv.jpg)`,
        }}
      >
        <h1 className="imageText">Contact Us</h1>
        <h3 className="imagesubtext">
          Embedded in our culture of hard work, honesty, and getting the well
          done job
        </h3>
      </article>
      <Grid container spacing={sz} sx={{ padding: 4 }}>
        <Grid item lg={4} xs={12} >
          <Item sx={{paddingTop:2,paddingBottom:2}}>
            <Typography>Call Us</Typography>
            <Chip
              avatar={<CallIcon />}
              label="+918238661352"
              variant="outlined"
            />
          </Item>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Item sx={{paddingTop:2,paddingBottom:2}}>
            <Typography>Mail Us</Typography>
            <Chip
              avatar={<EmailIcon />}
              label="info@krishna.com"
              variant="outlined"
            />
          </Item>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Item sx={{paddingTop:2,paddingBottom:2}}><Typography>Address</Typography>
            <Chip
              avatar={<BusinessIcon />}
              label="Rajkot,Gujarat"
              variant="outlined"
            /></Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
