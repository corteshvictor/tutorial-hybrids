import { html, define } from "https://unpkg.com/hybrids@4.2.1/src";
import style from "./simple-counter-style.js";

const increaseCount = (host) => {
  host.count += 1;
};

// const style = html`<style>
//   button {
//     background-color: #33bdef;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 20px;
//     font-weight: bold;
//     padding: 10px 20px;
//   }
// </style> `;

const SimpleCounter = {
  count: 0,
  render: ({ count }) =>
    html`${style}
      <button onclick="${increaseCount}">Count: ${count}</button> `,
};

define("simple-counter", SimpleCounter);
