import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if(!user || user === null || !user.id) {
        throw new Error('Error authenticating new user');
    }

    let dbUser = await prisma.user.findUnique({
        where: { id: user.id }
    });

    if(!dbUser){ 
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                email: user.email!,
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                profileImage: `https://avatar.vercel.sh/${user.email}`,                                
            },
        })
    }

    return NextResponse.redirect(`${process.env.BASE_URL}`)
}