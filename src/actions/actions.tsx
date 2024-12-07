"use server"

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


  
  export async function createPost(formData) {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }
  
    // Access the properties directly instead of using `get()`
    const { title, body } = formData;
  
    await prisma.post.create({
      data: {
        title,
        body
      }
    });
  }
  