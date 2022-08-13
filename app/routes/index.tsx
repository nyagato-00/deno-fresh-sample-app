/** @jsx h */
import { h } from "preact";
import Layout from "../components/layouts.tsx";
import { tw } from "@twind";

export default function Home() {
  return (
    <Layout>
      <h1 class={tw`text-2xl text-center`}>Welcome to nyagato_00 Fresh App</h1>
    </Layout>
  );
}
