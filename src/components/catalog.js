import React from "react";
import Product from "./product";
import lambo from "../static/lambo_blue.jpeg";
import audi from "../static/audi.jfif";
import bugatti from "../static/bugatti.jfif";
import chevrolet from "../static/chevrolet.jfif";
import hundai from "../static/hundai.jpg";
import mercedes from "../static/mercedes.jpg";
import swift from "../static/swift.jpeg";
import Pagination from "./pagination";

/* list of products needs to be displayed */
const products = [
  {
    id: "1",
    name: "Lamborgini",
    image: lambo,
    cost: "677.32",
    short_description:
      "This is the Lambo. If you are not so found of SUV's this is the best.",
  },
  {
    id: "2",
    name: "Audi",
    image: audi,
    cost: "3474.41",
    short_description:
      "This is the Audi R8. If you are not so found of SUV's this is the best.",
  },
  {
    id: "3",
    name: "Bugatti Veron",
    image: bugatti,
    cost: "2878.07",
    short_description:
      "This is the Bugatti Veron. If you are not so found of SUV's this is the best.",
  },
  {
    id: "4",
    name: "Chevrolette",
    image: chevrolet,
    cost: "4379.01",
    short_description:
      "This is the Chevrolette. If you are not so found of SUV's this is the best.",
  },
  {
    id: "5",
    name: "",
    image: hundai,
    cost: "3274.66",
    short_description:
      "This is the Hundai R8. If you are not so found of SUV's this is the best.",
  },
  {
    id: "6",
    name: "Mercedes",
    image: mercedes,
    cost: "758.8",
    short_description:
      "This is the Mercedes. If you are not so found of SUV's this is the best.",
  },
  {
    id: "7",
    name: "Swift",
    image: swift,
    cost: "2691.62",
    short_description:
      "This is the Suzuki swift. If you are not so found of SUV's this is the best.",
  },
  {
    id: "8",
    name: "Audi",
    image: audi,
    cost: "4801.29",
    short_description:
      "This is the audi R8. If you are not so found of SUV's this is the best.",
  },
  {
    id: "9",
    name: "Lamborgini",
    image: lambo,
    cost: "677.32",
    short_description:
      "This is the Lambo. If you are not so found of SUV's this is the best.",
  },
  {
    id: "10",
    name: "Audi",
    image: audi,
    cost: "3474.41",
    short_description:
      "This is the Audi R8. If you are not so found of SUV's this is the best.",
  },
  {
    id: "11",
    name: "Bugatti Veron",
    image: bugatti,
    cost: "2878.07",
    short_description:
      "This is the Bugatti Veron. If you are not so found of SUV's this is the best.",
  },
  {
    id: "12",
    name: "Chevrolette",
    image: chevrolet,
    cost: "4379.01",
    short_description:
      "This is the Chevrolette. If you are not so found of SUV's this is the best.",
  },
];

/* Catalog component calling product component */
const Catalog = () => {
  let tiles = [];
  products.map(prod => {
    tiles.push(<Product product={prod} key={prod.id}></Product>);
    return "";
  });
  return (
    <>
      <nav>
        <div className="text-center mb-4">This is header</div>
      </nav>
      <div className="container mt-2">
        <div className="row">{tiles}</div>
        <Pagination />
      </div>
      <footer className="text-center font-weight-bold">This is footer</footer>
    </>
  );
};

export default Catalog;
