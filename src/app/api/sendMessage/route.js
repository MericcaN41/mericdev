import { NextRequest, NextResponse } from "next/server"

/**
 * 
 * @param {NextRequest} req 
 * @returns 
 */
export async function POST(req) {
    const body = await req.formData()

    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "Yeni Mesaj",
                    color: 0xf5a142,
                    fields: [
                        {
                            name: "E-Posta",
                            value: body.get("email"),
                        },
                        {
                            name: "İsim",
                            value: body.get("name"),
                        },
                        {
                            name: "Mesaj",
                            value: body.get("message"),
                        },
                    ]
                }
            ]
        })
    })

    return NextResponse.json({ message: "ok" }, { status: 200 })
}