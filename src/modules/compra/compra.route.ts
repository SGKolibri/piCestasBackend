import { FastifyInstance } from "fastify";
import { createCompraHandler, getComprasHandler } from "./compra.controller";

export default async function compraRoutes(server: FastifyInstance) {
  server.post("/", createCompraHandler);
  server.get("/", getComprasHandler);
}
