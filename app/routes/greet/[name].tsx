// routes/greet/[name].tsx

/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    // fetch users fron db
    const users = [
      { name: "takashi"},
      { name: "nyagato-00" }
    ];
    return  await ctx.render(users);
  },

} 

export default function GreetPage({params, data}: PageProps) {
  const { name } = params;
  return (
    <Layout>
      <main>
        <p>Greetings to you, {name}!</p>
      </main>
      {
        data.map((user:any) => <p>{user.name}</p>)
      }
    </Layout>
  );
}
