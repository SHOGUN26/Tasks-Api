import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { ListTaskQueryDto } from './dto/list-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { PrismaService } from './../../prisma/prisma.service.js';

@Injectable()
export class TaskService {
    constructor(private readonly prisma:PrismaService ) {}

    //Creation d'une tâche
    create(userId:number, dto:CreateTaskDto){
        return this.prisma.task.create({
            data:{
                ...dto,
                userId
            }
        })
    }

    //Trouver toutes les tâches
    findAll(userId:number, filters:ListTaskQueryDto){
        return this.prisma.task.findMany({
            where:{userId, ...filters},
            orderBy:{createdAt:'desc'}
        })
    }


    //Trouver une seule tâcher
    async findOne(userId:number,id:number){
        const task = await this.prisma.task.findFirst({
            where:{userId, id}
        })

        if (!task) {
            throw new NotFoundException(`Task ${id} not found`)
        } 
        return task
    }

    //Mettre à jour une tâche
    async update(userId:number,id:number, dto: UpdateTaskDto){
        await this.findOne(userId,id)
        return this.prisma.task.update({
            where:{id},
            data:dto
        })
    }

    //Supprimer une tâche
    async remove(userId:number,id:number){
        await this.findOne(userId,id)
        return this.prisma.task.delete({
            where:{id}
        })
    }

    //Marqué une tâche comme complétée.
    async completed(userId:number, id:number){
        await this.findOne(userId,id)
        return this.prisma.task.update({
            where:{id},
            data: { completed:true }
        })
    }
    
}