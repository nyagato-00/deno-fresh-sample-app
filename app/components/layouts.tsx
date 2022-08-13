/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function layouts({ children }: any) {
  return (
    <div>
      <nav class={tw`w-full px-4 py-3 bg-black text-white mb-10`}>
        <a class={tw`mx-4`} href="/">Home</a>
        <a class={tw`mx-4`} href="/about">About</a>
        <a class={tw`mx-4`} href="/search">Search Github Users</a>
      </nav>
      {children}
    </div>
  );
}
