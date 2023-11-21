import { ITaskRepository } from "../interfaces/ITaskRepository";
import { ITaksService } from "../interfaces/ITaskService";
import { TaskModel } from "../models/TaskModel";
import { TaskRepository } from "../repositories/TaskRespository";
import { Response } from "../types/GeneralResponse";
import { TaskCreateDTO } from "../types/TaskCreateDTO";
import { TaskRequestDTO } from "../types/TaskRequestDTO";
import { TaskResponseDTO } from "../types/TaskResponseDTO";

export class TaskService implements ITaksService {
  private _repository: ITaskRepository;
  constructor() {
    this._repository = new TaskRepository();
  }
  async getAll(): Promise<Response> {
    const taskList: TaskResponseDTO[] = await this._repository.getAll();
    const response: Response = {
      success: true,
      message: "ok",
      data: taskList,
    };
    return response;
  }
  async getById(id: string): Promise<Response> {
    const task: TaskResponseDTO = await this._repository.getById(id);
    const response: Response = {
      success: true,
      message: "ok",
      data: task,
    };
    return response;
  }
  async create(data: TaskCreateDTO): Promise<Response> {
    const { title, description }: TaskCreateDTO = data;
    const newTask: TaskModel = new TaskModel(title, description);
    const createdTask: TaskResponseDTO = await this._repository.create(newTask);
    const response: Response = {
      success: true,
      message: "Create Successfully",
      data: createdTask,
    };
    return response;
  }
  async delete(id: string): Promise<Response> {
    const deteledTask: TaskResponseDTO = await this._repository.detele(id);
    const response: Response = {
      success: true,
      message: "Deleted Successfully",
      data: deteledTask,
    };
    return response;
  }
  async updatePartial(data: TaskRequestDTO): Promise<Response> {
    const updatedTask: TaskResponseDTO = await this._repository.update(data);
    const response: Response = {
      success: true,
      message: "Updated Successfully",
      data: updatedTask,
    };
    return response;
  }
}
