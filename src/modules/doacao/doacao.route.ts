import { FastifyInstance } from "fastify";
import { createDoacaoHandler, getDoacaoesHandler } from "./doacao.controller";

export default async function doacaoRoutes(server: FastifyInstance) {
  server.post("/:id", createDoacaoHandler);
  server.get("/", getDoacaoesHandler);
}
