import { ITaskRepository } from "../interfaces/ITaskRepository";
import { ITaksService } from "../interfaces/ITaskService";
import { TaskRepository } from "../repositories/TaskRespository";
import { Response } from "../types/GeneralResponse";
import { TaskCreateDTO } from "../types/Task/TaskCreateDTO";
import { TaskRequestDTO } from "../types/Task/TaskRequestDTO";
import { TaskResponseDTO } from "../types/Task/TaskResponseDTO";

export class TaskService implements ITaksService {
  private _repository: ITaskRepository = new TaskRepository();
  public async getAll(): Promise<Response> {
    const taskList: TaskResponseDTO[] = await this._repository.getAll();
    const response: Response = {
      success: true,
      message: "ok",
      data: taskList,
    };
    return response;
  }
  public async getById(id: string): Promise<Response> {
    const task: TaskResponseDTO = await this._repository.getById(id);
    const response: Response = {
      success: true,
      message: "ok",
      data: task,
    };
    return response;
  }
  public async create(data: TaskCreateDTO): Promise<Response> {
    const { title, description }: TaskCreateDTO = data;
    const createdTask: TaskResponseDTO = await this._repository.create({
      title,
      description,
    });
    const response: Response = {
      success: true,
      message: "Create Successfully",
      data: createdTask,
    };
    return response;
  }
  public async delete(id: string): Promise<Response> {
    const deteledTask: TaskResponseDTO = await this._repository.detele(id);
    const response: Response = {
      success: true,
      message: "Deleted Successfully",
      data: deteledTask,
    };
    return response;
  }
  public async updatePartial(data: TaskRequestDTO): Promise<Response> {
    const updatedTask: TaskResponseDTO = await this._repository.update(data);
    const response: Response = {
      success: true,
      message: "Updated Successfully",
      data: updatedTask,
    };
    return response;
  }
}
