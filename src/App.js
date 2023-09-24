import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

import './App.css'; // You can add styles here
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Navbar />
      
      <Footer />
    </div>
  );
};

export default App;
