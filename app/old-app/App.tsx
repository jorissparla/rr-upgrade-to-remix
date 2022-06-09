// import { BrowserRouter, Link, Outlet, Route, Routes } from "remix";

import { Link, Outlet } from "@remix-run/react";
import { Route, Routes } from "react-router-dom";

function About() {
  console.log("prefetching");
  return (
    <main>
      <h1>About us</h1>
    </main>
  );
}
function Bla() {
  console.log("prefetchin bla");
  return (
    <main>
      <h1>
        Deserunt reprehenderit do sint nisi eu tempor ad aliqua proident ipsum ipsum exercitation consectetur. Elit eu culpa proident minim do aute id
        tempor do ipsum dolore tempor eu elit. Exercitation et cupidatat nulla sit ad cillum. Id fugiat culpa tempor laboris enim quis. Dolore eiusmod
        id labore anim laboris aliqua enim.
      </h1>
    </main>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link prefetch="intent" to="/">
          Home
        </Link>{" "}
        <Link prefetch="intent" to="bla">
          Bla
        </Link>{" "}
        |{" "}
        <Link prefetch="intent" to="about">
          About
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
function Default() {
  return <h1>default</h1>;
}
function NotFound() {
  return <h1>404</h1>;
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Default />} />
        <Route path="about" element={<About />} />
        <Route path="bla" element={<Bla />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
