import { User } from "@supabase/supabase-js";
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import Swal from "sweetalert2";
import { UserSignIn } from "../Components/Types/interfaces";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userLoading: boolean;
  signUpUser: (user: UserSignIn) => Promise<void>;
  signInUser: (user: UserSignIn) => Promise<void>;
  editUserLogin: (email: string, password: string) => Promise<void>;
  logOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
      setUserLoading(false);
      setLoggedIn(true);
    }
  };

  const logOutUser = async () => {
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("user");
    // const { error } = await signOutUserSupabase();
    // if (!error) {
    //   setUser(null);
    //   setLoggedIn(false);
    //   localStorage.removeItem("user");
    // }
  };

  const signUpUser = async (userInfo: UserSignIn) => {
    Swal.fire("Sign up success!", `Invalid credentials ${userInfo}`, "info");
    // const { data, error } = await signUpUserSupabase(userInfo.email, userInfo.password);
    // if (error) {
    //   Swal.fire("Sign up error!", `Invalid credentials: ${error.message}`, "error");
    // }
    // if (data.user) {
    //   setLocalStorage(data.user);
    //   setUser(data.user);
    //   Swal.fire("Sign up success!", "Please verify your account to proceed", "info");
    //   return data!.user?.id;
    // }
  };

  const signInUser = async (userInfo: UserSignIn) => {
    Swal.fire("Sign in error!", `Invalid credentials ${userInfo}`, "error");
    // const { data, error } = await signInUserSupabase(userInfo.email, userInfo.password);
    // if (data.user) {
    //   setLocalStorage(data.user);
    //   return true;
    // } else {
    //   Swal.fire("Sign in error!", `Invalid credentials: ${error?.message}`, "error");
    //   return false;
    // }
  };

  const editUserLogin = async (email: string, password: string) => {
    Swal.fire(
      "Login updated!",
      `The user credentials edit was successful! ${email} ${password}`,
      "success"
    );
    // const { data, error } = await updateUserSupabase(email, password);
    // if (data.user) {
    //   setLocalStorage(data.user);
    //   Swal.fire("Login updated!", "The user credentials edit was successful!", "success");
    // }
    // if (error) {
    //   Swal.fire("Update error!", `Update Error: ${error.message}`, "error");
    // }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userLoading,
        loggedIn,
        setLoggedIn,
        signUpUser,
        signInUser,
        editUserLogin,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
