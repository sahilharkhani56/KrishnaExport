import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import product from './AllProducts';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
export const SingleProduct = () => {
    const [data,setdata]=useState([]);
    const {pathname}=useLocation();
    const modifiedPath=pathname.slice(0, pathname.length-2);
    const {productnumber}=useParams();
    useEffect(() => {
        if (pathname) {
          for (var i = 0; i < product.length; i++) {
            // console.log(product[i].pathname);
            if (product[i].path === modifiedPath) {
              setdata(product[i].subproduct[productnumber-1]);
            }
          }
        }
      }, [pathname]);
  return (
    <>
        <article
        className="article "
        style={{
          backgroundImage: `url(https://t4.ftcdn.net/jpg/07/46/66/07/240_F_746660712_5z6lyC39oFdpNGE3Y5Mc8HtGvif1mm7M.jpg)`,
        }}
      >
        <h1 className="imageText">{data?.subproductname}</h1>
      </article>
      <Box sx={{marginBottom:2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Item sx={{padding:4,boxShadow:'none'}}>
        <Typography variant="h4">{data?.subproductname}</Typography>
        <Typography>{data.subdescription}</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{padding:4,boxShadow:'none'}}>
              <img src={data.subimage} className="subProductImage"></img>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
