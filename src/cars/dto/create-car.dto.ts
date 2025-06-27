import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateCarDTO {

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

    @IsPositive()
    readonly year: number;
}