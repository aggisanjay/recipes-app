import React, { useState } from "react";
import { Container, Grid, Box, TextField, Typography, Button } from "@mui/material";
import RecipeCard from "../src/components/RecipeCard";
import FilterSidebar from "../src/components/FilterBar";
import recipesData from "./data/recipesData"; 
import { useEffect} from "react";// Sample hardcoded data

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  const [filters, setFilters] = useState({
    search: "",
    contestWinner: false,
    featured: false,
    testKitchenApproved: false,
    mealType: "",
    dishType: "",
    sortBy: "",
  });

  // Handle Search Input
  const handleSearchChange = (event) => {
    setFilters({ ...filters, search: event.target.value });
  };

  // Handle Filter Changes (Checkbox or Select)
  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      setFilters({ ...filters, [name]: checked });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      search: "",
      contestWinner: false,
      featured: false,
      testKitchenApproved: false,
      mealType: "",
      dishType: "",
      sortBy: "",
    });
  };

  // Apply filters and sorting
  const applyFilters = () => {
    let updatedRecipes = recipesData.filter((recipe) => {
      const matchesSearch = 
        recipe.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        recipe.chef.toLowerCase().includes(filters.search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(filters.search.toLowerCase());

      const matchesContestWinner = filters.contestWinner ? recipe.contestWinner : true;
      const matchesFeatured = filters.featured ? recipe.featured : true;
      const matchesTestKitchenApproved = filters.testKitchenApproved ? recipe.testKitchenApproved : true;
      const matchesMealType = filters.mealType ? recipe.mealType === filters.mealType : true;
      const matchesDishType = filters.dishType ? recipe.dishType === filters.dishType : true;

      return (
        matchesSearch &&
        matchesContestWinner &&
        matchesFeatured &&
        matchesTestKitchenApproved &&
        matchesMealType &&
        matchesDishType
      );
    });

    // Sort recipes
    if (filters.sortBy === "uploadDate") {
      updatedRecipes = updatedRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
    } else if (filters.sortBy === "rating") {
      updatedRecipes = updatedRecipes.sort((a, b) => b.avgRating - a.avgRating);
    }

    setFilteredRecipes(updatedRecipes);
  };

  // Re-apply filters when filter state changes
  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={filters.search}
          onChange={handleSearchChange}
          sx={{ width: "30%" }}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" onClick={() => setFilters({ ...filters, sortBy: "uploadDate" })}>
            Sort by Upload Date
          </Button>
          <Button variant="outlined" onClick={() => setFilters({ ...filters, sortBy: "rating" })}>
            Sort by Rating
          </Button>
          <Button variant="outlined" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={3}>
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {filteredRecipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.name}>
                <RecipeCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;