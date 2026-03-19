'use client';

import getCharacterbyId from "@/lib/character";
import { Character } from "@/types";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const TheOtherWithId = () => {

    const { id } = useParams()


    const [char, setChar] = useState<Character|null>(null)
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getCharacterbyId(Number(id)).then((res) => {
            setChar(res);
        }).catch((e: AxiosError) => {setError(e.message)}
        ).finally(() => { setLoading(false) })

    }, [id])

    return (
        <div>
            <h1>The other with ID and that id is {id}</h1>
            {!char && loading && <h1>Loading...</h1>}
            {char &&
            (<>
                <img src={char.image}/>
                <h2>{char.name}</h2>
            </>)}
            {error && <h2>{error}</h2>}
        </div>
    )
};

export default TheOtherWithId;