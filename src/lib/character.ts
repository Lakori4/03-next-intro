import { Character } from "@/types"
import { api } from "./api"

const getCharacterbyId = async (id: number) => {
    const response = await api.get<Character>(`/character/${id}`)
    return response.data
}

export default getCharacterbyId;