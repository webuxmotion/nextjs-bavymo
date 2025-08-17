import { NextResponse } from "next/server";
import { generateCode, saveCodeToDb } from "@/lib/personalCode";

export async function GET() {
    const code = generateCode();
    await saveCodeToDb(code);

    const url = process.env.NEXT_PUBLIC_BASE_URL!;

    const response = NextResponse.redirect(url);
    response.cookies.set({
        name: "personalCode",
        value: code,
        path: "/",
        maxAge: 5, // 5 seconds
    });

    return response;
}