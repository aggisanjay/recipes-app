import React from "react";
import { Card, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={recipe.imgUrl}
          alt={recipe.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {recipe.name}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Chef:</strong> {recipe.chef}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {recipe.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
                    <strong>Meal Type:</strong> {recipe.mealType} | <strong>Dish Type:</strong> {recipe.dishType}
         </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Average Rating:</strong> {recipe.avgRating} ⭐ ({recipe.totalRatings} reviews)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
