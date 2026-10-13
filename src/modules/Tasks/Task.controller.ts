import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Session } from "@nestjs/common";
import { type UserSession } from "@thallesp/nestjs-better-auth";
import { CreateTaskDto } from './dto/create-task.dto.js';
import { TaskService } from './Task.service.js';
import { UpdateTaskDto } from "./dto/update-task.dto.js";
import { ListTaskQueryDto } from "./dto/list-task.dto.js";




@Controller("tasks")
export class TaskController{
    constructor(private readonly tasksService :TaskService){}

    @Get()
    findAll(@Query() query:ListTaskQueryDto, @Session() session:UserSession){
        return this.tasksService.findAll(Number(session.user.id), query)
    }

    @Get(':id/completed')
    completed(@Param('id', ParseIntPipe) id:number, @Session() session:UserSession){
        return this.tasksService.completed(Number(session.user.id), id)
    }



    @Get('id')
    findOne(@Param('id', ParseIntPipe) id:number, @Session() session:UserSession){
        return this.tasksService.findOne(Number(session.user.id), id)
    }

    @Post()
    create(@Session() session: UserSession, @Body() dto: CreateTaskDto){
        return this.tasksService.create(Number(session.user.id), dto)
    }

    @Patch('id')
    update(@Param('id', ParseIntPipe) id:number,@Body() dto: UpdateTaskDto, @Session() session: UserSession ){
        return this.tasksService.update(Number(session.user.id),id , dto)
    }

    @Delete('id')
    remove(@Param('id', ParseIntPipe) id:number, @Session() session:UserSession ){
        return this.tasksService.remove(Number(session.user.id), id)
    }
}
