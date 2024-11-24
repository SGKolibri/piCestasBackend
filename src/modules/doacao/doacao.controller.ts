import { FastifyReply, FastifyRequest } from "fastify";
import { createDoacaoInput } from "./doacao.schema";
import { createDoacao, getDoacoes } from "./doacao.services";

export async function createDoacaoHandler(
  request: FastifyRequest<{ Params: { id: string }; Body: createDoacaoInput }>,
  reply: FastifyReply
) {
  const body = request.body;
  const destinatario = request.params.id;
  try {
    const doacao = await createDoacao({ ...body, destinatario });
    return reply.status(201).send(doacao);
  } catch (error) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getDoacaoesHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const doacoes = await getDoacoes();
    return reply.status(200).send(doacoes);
  } catch (error) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}
