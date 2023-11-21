import fastify, { FastifyInstance } from "fastify";
import { taskRoutes } from "./routes/TaskRoutes";

const server: FastifyInstance = fastify({ logger: true });

server.register(taskRoutes, { prefix: "/task" });

server.listen({ port: 3000 }, () => {
  console.log("Server is running");
});
