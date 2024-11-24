import prisma from "../../utils/prisma";
import { createDoacaoInput } from "./doacao.schema";

export async function createDoacao(input: createDoacaoInput) {
  const { dataValidade, dataDoacao, categoria, destinatario } = input;
  return await prisma.doacao.create({
    data: {
      dataValidade,
      dataDoacao,
      categoria,
      destinatario: {
        connect: {
          id: destinatario, // Conecta a doação ao destinatário pelo ID
        },
      },
    },
  });
}

export async function getDoacoes() {
  return await prisma.doacao.findMany({
    include: {
      destinatario: true,
    },
  });
}
