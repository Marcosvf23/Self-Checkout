// src/app/page.tsx

import { Separator } from "@/components/ui/separator";

import RestaurantCard from "./components/RestaurantCard";
import { getAllRestaurants } from "./data/restaurant";

// O componente deve ser uma função exportada como default
const HomePage = async () => { 
  const restaurants = await getAllRestaurants();

  return (
    <div className="container mx-auto p-4">
      {/* ... seu JSX ... */}
      <h1 className="text-3xl font-bold mb-6">Selecione o Restaurante</h1>
      
      <Separator className="mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;