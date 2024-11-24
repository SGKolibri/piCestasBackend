import { z } from "zod";

const statusEnum = z.enum(["Pendente", "Entregue", "Cancelado"]);

const cestaSchema = z.object({
  category: z.string(),
  deliveryDate: z.string(),
  deliveryStatus: statusEnum,
  quantity: z.number(),
  price: z.number(),
  userId: z.string(),
  compraId: z.string(),
});

export type createCestaInput = z.infer<typeof cestaSchema>;
