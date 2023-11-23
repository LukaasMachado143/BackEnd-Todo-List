import { TaskResponseDTO } from "../types/Task/TaskResponseDTO";

export interface ITaskRepository {
  getAll(): Promise<TaskResponseDTO[]>;
  getById(id: string): Promise<TaskResponseDTO>;
  create(data: any): Promise<TaskResponseDTO>;
  update(id: string, data: any): Promise<TaskResponseDTO>;
  detele(id: string): Promise<TaskResponseDTO>;
}
