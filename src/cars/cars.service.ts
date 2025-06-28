import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
            year: 2021
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Focus',
            year: 2019
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'Malibu',
            year: 2018
        },
        {
            id: uuid(),
            brand: 'Nissan',
            model: 'Sentra',
            year: 2022
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException('Car not found');
        
        return car;
    }

    create( CreateCarDTO: CreateCarDTO ){

        let car : Car = {
            id : uuid(),
            ...CreateCarDTO
        }
        
        this.cars.push( car );

        return car; 
    }

    update(id: string, updateCarDTO: UpdateCarDTO) {
        const carDB = this.findOneById(id);
    
        // Actualizar manualmente los campos para evitar problemas con el operador de propagación
        const updatedCar = {
            id: carDB.id, // Aseguramos que el ID no se pierda
            brand: updateCarDTO.brand ?? carDB.brand, // Si no se proporciona, se mantiene el valor original
            model: updateCarDTO.model ?? carDB.model,
            year: updateCarDTO.year ?? carDB.year,
        };
    
        // Reemplazar el carro en la lista
        this.cars = this.cars.map(car => (car.id === id ? updatedCar : car));
    
        return updatedCar;
    }

    delete(id: string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id != id );
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }

}
