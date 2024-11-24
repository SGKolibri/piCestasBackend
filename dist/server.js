"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  server: () => server,
});
module.exports = __toCommonJS(server_exports);
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var prisma_default = prisma;

// src/modules/user/user.services.ts
async function createUser(input) {
  const { name, email } = input;
  return prisma_default.user.create({
    data: {
      name,
      email,
    },
  });
}
async function getUsers() {
  return prisma_default.user.findMany();
}

// src/modules/user/user.controller.ts
async function createUserHandler(request, reply) {
  const body = request.body;
  try {
    const user = await createUser(body);
    return reply.status(201).send(user);
  } catch (error) {
    return reply.code(500).send({ error: "Internal Server Error." });
  }
}
async function getUsersHandler(request, reply) {
  try {
    const users = await getUsers();
    return reply.send(users);
  } catch (error) {
    return reply.code(500).send({ error: "Internal Server Error." });
  }
}

// src/modules/user/user.route.ts
async function userRoutes(server2) {
  server2.post("/", createUserHandler);
  server2.get("/", getUsersHandler);
}

// src/server.ts
var server = (0, import_fastify.default)();
server.register(import_cors.default, {
  origin: "*",
});
server.get("/", async () => {
  return { hello: "world" };
});
async function main() {
  await server.register(userRoutes, { prefix: "/api/users" });
  await server.register(require("@fastify/swagger"));
  await server.register(require("@fastify/swagger-ui"), {
    routePrefix: "/docs",
  });
  await server
    .listen({ host: "0.0.0.0", port: 3e3 })
    .then(() => console.log("Server is running on port 5050."));
}
main();
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    server,
  });
