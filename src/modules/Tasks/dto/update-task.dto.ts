import { createZodDto } from 'nestjs-zod';
import {z} from 'zod';
import {createTaskSchema} from './create-task.dto.js'

export class UpdateTaskDto extends createZodDto(
    createTaskSchema.partial()
){}

