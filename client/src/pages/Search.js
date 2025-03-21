import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  productCard: {
    maxWidth: 345,
    margin: "16px", // Adjust margin as needed
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px", // Adjust margin as needed
  },
  readMoreButton: {
    margin: "10px 1", // Add margin to create space between buttons
  },
}));

const Search = () => {
  const [values, setValues] = useSearch();
  const classes = useStyles();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
               <Card className={classes.productCard}>
               <CardMedia
                 component="img"
                 alt={p.name}
                 height="200"
                 image={`/api/v1/product/product-photo/${p._id}`}
               />
               <CardContent className={classes.cardContent}>
                 <Typography variant="h6" component="div">
                   {p.name}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   {p.description}
                 </Typography>
                 <Typography variant="h6" color="red">
                  1Kg- Rs.{p.price}
                 </Typography>
                 <div className={classes.buttonGroup}>
                   <Button variant="contained" color="primary">
                     Add to Cart
                   </Button>
                   
                 </div>
               </CardContent>
             </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;