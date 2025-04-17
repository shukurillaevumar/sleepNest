"use client";
import { useState } from "react";
import { products } from "../data/products";
import Image from "next/image";
import { Heart } from "lucide-react";

const seasons = ["All", "Winter", "Autumn", "Summer"];

export default function Collection() {
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSeason =
      selectedSeason === "All" || product.season === selectedSeason;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSeason && matchesSearch;
  });

  return (
    <div className="container mx-auto mt-20 max-sm:p-2">
      <h1 className="text-3xl font-bold mb-6">Collection</h1>
      <div className="flex gap-4 items-center mb-6 max-sm:flex-col max-sm:items-start">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-2">
          {seasons.map((season) => (
            <button
              key={season}
              className={`px-3 py-1 rounded-full cursor-pointer ${
                selectedSeason === season
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedSeason(season)}
            >
              {season}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mb-40">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-4  rounded-xl transition-transform duration-300 hover:scale-105 hover:text-red-500 cursor-pointer relative"
          >
            <Image
              src={product.image}
              alt={product.name}
              className=" object-cover"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">
                {product.season} Collection
              </p>
            </div>
            <div className="absolute top-2 right-12 bg-gray-300 p-2 rounded-full cursor-pointer text-red-500 max-2xl:right-2">
              <Heart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
