import React from 'react';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
            onClick={() => onRecipeClick(recipe)}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <h3>{recipe.title}</h3>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
