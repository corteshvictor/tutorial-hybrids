import { html, define } from "https://unpkg.com/hybrids@4.2.1/src";

const HelloWorld = {
  render: () => html`<h1>Hello World!</h1>`,
};

define("hello-world", HelloWorld);
