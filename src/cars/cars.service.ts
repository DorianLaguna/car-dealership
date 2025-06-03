import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
            year: 2021
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Focus',
            year: 2019
        },
        {
            id: 4,
            brand: 'Chevrolet',
            model: 'Malibu',
            year: 2018
        },
        {
            id: 5,
            brand: 'Nissan',
            model: 'Sentra',
            year: 2022
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException('Car not found');
        
        return car;
    }

}
