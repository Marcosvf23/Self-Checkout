// src/app/components/RestaurantCard.tsx

"use client"; // Se precisar de interatividade (ex: clique)

import Image from "next/image";
import Link from "next/link";


interface RestaurantCardProps {
  restaurant: {
    name: string;
    slug: string;
    avatarImageUrl: string;
  };
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    
    <Link href={`/${restaurant.slug}`}>
     
      <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={400} 
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{restaurant.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Ver Cardápio</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;