import { z } from "zod";

const createUserSchema = z.object({
  nome: z.string(),
  justificativa: z.string(),
  dataInicioColeta: z.string(),
  dataVencimentoProtocolo: z.string(),
  statusColeta: z.string(),
});

export type createUserInput = z.infer<typeof createUserSchema>;
