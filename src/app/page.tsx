"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


const Home = () => {

    const router = useRouter();


    return (
        <div>
            <h1> Hello Worldo</h1>

            <Link href="/theother">If you click here it will get you to the other</Link> 

            <p style={{cursor:"pointer"}} onClick={() => { router.push("/theother") }}>This will do the same but with logic</p>

            <p style={{cursor:"pointer"}} onClick={() => {router.replace("/theother")}}>This will do exactly the same but without a history entry</p>

        </div>
    );
}

export default Home