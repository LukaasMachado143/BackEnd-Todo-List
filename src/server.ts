import fastify, { FastifyInstance } from "fastify";
import { taskRoutes } from "./API/routes/TaskRoutes";
import fastifyCors from "@fastify/cors";

const server: FastifyInstance = fastify();

server.register(fastifyCors)
server.register(taskRoutes, { prefix: "/task" });

server.listen({ port: 3000 }, () => {
  console.log("Server is running");
});
