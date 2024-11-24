import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, getUsers } from "./user.services";
import { createUserInput } from "./user.schema";

export async function createUserHandler(
  request: FastifyRequest<{ Body: createUserInput }>,
  reply: FastifyReply
) {
  const body = request.body;
  try {
    const user = await createUser(body);
    return reply.status(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Internal Server Error." });
  }
}

export async function getUsersHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const users = await getUsers();
    return reply.send(users);
  } catch (error) {
    return reply.code(500).send({ error: "Internal Server Error." });
  }
}
