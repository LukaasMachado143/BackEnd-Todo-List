import { FastifyReply, FastifyRequest } from "fastify";
import { ITaksService } from "../../Core/interfaces/ITaskService";
import { TaskService } from "../../BusinessLogic/TaskService";
import { TaskRequestDTO } from "../../Core/types/Task/TaskRequestDTO";
import { TaskCreateDTO } from "../../Core/types/Task/TaskCreateDTO";
import { Response } from "../../Core/types/GeneralResponse";

export class TaskController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      const service: ITaksService = new TaskService();
      const response: Response = await service.getAll();
      reply.send(response);
    } catch (error) {
      console.log(error);
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
      const service: ITaksService = new TaskService();
      const id: string = request.params.id;
      const response: Response = await service.getById(id);
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

  async update(
    request: FastifyRequest<
      { Params: { id: string } },
      { Body: TaskRequestDTO }
    >,
    reply: FastifyReply
  ) {
    try {
      const service: ITaksService = new TaskService();
      const updatedData = request.body as TaskRequestDTO;
      const id: string = request.params.id;
      const response: Response = await service.update(id, updatedData);
      reply.send(response);
    } catch (error) {
      console.log(error);
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
      const service: ITaksService = new TaskService();
      const newTask: TaskCreateDTO = request.body;
      const response: Response = await service.create(newTask);
      reply.status(response.success ? 201 : 200).send(response);
    } catch (error) {
      console.log(error);
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
      const service: ITaksService = new TaskService();
      const id: string = request.params.id;
      const response: Response = await service.delete(id);
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
