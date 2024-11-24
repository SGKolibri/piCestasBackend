import prisma from "../../utils/prisma";
import { createCompraInput } from "./compra.schema";

export async function createCompra(input: createCompraInput) {
  const { dataCompra, fornecedor, quantidade, valor, comprovante } = input;
  return prisma.compra.create({
    data: {
      dataCompra,
      fornecedor,
      quantidade,
      valor,
      comprovante,
      // cestas: {
      //   connect: cestas.map((cestaId) => ({ id: cestaId })), // conecta o id da cesta com a compra
      // },
    },
  });
}

export async function getCompras() {
  return prisma.compra.findMany();
}
