import { NextResponse } from "next/server";
import { generateCode, saveCodeToDb } from "@/lib/personalCode";

export async function GET(req: Request) {
    const code = generateCode();
    await saveCodeToDb(code);

    // Build absolute URL based on request
    const url = new URL("/", req.url);

    const response = NextResponse.redirect(url);
    response.cookies.set({
        name: "personalCode",
        value: code,
        path: "/",
        maxAge: 5, // 5 seconds
    });

    return response;
}