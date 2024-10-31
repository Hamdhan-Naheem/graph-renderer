"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function redirectToDashboard(formData: FormData) {
  // CODE FOR TASK 2.4 -----------------------------------------
  const name = formData.get("name") as string;

  if (!name || name.trim() === "") {
    return "Hey, your name is missing!";
  }

  const cleanedName = name.trim().toLowerCase().trim();

  cookies().set("gr-name", cleanedName);

  redirect("/dashboard");
  // END OF CODE FOR TASK 2.4 ----------------------------------
}
