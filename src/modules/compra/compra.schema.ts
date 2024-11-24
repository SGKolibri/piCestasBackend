import { z } from "zod";

const compraSchema = z.object({
  dataCompra: z.string(),
  fornecedor: z.string(),
  quantidade: z.number(),
  valor: z.number(),
  comprovante: z.string(),
  // cestas: z.array(z.string()), // cestas é um array de strings, caso relacionamento seja de muitos para muitos (não é o caso no momento*)
});

export type createCompraInput = z.infer<typeof compraSchema>;
