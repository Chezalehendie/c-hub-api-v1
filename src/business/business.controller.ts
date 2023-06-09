import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateItemDto} from 'src/typeorm/dtos/CreateItem.dto';
import { updateItemsDto} from 'src/typeorm/dtos/updateItems.dto';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { businessItems } from 'src/typeorm/entities/businessItems';

@Controller('business')
export class BusinessController{
constructor(private businessService: BusinessService){}

@Post()

@ApiCreatedResponse({
    description:'item has been created',
    type:businessItems,
})

@ApiBadRequestResponse({
    description:'item cannot be created.try again',
})
    addItem(
        @Body()CreateItemDto: CreateItemDto
        ){
   return this.businessService.insertItem(CreateItemDto);
    }

    @Get()

    @ApiCreatedResponse({
        description:'item has been created',
        type:businessItems,
    })
    
    @ApiBadRequestResponse({
        description:'item cannot be created.try again',
    })
    async getItems(){
    const items = await this.businessService.getAllItems();
    return items;
    }

    
    @Get(':id')

    @ApiCreatedResponse({
        description:'article has been created',
        type:businessItems,
    })
    
    @ApiBadRequestResponse({
        description:'article cannot be created.try again',
    })
    async getSingleItemById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const item = await this.businessService.getSingleItem(id);
        return item;
        }

        @Patch(':id')

        @ApiCreatedResponse({
            description:'article has been updated',
            type:businessItems,
        })
        
        @ApiBadRequestResponse({
            description:'article cannot be updated.try again',
        })
    async updateItemById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateItemsDto: updateItemsDto,
    ){
     const items = await this.businessService.updateItem(id, updateItemsDto);
     return items;
    }

    @Delete(':id')

    @ApiCreatedResponse({
        description:'article has been deleted',
        type:businessItems,
    })
    
    @ApiBadRequestResponse({
        description:'article cannot be deleted.try again',
    })
    async deleteItemById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.businessService.deleteItem(id);
     console.log('DELETED SUCCESSFULLY')
}
}