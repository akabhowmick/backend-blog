import "./App.css";
import { RouterProvider } from "react-router-dom";

// sections or components
import { Footer } from "./Components/Footer/Footer";
// import { Cart } from "./Pages/Cart/Cart";
import { AuthProvider } from "./providers/AuthProvider";
import { Routes } from "./Components/Navbar/Router";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={Routes()} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
