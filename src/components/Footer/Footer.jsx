import { Box, List, ListItem, Stack, Typography,IconButton } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Krishna Export.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Footer = () => {
    const navigateTo=useNavigate();
    const selectOption=(e,index)=>{
        navigateTo(index);
    }
  return (
    <>
      <Box
        sx={{ width: "100%", backgroundColor: "#F6F5F2", padding: "15px" ,bottom:0,top: 'auto'}}
        alignItems="center"
        justifyContent="center"
        display={"flex"}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 12 }}
          sx={{ backgroundColor: 'none' }}
         
        >
          <Item sx={{background:'#F6F5F2', boxShadow:'none'}}> 
            <img src={logo} height={"200px"}></img>
          </Item>
          <Item sx={{background:'#F6F5F2', boxShadow:'none'}}>
            <List>
            <Typography variant="h6" style={{marginBottom:4}} sx={{color:'black'}}>IMPORTANT LINKS</Typography>
                <ListItem sx={{padding:0}} onClick={(e)=>selectOption(e,'/')} className="link"><Typography>Home</Typography></ListItem>
                <ListItem sx={{padding:0}} onClick={(e)=>selectOption(e,'/about')} className="link"><Typography>About Us</Typography></ListItem>
                <ListItem sx={{padding:0}} onClick={(e)=>selectOption(e,'/product')} className="link"><Typography>Products</Typography></ListItem>
                <ListItem sx={{padding:0}} onClick={(e)=>selectOption(e,'/contact')} className="link"><Typography>Contact Us</Typography></ListItem>
            </List>
          </Item>
          <Item sx={{background:'#F6F5F2', boxShadow:'none'}}>
            <List>
            <Typography variant="h6" style={{marginBottom:4}} sx={{color:'black'}}>PRODUCTS</Typography>
                <ListItem sx={{padding:0}} className="link"><Typography>Spices</Typography></ListItem>
                <ListItem sx={{padding:0}} className="link"><Typography>Seeds</Typography></ListItem>
                <ListItem sx={{padding:0}} className="link"><Typography>Herbs</Typography></ListItem>
                <ListItem sx={{padding:0}} className="link"><Typography>Grains</Typography></ListItem>
                <ListItem sx={{padding:0}}className="link"><Typography>Dehydrate Powders</Typography></ListItem>
            </List>
          </Item>
          <Item sx={{background:'#F6F5F2', boxShadow:'none'}}>
            <List>
            <Typography variant="h6" style={{marginBottom:4}} sx={{color:'black'}}>CONTACT US</Typography>
                <ListItem sx={{padding:0}} ><Typography>Krishna Export </Typography></ListItem>
                <ListItem sx={{padding:0}}><Typography>Rajkot,Gujarat</Typography></ListItem>
                <ListItem sx={{padding:0}}><Typography>+91918238661352</Typography></ListItem>
                <ListItem sx={{padding:0}}><Typography>info@krishna.com</Typography></ListItem>
                <ListItem sx={{padding:0}}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Box>
                </ListItem>
            </List>
          </Item>
        </Stack>
      </Box>
      <Box
        sx={{ width: "100%", backgroundColor: "#97BE5A", padding: "15px" }}
        alignItems="center"
        justifyContent="center"
        display={"flex"}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{background:'#97BE5A', boxShadow:'none',color:'black'}}>
            © 2024 Krishna. All Rights Reserved
          </Item>
          <Item sx={{background:'#97BE5A', boxShadow:'none'}}>
            <a
              href="https://linktr.ee/sahil_harkhani"
              target="_blank"
              style={{ color: "black" }}
            >
              {"Design and Developed By Sahil Harkhani"}
            </a>
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
