import { ITaskRepository } from "../interfaces/ITaskRepository";
import { TaskResponseDTO } from "../types/TaskResponseDTO";

export class TaskRepository implements ITaskRepository {
    getAll(): Promise<TaskResponseDTO[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<TaskResponseDTO> {
        throw new Error("Method not implemented.");
    }
    create(data: any): Promise<TaskResponseDTO> {
        throw new Error("Method not implemented.");
    }
    update(data: any): Promise<TaskResponseDTO> {
        throw new Error("Method not implemented.");
    }
    detele(id: string): Promise<TaskResponseDTO> {
        throw new Error("Method not implemented.");
    }
}
