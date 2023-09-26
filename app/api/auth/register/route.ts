import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body) {
            return NextResponse.json({
                error: {
                    message: "Invalid request."
                }
            }, {
                status: 400
            });
        }

        const isExist = await prisma.user.findUnique({
            where: {
                username: body.username.toLowerCase()
            }
        });

        console.log("exist: ", isExist)

        if (isExist) {
            // return NextResponse.json({
            //     error: {
            //         message: "Username already exist."
            //     }
            // }, {
            //     status: 400
            // });
            throw new Error("Invalid username.")
        }

        const user = await prisma.user.create({
            data: {
                username: body.username,
                role: "user",
                Inbox: {
                    create: {}
                }
            }
        });

        console.log("new user: ", user)

        return NextResponse.json({
            ...user
        }, {
            status: 201
        });
    } catch (error) {
        return NextResponse.json({
            error: {
                error
            }
        }, {
            status: 500
        });
    }
}