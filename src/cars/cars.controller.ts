import { Controller, Get, Post, Param, ParseIntPipe, Body, Patch, Delete, ParseUUIDPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

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
    getCarById( @Param('id', ParseUUIDPipe) id : string ){
        return this.carsService.findOneById(id)
    }

    @Post()
    createCar(@Body() createCarDTO : CreateCarDTO){
        return this.carsService.create(createCarDTO);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id : string,  
        @Body() updateCarDTO : UpdateCarDTO 
    ){
        return this.carsService.update(id, updateCarDTO);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id : string  ){
        return this.carsService.delete(id);
    }
}
