import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../Home/Home";
import { Account } from "../Account/Account";
import { PostFeed } from "../Posts/PostFeed/PostFeed";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { SignIn } from "../Signin/SignIn";
import { Pricing } from "../Pricing/Pricing";
import { About } from "../About/About";
import UserPost from "../Posts/AddPost/AddPost";

//! to be changed later
export function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/feed" element={<PostFeed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/userpost" element={<UserPost />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return router;
}
