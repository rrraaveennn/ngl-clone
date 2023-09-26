import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/libs/db";

interface Session {
    session: {
        user: {
            id: string;
        },
        expires: string;
    }
}


//session return null
async function GET(req: NextRequest, ) {
    try {
        //url query test
        const user = req.nextUrl.searchParams.get("user") as string;

        console.log("current user: ", user)

        const messages = await prisma.inbox.findUnique({
            where: {
                userId: user
            },
            include: {
                Messages: true
            }
        });

        return NextResponse.json({
            messages
        }, {
            status: 202
        });
    } catch (error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}

//create new message
async function POST(req: NextRequest) {
    try {
        const { body, authorId, toUsername } = await req.json();

        if (!body || !authorId || !toUsername) {
            NextResponse.json({
                error: {
                    message: "Invalid request"
                }
            }, {
                status: 400
            });
        }

        const receiver = await prisma.user.findUnique({
            where: {
                username: toUsername
            },
            include: {
                Inbox: true
            }
        });


        const data = await prisma.message.create({
            data: {
                body,
                Author: {
                    connect: {
                        id: authorId
                    }
                },
                Inbox: {
                    connect: {
                        id: receiver?.Inbox?.id
                    }
                }
            }
        });

        return NextResponse.json({
            ...data
        }, {
            status: 201
        });
    } catch (error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}

export { GET, POST };