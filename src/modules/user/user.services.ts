import prisma from "../../utils/prisma";
import { createUserInput } from "./user.schema";

export async function createUser(input: createUserInput) {
  const {
    nome,
    justificativa,
    dataInicioColeta,
    dataVencimentoProtocolo,
    statusColeta,
  } = input;
  return prisma.user.create({
    data: {
      nome,
      justificativa,
      dataInicioColeta,
      dataVencimentoProtocolo,
      statusColeta,
    },
  });
}

export async function getUsers() {
  return prisma.user.findMany();
}
