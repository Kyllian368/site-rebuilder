import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "color-scheme", content: "light" },
      { title: "Conciergerie Airbnb Toulouse | L'Intendant" },
      { name: "description", content: "L'Intendant, conciergerie toulousaine spécialisée en gestion locative courte durée. Maximisez vos revenus Airbnb avec notre expertise locale. Devis gratuit." },
      { name: "keywords", content: "gestion locative courte durée, conciergerie Toulouse, Airbnb, location saisonnière, yield management, gestion Airbnb Toulouse, conciergerie location courte durée" },
      { name: "author", content: "L'Intendant" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "L'Intendant Toulouse" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:title", content: "L'Intendant - Conciergerie Gestion Locative Courte Durée Toulouse" },
      { property: "og:description", content: "Conciergerie toulousaine spécialisée en gestion locative courte durée. Maximisez vos revenus Airbnb avec notre expertise locale." },
      { property: "og:image", content: "/__l5e/assets-v1/116d3a68-7dad-4992-8d99-e0fa2abc2d06/logo-big.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "L'Intendant - Conciergerie Gestion Locative Courte Durée Toulouse" },
      { name: "twitter:description", content: "Conciergerie toulousaine spécialisée en gestion locative courte durée. Maximisez vos revenus Airbnb." },
      { name: "twitter:image", content: "/__l5e/assets-v1/116d3a68-7dad-4992-8d99-e0fa2abc2d06/logo-big.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/c304b4f6-f6ff-4dc6-b32f-e2d3b86f5cb8/logo.png" },
      { rel: "apple-touch-icon", href: "/__l5e/assets-v1/c304b4f6-f6ff-4dc6-b32f-e2d3b86f5cb8/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "L'Intendant Toulouse",
          description: "Conciergerie toulousaine spécialisée en gestion locative courte durée (Airbnb, Booking). Maximisez vos revenus avec notre expertise locale.",
          url: "https://www.lintendantconciergerie-toulouse.fr",
          email: "contact@lintendantconciergerie-toulouse.fr",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toulouse",
            addressRegion: "Occitanie",
            addressCountry: "FR",
          },
          areaServed: [
            { "@type": "City", name: "Toulouse" },
            { "@type": "City", name: "Blagnac" },
            { "@type": "City", name: "Colomiers" },
            { "@type": "City", name: "Balma" },
            { "@type": "City", name: "Ramonville-Saint-Agne" },
          ],
          priceRange: "€€",
          knowsAbout: [
            "Conciergerie Airbnb",
            "Location courte durée",
            "Gestion locative saisonnière",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
