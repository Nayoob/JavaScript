
  // Data needed for first part of the section
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

  /* destructure an object as we did in array but here we wll directly write the object 
  property names  */

  const {name , location , openingHours} = restaurant ; 
  console.log(name , location , openingHours);
  
//   const {name : restaurantName , location : resturantLocaiton} = restaurant;
//   console.log(restaurantName , resturantLocaiton);
  

  /* lets set a default on object destructuring  */
  
  const {address : ResturnatLocation = "pishin"  , name : restaurantName = "Babi agha Hotel"  } = restaurant; 
  console.log(restaurantName , ResturnatLocation);
  