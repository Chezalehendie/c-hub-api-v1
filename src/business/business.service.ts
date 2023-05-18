import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { businessItems } from 'src/typeorm/entities/businessItems';
import { Repository } from 'typeorm';
import { CreateItemParams } from 'src/utills/types';
import { updateItemsParams } from 'src/utills/types';

@Injectable()
export class BusinessService {
    constructor(
        @InjectRepository(businessItems) private itemRepository: Repository<businessItems>,
    ){}

    insertItem(itemName: CreateItemParams){
        const newItem = this.itemRepository.create({
            ...itemName,
        });
        return this.itemRepository.save(newItem);
    }
    getAllItems(){
        return this.itemRepository.find();
    }

    getSingleItem(id: number){
        return this.itemRepository.find();
    }

    updateItem(id: number, updateItemsDetails: updateItemsParams){ 
        return  this.itemRepository.update({ id }, {...updateItemsDetails});
      }

      deleteItem(id: number){
        return this.itemRepository.delete({ id });
        }
}