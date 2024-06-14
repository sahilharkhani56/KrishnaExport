import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import product from "./AllProducts";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Product = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 760px)");
  const navigateTo = useNavigate();
  const selectproduct = (e, path) => {
    navigateTo(path);
  };
  return (
    <>
      {/* <Typography
        variant="h3"
        align="center"
        className="nameMain"
        sx={{ marginBottom: 2, marginTop: 2 }}
      >
        Our<span className="name1"> Products</span>
      </Typography> */}
      <article
        className="article "
        style={{
          marginBottom:8,
          backgroundImage: `url(https://t4.ftcdn.net/jpg/07/09/20/99/240_F_709209908_p1JHxeXXV5c2IpdBlaZcUgfFpxhbvH6F.jpg)`,
        }}
      >
        <h1 className="imageText">Our Products</h1>
      </article>
      <Box>
        <Grid
          container
          spacing={3}
          direction={isLargerThan800 ? "row" : "column"}
          alignItems="center"
          justify="center"
        >
          {product.map((index) => (
            <Grid item xs={12} lg={3} key={index.productName}>
              <Item
                className="innerProduct"
                sx={{ boxShadow: "none" }}
                onClick={(e) => selectproduct(e, index.path)}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={index.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {index.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {index.descriptionshort}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      className="itemProduct"
                      onClick={(e) => selectproduct(e, index.path)}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
