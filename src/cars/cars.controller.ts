import { Controller, Get, Post, Param, ParseIntPipe, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService : CarsService
    ){}
    
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id : number ){
        return this.carsService.findOneById(+id)
    }

    @Post()
    createCar(@Body() request : any){
        return request;
        
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id : number,  @Body() body : any ){
        return {
            id: id,
            body: body
        }
    }

    @Delete()
    deleteCar(@Param('id', ParseIntPipe) id : number ){
        return `Eliminando carro ${id}`;
    }
}
