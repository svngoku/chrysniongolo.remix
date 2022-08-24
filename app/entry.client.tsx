import * as React from "react";
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { ClientProvider } from "@mantine/remix";

function hydrate() {
  React.startTransition(() => {
    hydrateRoot(
      document,
      <ClientProvider>
        <RemixBrowser />
      </ClientProvider>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
