import { connectDB } from "@/lib/db";
import { User } from "@/models/users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
connectDB()

export async function GET(request) {
    let users = [];
    try {
        users = await User.find().select("-password");
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Couldn't find",
            success: false,
        })
    }
    return NextResponse.json(users)
}

export async function POST(request) {
    const { username, email, password, profileURL } = await request.json();
    const user = new User({
        username,
        email,
        password,
        profileURL
    })
    try {
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT))
        const createdUser = await user.save()
        const response = NextResponse.json(user, { status: 201 });
        return response
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Couldn't create", success: false, })
    }
}