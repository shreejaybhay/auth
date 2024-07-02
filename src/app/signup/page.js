"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const router = useRouter()
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        profileURL: 'https://static.vecteezy.com/system/resources/previews/020/911/747/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
    })

    const doSignup = async (e) => {
        e.preventDefault()
        console.log(data)

        if (data.username.trim() === "" || data.username === null) {
            toast.warning("Please enter a username", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        else if (data.email.trim() === "" || data.email === null) {
            toast.warning("Please enter a email", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        else if (data.password.trim() === "" || data.password === null) {
            toast.warning("Please enter a password", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

        try {
            const result = await signUp(data);
            toast.success("User is registered !!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setData({
                username: '',
                email: '',
                password: '',
                profileURL: 'https://static.vecteezy.com/system/resources/previews/020/911/747/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
            })
            resetForm();
            router.push('/login')
        } catch (error) {
            console.log(error);
            toast.error("Signup Error !!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }
    const resetForm = () => {
        setData({
            username: '',
            email: '',
            password: '',
            profileURL: 'https://static.vecteezy.com/system/resources/previews/020/911/747/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
        })
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-60px)] bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-white">Sign Up</h2>
                <form onSubmit={doSignup}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-300" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-200 bg-gray-900 border border-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={data.username}
                            onChange={(e) => setData({ ...data, username: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-200 bg-gray-900 border border-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-300" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-200 bg-gray-900 border border-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full gap-2">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <p >Already have an account? <a href="/login" className='text-blue-500'>Login here!</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUpPage;
