import { Response } from "../types/GeneralResponse";
import { TaskCreateDTO } from "../types/Task/TaskCreateDTO";
import { TaskRequestDTO } from "../types/Task/TaskRequestDTO";

export interface ITaksService {
  getAll(): Promise<Response>;
  getById(id: string): Promise<Response>;
  create(data: TaskCreateDTO): Promise<Response>;
  delete(id: string): Promise<Response>;
  update(id: string, data: TaskRequestDTO): Promise<Response>;
}
