import { ITaskRepository } from "../interfaces/ITaskRepository";
import { TaskResponseDTO } from "../types/TaskResponseDTO";
import { Firestore } from "@google-cloud/firestore";

export class TaskRepository implements ITaskRepository {
  private _context: Firestore;
  constructor() {
    this._context = new Firestore();
  }
  public async getAll(): Promise<TaskResponseDTO[]> {
    const data = await this._context.collection("tasks").get();
    console.log(data);
    const tasks: TaskResponseDTO[] = data.docs.map(
      (doc) => doc.data() as TaskResponseDTO
    );
    console.log(tasks);
    return tasks;
  }
  public async getById(id: string): Promise<TaskResponseDTO> {
    throw new Error("Method not implemented.");
  }
  public async create(data: any): Promise<TaskResponseDTO> {
    throw new Error("Method not implemented.");
  }
  public async update(data: any): Promise<TaskResponseDTO> {
    throw new Error("Method not implemented.");
  }
  public async detele(id: string): Promise<TaskResponseDTO> {
    throw new Error("Method not implemented.");
  }
}
