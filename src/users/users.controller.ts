import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersSerice: UsersService){}

    @Get()
    index(): Promise<User[]> {
      return this.usersSerice.findAll();
    }    

    @Post('create')
    async create(@Body() userData: User): Promise<any> {
        return this.usersSerice.create(userData);
    }

    @Put('update/:id')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        console.log('Update #' + userData.id);
        return this.usersSerice.update(userData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
        return this.usersSerice.delete(id);
    }
}