import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    },
    {
        id: uuid(),
        brand: "Honda",
        model: "Civic",
        year: 2021
    },
    {
        id: uuid(),
        brand: "Audi",
        model: "R8",
        year: 2024
    },
    {
        id: uuid(),
        brand: "Lamborgini",
        model: "Urus",
        year: 2025
    }
]