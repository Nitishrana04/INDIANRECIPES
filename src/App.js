import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

import './App.css'; // You can add styles here
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const URL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=2f83093a&app_key=22a5e26b324fb7630412023d05b76a15&imageSize=REGULAR&q=sugar"

const App = () => {
  // Simulated recipe data
  const recipes = [
    {
      id: 1,
      title: 'Indian Curry',
      ingredients: ['Spices', 'Vegetables', 'Rice'],
      instructions: 'Cook the vegetables with spices and serve with rice.',
      image: 'https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=612x612&w=0&k=20&c=c_9bYsi6T3vnCz5_iYqdZViX3iPV4r3fL2oTGSps8W8=',
    },
    {
      id: 2,
      title: 'Pasta Alfredo',
      ingredients: ['Pasta', 'Cream', 'Parmesan Cheese'],
      instructions: 'Cook pasta, mix with cream and cheese, and serve.',
      image: 'https://media.istockphoto.com/id/1159438262/photo/one-pot-chicken-alfredo-pasta-directly-above-photo.jpg?s=612x612&w=0&k=20&c=CwtoKCcwbmHShwAaAVFhBhcUT2rBfNs-WYhe_fkKQ6w='
    },
    {
      id: 3,
      title: 'Mushroom Risotto',
      ingredients: ['Rice', 'Mushrooms', 'Chicken Broth'],
      instructions: 'Saute mushrooms, cook rice in broth, and combine.',
      image: 'https://media.istockphoto.com/id/1369183332/photo/risotto-with-brown-champignon-mushrooms.jpg?s=612x612&w=0&k=20&c=hXubXk9pxjZbSR436lNbNWMrbGd37Y3v3DaopBoU84M='
    },
    {
      id: 4,
      title: 'Grilled Salmon',
      ingredients: ['Salmon', 'Lemon', 'Olive Oil'],
      instructions: 'Marinate salmon, grill until done, and garnish with lemon.',
      image: 'https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g=', // Add the URL for the new recipe's image
    },
    // Add more recipes here
  ];
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetch(URL)           //api for the get request
      .then(response => response.json())
      .then(data => {
        const res = [];
        data.hits.forEach(({recipe}, index) => {
          const {image, ingredientLines, label} = recipe;
            res.push({
              ...recipe,
              id: index,
              image,
              ingredients: ingredientLines,
              title: label,
            })
        });
        setRecipeList(res);
        console.log(data)
      });
  }, [])


  const onRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  }

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipeList} onRecipeClick={onRecipeClick} />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail recipe={selectedRecipe} />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
