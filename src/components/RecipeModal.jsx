import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from "@mui/material";
import { Close } from "@mui/icons-material";

const RecipeModal = ({ open, onClose, recipe }) => {
  if (!recipe) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {recipe.name}
        <IconButton
          aria-label="Close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="img"
          src={recipe.imgUrl}
          alt={recipe.name}
          sx={{ width: "100%", borderRadius: 2, mb: 2 }}
        />
        <Typography variant="subtitle1"><strong>Chef:</strong> {recipe.chef}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>{recipe.description}</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>Meal Type:</strong> {recipe.mealType} | <strong>Dish Type:</strong> {recipe.dishType}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Average Rating:</strong> {recipe.avgRating} ⭐ ({recipe.totalRatings} reviews)
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
