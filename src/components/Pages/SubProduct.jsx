import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import product from './AllProducts';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography, styled } from '@mui/material';
import { useMediaQuery } from '@chakra-ui/react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const SubProduct = () => {
    const {pathname}=useLocation();
    const [data,setdata]=useState([]);
  const [isLargerThan800] = useMediaQuery("(min-width: 760px)");
    // console.log(pathname);
    useEffect(()=>{
      if(pathname){
        for(var i=0;i<product.length;i++){
          // console.log(product[i].pathname);
          if(product[i].path===pathname){
            setdata(product[i]);
          }
        }
      }
    },[pathname])
  return (
    <>
      <article
      className="article "
      style={{ backgroundImage: `url(https://t4.ftcdn.net/jpg/06/91/50/87/240_F_691508776_YcA9ykZmwiRK7RBGugBRdUVRb4Ar8EXW.jpg)` }}
    >
      <h1 className='imageText'>{data?.productName}</h1>
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
          {/* <Grid item xs={12} lg={3}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={12} lg={3}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={12} lg={3}>
    <Item>xs=6 md=8</Item>
  </Grid> */}
        </Grid>
      </Box>
    </>
  )
}

export default SubProduct