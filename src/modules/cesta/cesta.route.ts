import { FastifyInstance } from "fastify";
import { createCestaHandler, getCestasHandler } from "./cesta.controller";

export default async function cestaRoutes(server: FastifyInstance) {
  server.post("/:id", createCestaHandler);

  server.get("/", getCestasHandler);
}
