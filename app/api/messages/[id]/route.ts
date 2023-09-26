import { NextRequest, NextResponse } from "next/server";
import client from "@/db";

interface Params {
    params: {
        id: string;
    }
}

async function GET(req: NextRequest, {params: {id}}: Params) {
    try {
        const data = await client.message.findUnique({
            where: {
                id
            }
        });

        if (!data) {
            return NextResponse.json({
                error: {
                    message: "Message not found."
                }
            }, {
                status: 404
            });
        }

        return NextResponse.json({
            ...data
        }, {
            status: 200
        });
    } catch(error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}

export { GET };