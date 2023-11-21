import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { TaskController } from "../controllers/TaskController";
export const taskRoutes = async (fastify: FastifyInstance) => {
  const controller = new TaskController();
  fastify.get("/", controller.getAll);

  fastify.get("/:id", controller.getById);

  fastify.post("/", controller.create);

  fastify.patch("/:id", controller.updatePartial);

  fastify.delete("/:id", controller.delete);
};
