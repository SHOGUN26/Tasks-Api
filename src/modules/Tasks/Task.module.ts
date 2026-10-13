import { Module } from "@nestjs/common";
import { PrismaModule } from "../../prisma/prisma.module.js";
import { TaskController } from "./Task.controller.js";
import { TaskService } from "./Task.service.js";


@Module({
    imports:[PrismaModule],
    controllers:[TaskController],
    providers:[TaskService]
})

export class TaskModule {}