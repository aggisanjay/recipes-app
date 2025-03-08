import React from "react";
import { Box, Typography, Checkbox, FormControlLabel, Select, MenuItem } from "@mui/material";

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6">Filters</Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={filters.contestWinner}
            onChange={onFilterChange}
            name="contestWinner"
          />
        }
        label="Contest Winner"
      />
      <FormControlLabel
        control={<Checkbox checked={filters.featured} onChange={onFilterChange} name="featured" />}
        label="Featured"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={filters.testKitchenApproved}
            onChange={onFilterChange}
            name="testKitchenApproved"
          />
        }
        label="Test Kitchen Approved"
      />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Meal Type
      </Typography>
      <Select
        value={filters.mealType}
        onChange={onFilterChange}
        name="mealType"
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="Dinner">Dinner</MenuItem>
        <MenuItem value="Lunch">Lunch</MenuItem>
        <MenuItem value="Dessert">Dessert</MenuItem>
        <MenuItem value="Breakfast">Breakfast</MenuItem>
      </Select>

      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Dish Type
      </Typography>
      <Select
        value={filters.dishType}
        onChange={onFilterChange}
        name="dishType"
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="Curry">Curry</MenuItem>
        <MenuItem value="Pasta">Pasta</MenuItem>
        <MenuItem value="Seafood">Seafood</MenuItem>
        <MenuItem value="Soup">Soup</MenuItem>
        <MenuItem value="Mexican">Mexican</MenuItem>
        <MenuItem value="Smoothie">Smoothie</MenuItem>
      </Select>
    </Box>
  );
};

export default FilterSidebar;
