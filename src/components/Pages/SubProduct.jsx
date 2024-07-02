import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Typography, styled } from "@mui/material";
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

const SubProduct = () => {
  const { pathname } = useLocation();
  const [data, setdata] = useState([]);
  const [subdata, setSubdata] = useState([]);
  const navigateTo = useNavigate();
  const [isLargerThan800] = useMediaQuery("(min-width: 760px)");

  const selectproduct = (e, path) => {
    navigateTo(path);
  };

  useEffect(() => {
    if (pathname) {
      for (var i = 0; i < product.length; i++) {
        if (product[i].path === pathname) {
          setdata(product[i]);
          setSubdata(product[i].subproduct);
        }
      }
    }
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <>
      <article
        className="article"
        style={{
          backgroundImage: `url(https://t4.ftcdn.net/jpg/06/91/50/87/240_F_691508776_YcA9ykZmwiRK7RBGugBRdUVRb4Ar8EXW.jpg)`,
        }}
      >
        <h1 className="imageText">{data?.productName}</h1>
      </article>
      <Box sx={{ marginBottom: 2 }}>
        <Grid container >
          <Grid item xs={12} lg={6}>
            <Item sx={{ padding: 4, boxShadow: 'none' }}>
              <Typography variant="h4">{data?.productName}</Typography>
              <Typography>{data.description}</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{ padding: 4, boxShadow: 'none' }}>
              <img src={data.image} className="subProductImage" alt={data.productName}></img>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ marginBottom: 4 }}></Divider>
      <Box>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid
            container
            spacing={3}
            direction={isLargerThan800 ? "row" : "column"}
            alignItems="center"
            justify="center"
          >
            {subdata.map((index) => (
              <Grid item xs={12} lg={3} md={4} sm={6} key={index.subproductname}>
                <motion.div variants={itemVariants}>
                  <Item
                    className="innerProduct"
                    sx={{ boxShadow: "none" }}
                    onClick={(e) => selectproduct(e, index.subpath)}
                  >
                    <Card
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        borderRadius: '15px',
                        maxWidth: 345,
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={index.subproductname}
                        height="140"
                        image={index.subimage}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {index.subproductname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {index.subdescriptionshort}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          className="itemProduct"
                          onClick={(e) => selectproduct(e, index.subpath)}
                        >
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </Item>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default SubProduct;
