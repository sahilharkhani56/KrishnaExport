import {
  Box,
  List,
  ListItem,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {  useNavigate } from "react-router-dom";
import logo from "../../assets/img/Krishna Export.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: "inherit",
  color: theme.palette.text.secondary,
}));
const Footer = () => {
  const navigateTo = useNavigate();
  const selectOption = (e, index) => {
    navigateTo(index);
  };
  return (
    <>
      <Box className="outerdivFooter">
        <Box
          sx={{
            width: "100%",
            padding: "15px",
            bottom: 0,
            top: "auto",
            marginTop: 4,
          }}
          alignItems="center"
          justifyContent="center"
          display={"flex"}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 12 }}
            sx={{ backgroundColor: "none" }}
          >
            <Item sx={{ boxShadow: "none" }}>
              <img src={logo} height={"200px"} className="logoFooter"></img>
            </Item>
            <Item sx={{ boxShadow: "none" }}>
              <List>
                <Typography
                  variant="h6"
                  style={{ marginBottom: 4 }}
                  sx={{ color: "black" }}
                  align="left"
                >
                  LINKS
                </Typography>
                <ListItem
                  sx={{ padding: 0 }}
                  onClick={(e) => selectOption(e, "/")}
                  className="link"
                >
                  <Typography>Home</Typography>
                </ListItem>
                <ListItem
                  sx={{ padding: 0 }}
                  onClick={(e) => selectOption(e, "/about")}
                  className="link"
                >
                  <Typography>About Us</Typography>
                </ListItem>
                <ListItem
                  sx={{ padding: 0 }}
                  onClick={(e) => selectOption(e, "/product")}
                  className="link"
                >
                  <Typography>Products</Typography>
                </ListItem>
                <ListItem
                  sx={{ padding: 0 }}
                  onClick={(e) => selectOption(e, "/contact")}
                  className="link"
                >
                  <Typography>Contact Us</Typography>
                </ListItem>
              </List>
            </Item>
            <Item sx={{ boxShadow: "none" }}>
              <List>
                <Typography
                  variant="h6"
                  style={{ marginBottom: 4 }}
                  sx={{ color: "black" }}
                  align="left"

                >
                  PRODUCTS
                </Typography>
                <ListItem sx={{ padding: 0 }} className="link" onClick={(e) => selectOption(e, "/product/spice")}>
                  <Typography>Spices</Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }} className="link" onClick={(e) => selectOption(e, "/product/seed")}>
                  <Typography>Seeds</Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }} className="link" onClick={(e) => selectOption(e, "/product/grain")}>
                  <Typography>Grains</Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }} className="link" onClick={(e) => selectOption(e, "/product/dehydrated")}>
                  <Typography>Dehydrate Flakes and Powders</Typography>
                </ListItem>
              </List>
            </Item>
            <Item sx={{ boxShadow: "none" }}>
              <List>
                <Typography
                  variant="h6"
                  style={{ marginBottom: 4 }}
                  sx={{ color: "black" }}
                  align="left"

                >
                  CONTACT US
                </Typography>
                <ListItem sx={{ padding: 0 }}>
                  <Typography>Krishna Export </Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <Typography>+918238661352</Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <Typography>info@krishnaexportindia.com</Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <Typography>
                    Shiv bhavani chowk, Near kothariya Village 80 feet ring
                    road, opposite Diamond party plot,Jai park society no. 2 ,Rajkot
                    ,Gujarat,
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                    <IconButton color="inherit" href="https://www.facebook.com/krutagnya.savaliya?mibextid=kFxxJD" target="_blank">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://www.instagram.com/krishnaexportindia2020?igsh=MTZzYWU3a3h4eGczeA==" target="_blank">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://www.instagram.com/krishnaexportindia2020?igsh=MTZzYWU3a3h4eGczeA==" target="_blank">
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                </ListItem>
              </List>
            </Item>
          </Stack>
        </Box>
        <Box
          sx={{ width: "100%", padding: "15px" }}
          alignItems="center"
          justifyContent="center"
          display={"flex"}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Item sx={{ boxShadow: "none", color: "black" }}>
              © 2024 Krishna. All Rights Reserved
            </Item>
            <Item sx={{ boxShadow: "none" }}>
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
      </Box>
    </>
  );
};

export default Footer;
