import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {

  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>
){}

  create(location: CreateLocationDto) {
    this.locationRepository.save(location);
    return location;  }

  findAll() {
    const data = this.locationRepository.find();
    Logger.log("all data",data);
    const p = Promise.resolve(data);
    p.then(value => {
      console.log(value); // 👉️ "hello"
    }).catch(err => {
      console.log(err);
    });
    return data; 
  }

  findOne(id: number) {
    return this.locationRepository.findOneBy({id});
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    console.log("hello12");
    return this.locationRepository.update(id, updateLocationDto);
  }

  remove(id: number) {
    return this.locationRepository.delete(id);
  }
}
