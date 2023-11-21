import { FastifyReply, FastifyRequest } from "fastify";
import { ITaksService } from "../interfaces/ITaskService";
import { TaskService } from "../services/TaskService";
import { Response } from "../types/GeneralResponse";
import { TaskRequestDTO } from "../types/TaskRequestDTO";
import { TaskCreateDTO } from "../types/TaskCreateDTO";

export class TaskController {
  private _service: ITaksService;
  constructor() {
    this._service = new TaskService();
  }
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      const response: Response = await this._service.getAll();
      reply.send(response);
    } catch (error) {
      const errorMessage: Response = {
        success: false,
        message: "Internal Error",
        error,
      };
      reply.status(500).send(errorMessage);
    }
  }

  async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const id: string = request.params.id;
      const response: Response = await this._service.getById(id);
      reply.send(response);
    } catch (error) {
      const errorMessage: Response = {
        success: false,
        message: "Internal Error",
        error,
      };
      reply.status(500).send(errorMessage);
    }
  }

  async updatePartial(
    request: FastifyRequest<{ Body: TaskRequestDTO }>,
    reply: FastifyReply
  ) {
    try {
      const updatedData: TaskRequestDTO = request.body;
      const response: Response = await this._service.updatePartial(updatedData);
      reply.send(response);
    } catch (error) {
      const errorMessage: Response = {
        success: false,
        message: "Internal Error",
        error,
      };
      reply.status(500).send(errorMessage);
    }
  }

  async create(
    request: FastifyRequest<{ Body: TaskCreateDTO }>,
    reply: FastifyReply
  ) {
    try {
      const newTask: TaskCreateDTO = request.body;
      const response: Response = await this._service.create(newTask);
      reply.status(response.success ? 201 : 200).send(response);
    } catch (error) {
      const errorMessage: Response = {
        success: false,
        message: "Internal Error",
        error,
      };
      reply.status(500).send(errorMessage);
    }
  }

  async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const id: string = request.params.id;
      const response: Response = await this._service.delete(id);
      reply.send(response);
    } catch (error) {
      const errorMessage: Response = {
        success: false,
        message: "Internal Error",
        error,
      };
      reply.status(500).send(errorMessage);
    }
  }
}
