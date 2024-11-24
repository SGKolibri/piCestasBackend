import { z } from "zod";

const createDoacaoSchema = z.object({
  dataValidade: z.date(),
  dataDoacao: z.date(),
  categoria: z.string(),
  destinatario: z.string(),
});

export type createDoacaoInput = z.infer<typeof createDoacaoSchema>;
