// routes/search.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/layouts.tsx";
import { tw } from "@twind";

export const handler: Headers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const res = await fetch(`https://api.github.com/users/${query}`);

    if (res.status === 404) {
      return ctx.render(null);
    }

    const user = await res.json();
    return await ctx.render(user);
  },
};

export default function Page({ data }: PageProps) {
  return (
    <Layout>
      <div class={tw`flex justify-center`}>
        <div class={tw`m-auto`}>
          <section class={tw`mt-10`}>
            <form>
              <input
                type="text"
                class={tw`border rounded shadow-md px-4 py-2 w-72`}
                name="q"
                placeholder="Search Github user by Username"
              />
              <button
                class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`}
                type="submit"
              >
                Search
              </button>
            </form>
          </section>

          {data?.name &&
            (
              <section class={tw`mt-10`}>
                <a href={data.html_url} target="_blank">
                  <p class={tw`text-2xl text-center`}>{data.login}</p>
                  <img
                    class={tw`border rounded shadow-md w-32 h-32`}
                    src={data.avatar_url}
                    alt={data.login}
                  />
                </a>
              </section>
            )}
        </div>
      </div>
    </Layout>
  );
}
