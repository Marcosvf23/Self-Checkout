// src/app/data/restaurant.ts

import { db } from "@/lib/prisma";

// Função para buscar todos os restaurantes
export const getAllRestaurants = async () => {
  const restaurants = await db.restaurant.findMany({
    
    select: {
      id: true,
      name: true,
      slug: true,
      avatarImageUrl: true,
    },
  });
  return restaurants;
};