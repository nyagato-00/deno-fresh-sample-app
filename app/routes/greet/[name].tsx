// routes/greet/[name].tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <Layout>
      <main>
        <p>Greetings to you, {name}!</p>
      </main>
    </Layout>
  );
}
