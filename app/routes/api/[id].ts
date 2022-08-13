import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(): Response {
    const users = [{ name: "takashi"}, { name: "nyagato-00" }];
    return new Response(JSON.stringify(users));
  },
};
