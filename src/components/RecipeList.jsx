import React from 'react';
import { Link } from "react-router-dom";

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <Link
            to={`recipe/${recipe.id}`}
            key={recipe.id}
            className='recipe-link'
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
