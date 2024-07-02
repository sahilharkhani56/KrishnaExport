import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
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
  const [sz, setsz] = useState(12);
  useEffect(() => {
    isLargerThan800 ? setsz(12) : setsz(4);
  }, [isLargerThan800]);
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
      <Grid container spacing={2} sx={{ padding: 4,alignItems:'center',display:'flex',justifyContent:'center' }}>
        <Grid item xs={12} lg={6}>
          <Item>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:'black'}}>
          <CallIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{color:'black'}} primary="Call Us" secondary="+918238661352" />
      </ListItem>
      <ListItem>
        <ListItemAvatar >
          <Avatar sx={{bgcolor:'black'}}>
          <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{color:'black'}} primary="Email" secondary="info@krishnaexportindia.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:'black'}}>
          <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{color:'black'}} primary="Address" secondary="Shiv bhavani chowk, Near kothariya Village 80 feet ring road, opposite Diamond party plot,Jai park society no. 2 ,Rajkot ,Gujarat," />
      </ListItem>
    </List>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
