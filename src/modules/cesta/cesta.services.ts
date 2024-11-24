import prisma from "../../utils/prisma";
import { createCestaInput } from "./cesta.schema";

export async function createCesta(input: createCestaInput) {
  const {
    category,
    deliveryDate,
    deliveryStatus,
    quantity,
    price,
    userId,
    compraId,
  } = input;

  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    throw new Error("Usuário não encontrado.");
  }

  return prisma.cesta.create({
    data: {
      category,
      deliveryDate,
      deliveryStatus,
      quantity,
      price,
      userId,
      compraId,
    },
  });
}

export async function getCestas() {
  return prisma.cesta.findMany();
}
