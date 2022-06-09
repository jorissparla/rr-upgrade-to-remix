import {
  Link
} from "/build/_shared/chunk-54YQMGHY.js";
import {
  Outlet,
  Route,
  Routes
} from "/build/_shared/chunk-DP2VKCTI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-KDLP5LGO.js";

// browser-route-module:C:\Users\jsparla\apps\dashtest\app\routes\$.tsx?browser
init_react();

// app/routes/$.tsx
init_react();

// app/old-app/App.tsx
init_react();
function About() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "About us"));
}
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Home"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/"
  }, "Home"), " ", "| ", /* @__PURE__ */ React.createElement(Link, {
    to: "about"
  }, "About")), /* @__PURE__ */ React.createElement(Outlet, null));
}
function Default() {
  return /* @__PURE__ */ React.createElement("h1", null, "default");
}
function NotFound() {
  return /* @__PURE__ */ React.createElement("h1", null, "404");
}
function App() {
  return /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Home, null)
  }, /* @__PURE__ */ React.createElement(Route, {
    index: true,
    element: /* @__PURE__ */ React.createElement(Default, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "about",
    element: /* @__PURE__ */ React.createElement(About, null)
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React.createElement(NotFound, null)
  }));
}
export {
  App as default
};
//# sourceMappingURL=/build/routes/$-7LEYWQSD.js.map
