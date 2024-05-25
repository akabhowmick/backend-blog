import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../Home/Home";
import { Account } from "../Account/Account";
import { PostFeed } from "../Posts/PostFeed/PostFeed";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { SignIn } from "../Signin/SignIn";
import { Pricing } from "../Pricing/Pricing";

export function Routes() {
  console.log("Routes");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/feed" element={<PostFeed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="*" element={<PageNotFound />} />

      </Route>
    )
  );
  return router;
}
