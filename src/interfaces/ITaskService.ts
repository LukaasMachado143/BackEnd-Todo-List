import { Response } from "../types/GeneralResponse";
import { TaskCreateDTO } from "../types/TaskCreateDTO";
import { TaskRequestDTO } from "../types/TaskRequestDTO";

export interface ITaksService {
  getAll(): Promise<Response>;
  getById(id: string): Promise<Response>;
  create(data: TaskCreateDTO): Promise<Response>;
  delete(id: string): Promise<Response>;
  updatePartial(data: TaskRequestDTO): Promise<Response>;
}
