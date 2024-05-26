"use server";

import { cookies } from "next/headers";
import { mySuperSecretCookieValue, mySuperSecretKey } from "./constant";
import { revalidatePath } from "next/cache";

export async function getCookie() {
  return cookies().get(mySuperSecretKey)?.value;
}

export async function setCookie() {
  cookies().set(mySuperSecretKey, mySuperSecretCookieValue);
}

export async function deleteCookie() {
  cookies().delete(mySuperSecretKey);
}
