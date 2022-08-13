/** @jsx h */
import { h } from "preact";

export default function layouts({children}:any) {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/greet/nyagato-00">nyagato-00</a>
      </nav>
      {children}
    </div>
  )
}