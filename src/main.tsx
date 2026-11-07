import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const el = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);

// Prerendered pages hydrate; the dev server (empty root) renders from scratch.
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);
