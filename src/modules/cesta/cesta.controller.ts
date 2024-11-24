import { FastifyReply, FastifyRequest } from "fastify";
import { createCesta, getCestas } from "./cesta.services";
import { createCestaInput } from "./cesta.schema";

export async function createCestaHandler(
  request: FastifyRequest<{
    Params: { userId: string };
    Body: createCestaInput;
  }>,
  reply: FastifyReply
) {
  const body = request.body;
  const userId = request.params.userId;
  try {
    const cesta = await createCesta({ ...body, userId });
    return reply.status(201).send(cesta);
  } catch (error) {
    return reply.code(500).send({ error: "Internal Server Error." });
  }
}

export async function getCestasHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const cestas = await getCestas();
    return reply.status(200).send(cestas);
  } catch (error) {
    return reply.code(500).send({ error: "Internal Server Error." });
  }
}
