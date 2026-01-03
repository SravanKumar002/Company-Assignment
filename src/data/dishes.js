export const dishes = [
  // Starters
  {
    id: 1,
    name: "Paneer Tikka",
    price: 12.0,
    calories: 250,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions, served with mint chutney. A classic North Indian appetizer that's both flavorful and satisfying.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    category: { id: 1, name: "North Indian" },
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Bell Peppers", quantity: "100g" },
      { name: "Onions", quantity: "100g" },
      { name: "Yogurt", quantity: "50g" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
  },
  {
    id: 2,
    name: "Vegetable Spring Rolls",
    price: 8.0,
    calories: 180,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Crispy fried rolls stuffed with seasoned vegetables and served with sweet chili sauce. Perfect as an appetizer or snack.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    category: { id: 2, name: "Chinese" },
    ingredients: [
      { name: "Spring Roll Wrappers", quantity: "8 pieces" },
      { name: "Cabbage", quantity: "100g" },
      { name: "Carrots", quantity: "50g" },
      { name: "Bean Sprouts", quantity: "50g" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
    ],
  },
  {
    id: 3,
    name: "Chicken Satay",
    price: 14.0,
    calories: 320,
    mealType: "STARTER",
    type: "NON-VEG",
    description:
      "Grilled chicken skewers marinated in aromatic spices, served with creamy peanut sauce. A popular Southeast Asian delicacy.",
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop",
    category: { id: 3, name: "Thai" },
    ingredients: [
      { name: "Chicken Breast", quantity: "300g" },
      { name: "Coconut Milk", quantity: "100ml" },
      { name: "Peanut Butter", quantity: "50g" },
      { name: "Lemongrass", quantity: "2 stalks" },
      { name: "Turmeric", quantity: "1 tsp" },
    ],
  },
  {
    id: 4,
    name: "Bruschetta",
    price: 10.0,
    calories: 220,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Toasted Italian bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil. A refreshing Mediterranean starter.",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
    category: { id: 4, name: "Italian" },
    ingredients: [
      { name: "Ciabatta Bread", quantity: "4 slices" },
      { name: "Roma Tomatoes", quantity: "200g" },
      { name: "Fresh Basil", quantity: "10 leaves" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Olive Oil", quantity: "3 tbsp" },
    ],
  },
  // Main Course
  {
    id: 5,
    name: "Kadhai Paneer",
    price: 18.0,
    calories: 450,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Paneer cubes in spicy onion gravy with onions and capsicum cubes. A popular North Indian curry cooked in a traditional kadhai with aromatic spices and fresh cream.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    category: { id: 1, name: "North Indian" },
    ingredients: [
      { name: "Paneer", quantity: "300g" },
      { name: "Capsicum", quantity: "150g" },
      { name: "Onions", quantity: "200g" },
      { name: "Tomatoes", quantity: "200g" },
      { name: "Kadhai Masala", quantity: "2 tbsp" },
      { name: "Fresh Cream", quantity: "50ml" },
    ],
  },
  {
    id: 6,
    name: "Butter Chicken",
    price: 22.0,
    calories: 520,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Tender chicken pieces in rich, creamy tomato-based gravy with aromatic spices. Served with butter naan or steamed rice.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    category: { id: 1, name: "North Indian" },
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Butter", quantity: "100g" },
      { name: "Tomato Puree", quantity: "200ml" },
      { name: "Heavy Cream", quantity: "100ml" },
      { name: "Kasuri Methi", quantity: "1 tbsp" },
      { name: "Garam Masala", quantity: "2 tsp" },
    ],
  },
  {
    id: 7,
    name: "Grilled Salmon",
    price: 28.0,
    calories: 380,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Fresh Atlantic salmon fillet grilled with herbs, lemon butter sauce, and a side of roasted asparagus with garlic and parmesan.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    category: { id: 5, name: "Continental" },
    ingredients: [
      { name: "Salmon Fillet", quantity: "250g" },
      { name: "Asparagus", quantity: "100g" },
      { name: "Lemon", quantity: "1 whole" },
      { name: "Butter", quantity: "50g" },
      { name: "Dill", quantity: "2 tbsp" },
    ],
  },
  {
    id: 8,
    name: "Vegan Buddha Bowl",
    price: 16.0,
    calories: 280,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Quinoa, avocado, chickpeas, and mixed roasted vegetables with a creamy tahini dressing. A healthy and nutritious complete meal.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    category: { id: 6, name: "Healthy" },
    ingredients: [
      { name: "Quinoa", quantity: "150g" },
      { name: "Avocado", quantity: "1 whole" },
      { name: "Chickpeas", quantity: "100g" },
      { name: "Kale", quantity: "50g" },
      { name: "Tahini", quantity: "3 tbsp" },
    ],
  },
  // Desserts
  {
    id: 9,
    name: "Gulab Jamun",
    price: 8.0,
    calories: 350,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Soft, spongy milk-solid balls soaked in rose-flavored sugar syrup. A classic Indian dessert that melts in your mouth.",
    image:
      "https://images.unsplash.com/photo-1666190073461-c2eb0ed47c82?w=400&h=300&fit=crop",
    category: { id: 1, name: "Indian" },
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Maida", quantity: "50g" },
      { name: "Sugar", quantity: "300g" },
      { name: "Cardamom", quantity: "4 pods" },
      { name: "Rose Water", quantity: "1 tsp" },
    ],
  },
  {
    id: 10,
    name: "Chocolate Lava Cake",
    price: 12.0,
    calories: 480,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream and fresh berries. A decadent chocolate lovers' delight.",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    category: { id: 5, name: "Continental" },
    ingredients: [
      { name: "Dark Chocolate", quantity: "150g" },
      { name: "Butter", quantity: "100g" },
      { name: "Eggs", quantity: "2 whole" },
      { name: "Sugar", quantity: "80g" },
      { name: "Vanilla Ice Cream", quantity: "1 scoop" },
    ],
  },
  {
    id: 11,
    name: "Tiramisu",
    price: 14.0,
    calories: 420,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: { id: 4, name: "Italian" },
    ingredients: [
      { name: "Mascarpone", quantity: "250g" },
      { name: "Ladyfingers", quantity: "200g" },
      { name: "Espresso", quantity: "200ml" },
      { name: "Eggs", quantity: "3 whole" },
      { name: "Cocoa Powder", quantity: "2 tbsp" },
    ],
  },
  {
    id: 12,
    name: "Rasmalai",
    price: 10.0,
    calories: 300,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Soft paneer discs soaked in sweetened, thickened milk flavored with cardamom and saffron. A royal Indian dessert.",
    image:
      "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop",
    category: { id: 1, name: "Indian" },
    ingredients: [
      { name: "Chenna", quantity: "300g" },
      { name: "Milk", quantity: "500ml" },
      { name: "Sugar", quantity: "200g" },
      { name: "Saffron", quantity: "few strands" },
      { name: "Pistachios", quantity: "20g" },
    ],
  },
  // Classic
  {
    id: 13,
    name: "Beef Steak",
    price: 35.0,
    calories: 650,
    mealType: "CLASSIC",
    type: "NON-VEG",
    description:
      "Premium aged beef steak cooked to perfection, served with mashed potatoes, seasonal vegetables, and red wine reduction sauce.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
    category: { id: 5, name: "Continental" },
    ingredients: [
      { name: "Beef Tenderloin", quantity: "300g" },
      { name: "Potatoes", quantity: "200g" },
      { name: "Butter", quantity: "50g" },
      { name: "Red Wine", quantity: "100ml" },
      { name: "Rosemary", quantity: "2 sprigs" },
    ],
  },
  {
    id: 14,
    name: "Fish and Chips",
    price: 18.0,
    calories: 580,
    mealType: "CLASSIC",
    type: "NON-VEG",
    description:
      "Beer-battered cod fillet with crispy golden fries, mushy peas, and homemade tartar sauce. A British classic.",
    image:
      "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=400&h=300&fit=crop",
    category: { id: 7, name: "British" },
    ingredients: [
      { name: "Cod Fillet", quantity: "250g" },
      { name: "Potatoes", quantity: "300g" },
      { name: "Beer", quantity: "100ml" },
      { name: "Flour", quantity: "150g" },
      { name: "Peas", quantity: "100g" },
    ],
  },
  {
    id: 15,
    name: "Margherita Pizza",
    price: 16.0,
    calories: 450,
    mealType: "CLASSIC",
    type: "VEG",
    description:
      "Classic Italian pizza with San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil on a crispy crust.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    category: { id: 4, name: "Italian" },
    ingredients: [
      { name: "Pizza Dough", quantity: "250g" },
      { name: "San Marzano Tomatoes", quantity: "100g" },
      { name: "Fresh Mozzarella", quantity: "150g" },
      { name: "Fresh Basil", quantity: "10 leaves" },
      { name: "Olive Oil", quantity: "2 tbsp" },
    ],
  },
  {
    id: 16,
    name: "Chicken Biryani",
    price: 20.0,
    calories: 550,
    mealType: "CLASSIC",
    type: "NON-VEG",
    description:
      "Fragrant basmati rice layered with tender marinated chicken, aromatic spices, fried onions, and saffron. Served with raita.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: { id: 1, name: "Indian" },
    ingredients: [
      { name: "Basmati Rice", quantity: "300g" },
      { name: "Chicken", quantity: "400g" },
      { name: "Yogurt", quantity: "100g" },
      { name: "Saffron", quantity: "few strands" },
      { name: "Biryani Masala", quantity: "2 tbsp" },
      { name: "Fried Onions", quantity: "100g" },
    ],
  },
  // Drinks
  {
    id: 17,
    name: "Fresh Lemonade",
    price: 5.0,
    calories: 120,
    mealType: "DRINKS",
    type: "VEG",
    description:
      "Freshly squeezed lemonade with mint leaves, a hint of honey, and crushed ice. Perfectly refreshing for any occasion.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
    category: { id: 8, name: "Beverages" },
    ingredients: [
      { name: "Lemons", quantity: "3 whole" },
      { name: "Mint Leaves", quantity: "10 leaves" },
      { name: "Honey", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "2 tbsp" },
      { name: "Ice", quantity: "as needed" },
    ],
  },
  {
    id: 18,
    name: "Mango Smoothie",
    price: 7.0,
    calories: 200,
    mealType: "DRINKS",
    type: "VEG",
    description:
      "Creamy mango smoothie blended with yogurt, a touch of honey, and frozen mango chunks. A tropical delight in every sip.",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop",
    category: { id: 8, name: "Beverages" },
    ingredients: [
      { name: "Mango", quantity: "200g" },
      { name: "Yogurt", quantity: "100g" },
      { name: "Honey", quantity: "1 tbsp" },
      { name: "Milk", quantity: "100ml" },
      { name: "Ice", quantity: "as needed" },
    ],
  },
  {
    id: 19,
    name: "Masala Chai",
    price: 4.0,
    calories: 80,
    mealType: "DRINKS",
    type: "VEG",
    description:
      "Traditional Indian spiced tea made with aromatic spices, milk, and premium tea leaves. Warming and invigorating.",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
    category: { id: 8, name: "Beverages" },
    ingredients: [
      { name: "Tea Leaves", quantity: "2 tsp" },
      { name: "Milk", quantity: "150ml" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Cardamom", quantity: "2 pods" },
      { name: "Sugar", quantity: "2 tsp" },
    ],
  },
  {
    id: 20,
    name: "Iced Coffee",
    price: 6.0,
    calories: 150,
    mealType: "DRINKS",
    type: "VEG",
    description:
      "Chilled espresso coffee with milk, vanilla syrup, and ice. A perfect pick-me-up for coffee lovers.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    category: { id: 8, name: "Beverages" },
    ingredients: [
      { name: "Espresso", quantity: "2 shots" },
      { name: "Milk", quantity: "150ml" },
      { name: "Vanilla Syrup", quantity: "1 tbsp" },
      { name: "Ice", quantity: "as needed" },
    ],
  },
];

export const categories = [
  "Starter",
  "Main Course",
  "Dessert",
  "Classic",
  "Drinks",
];

export const mealTypeMap = {
  Starter: "STARTER",
  "Main Course": "MAIN COURSE",
  Dessert: "DESSERT",
  Classic: "CLASSIC",
  Drinks: "DRINKS",
};

export const cuisines = [
  "All Cuisines",
  "North Indian",
  "Chinese",
  "Thai",
  "Italian",
  "Continental",
  "Indian",
  "British",
];
