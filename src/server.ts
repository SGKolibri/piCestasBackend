import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import userRoutes from "./modules/user/user.route";
import cestaRoutes from "./modules/cesta/cesta.route";
import compraRoutes from "./modules/compra/compra.route";
import doacaoRoutes from "./modules/doacao/doacao.route";

export const server = fastify();

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

server.register(fastifyCors, {
  origin: "*",
});

server.get("/", async () => {
  return { hello: "world" };
});

async function main() {
  await server.register(require("@fastify/swagger"));
  await server.register(require("@fastify/swagger-ui"), {
    routePrefix: "/docs",
  });

  await server.register(userRoutes, { prefix: "/api/users" });
  await server.register(cestaRoutes, { prefix: "/api/cestas" });
  await server.register(compraRoutes, { prefix: "/api/compras" });
  await server.register(doacaoRoutes, { prefix: "/api/doacoes" });

  await server
    .listen({ host: "0.0.0.0", port: 5050 })
    .then(() => console.log("Server is running on port 5050."));
}

main();
