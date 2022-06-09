import {
  BrowserRouter,
  Link,
  Outlet,
  React,
  Route,
  Routes,
  init_react
} from "/build/_shared/chunk-H6VYCVFQ.js";

// browser-route-module:C:\Users\jsparla\apps\dashtest\app\routes\$.tsx?browser
init_react();

// app/routes/$.tsx
init_react();

// app/old-app/app.tsx
init_react();
function About() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "About us"));
}
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Home"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home"), " | ", /* @__PURE__ */ React.createElement(Link, {
    to: "about"
  }, "About")), /* @__PURE__ */ React.createElement(Outlet, null));
}
function App() {
  return /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Home, null)
  }, /* @__PURE__ */ React.createElement(Route, {
    index: true,
    element: /* @__PURE__ */ React.createElement("h1", null, "default")
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "about",
    element: /* @__PURE__ */ React.createElement(About, null)
  }))));
}
export {
  App as default
};
//# sourceMappingURL=/build/routes/$-FWTRTC4W.js.map
