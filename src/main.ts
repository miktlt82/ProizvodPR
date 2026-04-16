import "./styles.css";
import { createApp } from "./app";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("App root was not found.");
}

createApp(root);
