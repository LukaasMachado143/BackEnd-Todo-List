import { FastifyInstance } from "fastify";
import { TaskController } from "../controllers/TaskController";

export const taskRoutes = async (fastify: FastifyInstance) => {

  const controller = new TaskController();

  fastify.get("/", controller.getAll);

  fastify.get("/:id", controller.getById);

  fastify.post("/", controller.create);

  fastify.patch("/:id", controller.update);

  fastify.delete("/:id", controller.delete);
};
