// routes/github/[username].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";
import { tw } from "@twind";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1 class={tw`text-2xl text-center`}>User not found</h1>;
  }

  return (
    <Layout>
      <div>
        <img
          class={tw`border rounded shadow-md w-32 h-32`}
          src={data.avatar_url}
        />
        <h1>{data.name}</h1>
        <p class={tw`text-2xl`}>{data.login}</p>
      </div>
    </Layout>
  );
}
