"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


const Home = () => {

    const router = useRouter();


    return (
        <div>
            <h1> Hello Worldcito</h1>

            <Link href="/laotra">Si pinchas aquí te lleva a la otra</Link> 

            <p onClick={() => { router.push("/laotra") }}>Si pinchas aqui te lleva a la otra con lógica</p>

            <p onClick={() => {router.replace("/laotra")}}>Si pinchas aquí te lleva a la otra sin historial</p>

        </div>
    );
}

export default Home