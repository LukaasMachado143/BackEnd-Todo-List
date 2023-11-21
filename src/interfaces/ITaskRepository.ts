
import { TaskResponseDTO } from "../types/TaskResponseDTO";

export interface ITaskRepository {
  getAll(): Promise<TaskResponseDTO[]>;
  getById(id: string): Promise<TaskResponseDTO>;
  create(data: any): Promise<TaskResponseDTO>;
  update(data: any): Promise<TaskResponseDTO>;
  detele(id: string): Promise<TaskResponseDTO>;
}
