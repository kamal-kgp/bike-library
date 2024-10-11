import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './entities/bike.entity';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(Bike)
    private bikeRepository: Repository<Bike>,
  ) {}

  findAll(): Promise<Bike[]> {
    return this.bikeRepository.find();
  }

  findOne(id: string): Promise<Bike> {
    return this.bikeRepository.findOneBy({ id });
  }

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const newBike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(newBike);
  }

  async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
    const bike = await this.bikeRepository.preload({
      id: id,
      ...updateBikeDto,
    });

    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }

    return this.bikeRepository.save(bike);
  }

  async remove(id: string): Promise<void> {
    const result = await this.bikeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
  }
}
