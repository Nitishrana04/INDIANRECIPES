import React from 'react';

const RecipeDetail = ({ recipe, onClose }) => {
  return (
    <div className="recipe-detail">
      
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
