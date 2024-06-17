import React from "react";
import { Box, Grid, Paper, Typography, Card, CardActions, CardContent, CardMedia, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import product from "./AllProducts";

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
      <article
        className="article"
        style={{
          marginBottom: 8,
          backgroundImage: `url(https://t4.ftcdn.net/jpg/07/09/20/99/240_F_709209908_p1JHxeXXV5c2IpdBlaZcUgfFpxhbvH6F.jpg)`,
        }}
      >
        <h1 className="imageText">Our Products</h1>
      </article>
      <Box>
        <Grid
          container
          spacing={2}
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
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      borderRadius: "15px",
                      maxWidth: 345,
                      "&:hover": {
                        ".MuiCardMedia-root": {
                          transform: "scale3d(1.1, 1.1, 1)",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="product image"
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
                </motion.div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
