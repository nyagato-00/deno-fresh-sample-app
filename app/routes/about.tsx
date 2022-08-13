// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import Layout from "../components/layouts.tsx";

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is the about page.</p>
    </Layout>
  );
}
