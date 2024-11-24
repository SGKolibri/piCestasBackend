import { FastifyInstance } from "fastify";
import { createUserHandler, getUsersHandler } from "./user.controller";

export default async function userRoutes(server: FastifyInstance) {
  server.post("/", createUserHandler);

  server.get("/", getUsersHandler);
}
