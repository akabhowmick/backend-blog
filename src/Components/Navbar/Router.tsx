import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Navbar />} />)
  );
  return router;
}
