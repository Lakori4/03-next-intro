import Link from "next/link";
import { useRouter } from "next/navigation";

const laotra = () => {

    const router = useRouter();
    return (
        <div>
            <Link href="/laotra/unbesoyunaflor">Este te lleva a una ruta dinámica</Link>
            <h1>Esto es la otra página</h1>
            <button  onClick={() => { router.back() }}>Pa atras</button>
            <Link href="/">Te lleva a la jome de nuevo</Link>
        </div>
    )
}

export default laotra
