import { renderToString } from "react-dom/server";
import { App } from "./App";
import { allRoutes } from "./routes";
import { headFor } from "./head";
import { SITE_URL } from "./content/en";

export { allRoutes, headFor, SITE_URL };

export function render(path: string): string {
  return renderToString(<App path={path} />);
}
