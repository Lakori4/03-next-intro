"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const theother = () => {

    const router = useRouter();
    return (
        <div>
            <Link href="/theother/1">This link will redirect you to a dynamic route</Link>
            <h1>You are now in the other page</h1>
            <button  onClick={() => { router.back() }}>Go back</button>
            <Link href="/">Route you to the home</Link>
        </div>
    )
}

export default theother
