import { ITaskRepository } from "../../Core/interfaces/ITaskRepository";
import { TaskCreateDTO } from "../../Core/types/Task/TaskCreateDTO";
import { TaskResponseDTO } from "../../Core/types/Task/TaskResponseDTO";
import { prismaClient } from "../db/db";

export class TaskRepository implements ITaskRepository {
  public async getAll(): Promise<TaskResponseDTO[]> {
    const listTask = await prismaClient.task.findMany();
    const listTaskFormated: TaskResponseDTO[] = listTask.map(
      (task) => task as TaskResponseDTO
    );
    return listTaskFormated;
  }
  public async getById(id: string): Promise<TaskResponseDTO> {
    const { description, isConclued, title } =
      (await prismaClient.task.findFirst({ where: { id } })) as TaskResponseDTO;
    const formatedTask: TaskResponseDTO = {
      id,
      description,
      isConclued,
      title,
    };
    return formatedTask;
  }
  public async create(data: TaskCreateDTO): Promise<TaskResponseDTO> {
    const { title, description }: TaskCreateDTO = data;
    const newTask = await prismaClient.task.create({
      data: { title, description },
    });
    const response: TaskResponseDTO = {
      id: newTask.id,
      title: newTask.title,
      description: newTask.description,
      isConclued: newTask.isConclued,
    };
    return response;
  }
  public async update(id: string, data: any): Promise<TaskResponseDTO> {
    const { title, description, isConclued } = await prismaClient.task.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        description: data.description,
        isConclued: data.isConclued,
        updateAt: data.updateAt,
      },
    });
    const response: TaskResponseDTO = {
      id: data.id,
      title,
      description,
      isConclued,
    };
    return response;
  }
  public async detele(id: string): Promise<TaskResponseDTO> {
    const { title, description, isConclued } = await prismaClient.task.delete({
      where: { id },
    });
    const response: TaskResponseDTO = {
      id,
      title,
      description,
      isConclued,
    };
    return response;
  }
}
