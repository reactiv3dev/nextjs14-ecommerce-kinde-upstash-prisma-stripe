"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { productSchema, productSchemaType } from "../lib/zodSchemas";
import prisma from "../lib/db";

export async function createProduct(data: productSchemaType){
    "use server"
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    if(!user || user.email != 'nikolareactivedev@gmail.com'){
        redirect('/');
    }

    const result = productSchema.safeParse(data);
    if(!result.success){
        console.log(result.error); 
        redirect('/');
    }
    if(result.data){
        await prisma.product.create({
            data: result.data
        })
    }
    redirect('/dashboard/products')
}