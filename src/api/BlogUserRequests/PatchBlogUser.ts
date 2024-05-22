import { UserInfo } from "../../Components/Types/interfaces";
import { supabase } from "../supabase-requests";
import Swal from "sweetalert2";

export const updateUserInfoInDB = async (user: UserInfo) => {
  const { user_id, firstName, lastName, email, phone } = user;
  const { data, error } = await supabase
    .from("UserInfo")
    .update({
      firstName,
      lastName,
      email,
      phone,
    })
    .eq("user_id", user_id)
    .select();
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to update user",
    });
    return;
  }
  return data;
};
