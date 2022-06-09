import { Outlet } from "@remix-run/react";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="My beautiful React app" />

        <title>My React App</title>
      </head>
      <body>
        <div id="root">
          <Outlet />
        </div>
      </body>
    </html>
  );
}
