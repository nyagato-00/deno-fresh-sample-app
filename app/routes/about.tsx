// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import Layout from "../components/layouts.tsx";
import { tw } from "@twind";

export default function AboutPage() {
  return (
    <Layout>
      <div class={tw`flex justify-center`}>
        <div class={tw`m-auto`}>
          <section class={tw`mt-10`}>
            <h1>About</h1>
            <p>This is the about page.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
