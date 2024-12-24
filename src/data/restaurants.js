const restaurants = [
    { 
      id: 1, 
      name: 'The Pizza Place', 
      category: 'Pizza', 
      rating: 4.5, 
      numRatings: 150, 
      avgPrice: '₹300', 
      image: '/images/pizza.jpg', 
      description: 'Authentic Italian-style pizzas with fresh ingredients.', 
      menu: [ 
        { id: 1, name: 'Margherita', description: 'Classic Margherita pizza', price: '₹250' }, 
        { id: 2, name: 'Pepperoni', description: 'Pepperoni pizza with cheese', price: '₹280' } 
      ] 
    },
    { 
      id: 2, 
      name: 'Sushi World', 
      category: 'Sushi', 
      rating: 4.8, 
      numRatings: 200, 
      avgPrice: '₹300', 
      image: '/images/sushi.jpg', 
      description: 'Fresh sushi rolls and sashimi made by expert chefs.', 
      menu: [ 
        { id: 3, name: 'California Roll', description: 'California roll with avocado and crab', price: '₹280' }, 
        { id: 4, name: 'Tuna Sashimi', description: 'Fresh tuna sashimi', price: '₹300' } 
      ] 
    },
    { 
      id: 3, 
      name: 'Burger Joint', 
      category: 'Burgers', 
      rating: 4.3, 
      numRatings: 180, 
      avgPrice: '₹300', 
      image: '/images/burger.jpg', 
      description: 'Juicy burgers grilled to perfection.', 
      menu: [ 
        { id: 5, name: 'Cheeseburger', description: 'Classic cheeseburger with fries', price: '₹280' } 
      ] 
    },
    { 
      id: 4, 
      name: 'Pasta Paradise', 
      category: 'Pasta', 
      rating: 4.6, 
      numRatings: 120, 
      avgPrice: '₹300', 
      image: '/images/pasta.jpg', 
      description: 'Delicious pasta dishes made from scratch.', 
      menu: [ 
        { id: 6, name: 'Spaghetti Bolognese', description: 'Classic spaghetti with meat sauce', price: '₹290' } 
      ] 
    },
    { 
      id: 5, 
      name: 'Taco Town', 
      category: 'Mexican', 
      rating: 4.7, 
      numRatings: 250, 
      avgPrice: '₹280', 
      image: '/images/taco.jpg', 
      description: 'Authentic Mexican tacos with fresh toppings.', 
      menu: [ 
        { id: 7, name: 'Beef Tacos', description: 'Tacos with seasoned beef and salsa', price: '₹250' } 
      ] 
    },
    { 
      id: 6, 
      name: 'BBQ Nation', 
      category: 'BBQ', 
      rating: 4.4, 
      numRatings: 100, 
      avgPrice: '₹300', 
      image: '/images/bbq.jpg', 
      description: 'Smoky BBQ with rich flavors.', 
      menu: [ 
        { id: 8, name: 'Ribs', description: 'BBQ ribs with special sauce', price: '₹290' } 
      ] 
    },
    { 
      id: 7, 
      name: 'Vegan Delight', 
      category: 'Vegan', 
      rating: 4.9, 
      numRatings: 220, 
      avgPrice: '₹300', 
      image: '/images/vegan.jpg', 
      description: 'Healthy vegan options with creative recipes.', 
      menu: [ 
        { id: 9, name: 'Vegan Burger', description: 'Plant-based burger with vegan cheese', price: '₹280' } 
      ] 
    },
    { 
      id: 8, 
      name: 'The Salad Bar', 
      category: 'Salads', 
      rating: 4.2, 
      numRatings: 90, 
      avgPrice: '₹280', 
      image: '/images/salad.jpg', 
      description: 'Fresh and crisp salads with diverse ingredients.', 
      menu: [ 
        { id: 10, name: 'Caesar Salad', description: 'Caesar salad with croutons and parmesan', price: '₹250' } 
      ] 
    },
    { 
      id: 9, 
      name: 'Indian Feast', 
      category: 'Indian', 
      rating: 4.8, 
      numRatings: 300, 
      avgPrice: '₹300', 
      image: '/images/indian.jpg', 
      description: 'Authentic Indian cuisine with rich spices.', 
      menu: [ 
        { id: 11, name: 'Butter Chicken', description: 'Creamy butter chicken with naan', price: '₹290' } 
      ] 
    },
    { 
      id: 10, 
      name: 'Steak House', 
      category: 'Steak', 
      rating: 4.7, 
      numRatings: 110, 
      avgPrice: '₹300', 
      image: '/images/steak.jpg', 
      description: 'Premium steaks grilled to your liking.', 
      menu: [ 
        { id: 12, name: 'Ribeye Steak', description: 'Grilled ribeye steak with sides', price: '₹300' } 
      ] 
    }
  ];