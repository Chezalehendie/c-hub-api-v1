import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateItemDto} from 'src/typeorm/dtos/CreateItem.dto';
import { updateItemsDto} from 'src/typeorm/dtos/updateItems.dto';

@Controller('business')
export class BusinessController{
constructor(private businessService: BusinessService){}

@Post()
    addItem(
        @Body()CreateItemDto: CreateItemDto
        ){
   return this.businessService.insertItem(CreateItemDto);
    }

    @Get()
    async getItems(){
    const items = await this.businessService.getAllItems();
    return items;
    }

    
    @Get(':id')
    async getSingleItemById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const item = await this.businessService.getSingleItem(id);
        return item;
        }

        @Patch(':id')
    async updateItemById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateItemsDto: updateItemsDto,
    ){
     const items = await this.businessService.updateItem(id, updateItemsDto);
     return items;
    }

    @Delete(':id')
    async deleteItemById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.businessService.deleteItem(id);
     console.log('DELETED SUCCESSFULLY')
}
}