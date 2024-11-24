import { FastifyReply, FastifyRequest } from "fastify";
import { createCompra, getCompras } from "./compra.services";
import { createCompraInput } from "./compra.schema";

export async function createCompraHandler(
  request: FastifyRequest<{ Body: createCompraInput }>,
  reply: FastifyReply
) {
  const body = request.body;
  try {
    const compra = await createCompra(body);
    reply.status(201).send(compra);
  } catch (error) {
    reply.status(500).send({ message: "Internal server error." });
  }
}

export async function getComprasHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const compras = await getCompras();
    reply.status(200).send(compras);
  } catch (error) {
    reply.status(500).send({ message: "Internal server error." });
  }
}
