import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      This comes from a third package:
      <Button />

      <h2>access other projects</h2>
      This PR introduces a way to access the other projects PR
      <a href={process.env.DOCS_URL}>Read the docs</a>
    </div>
  );
}
