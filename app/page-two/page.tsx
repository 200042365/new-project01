"use client";

import { useParams } from "next/navigation";
import TheComponent from "../components/TheComponent";
import Link from "next/link";

interface Props {
    params: { id: string};
}


export default function PageTwo({params}: Props) {
    const {id} = useParams ();
    return <>
    <h1>
        this is the <i>second</i> page of many pages
    </h1>
    <br></br>
    <h3> what is this {params.id}</h3>

    <nav>
        <Link href="/"> HOME </Link>
        <br></br>
        <Link href="/page-one"> THE first one</Link>
        <br></br>
   
    </nav>


    <TheComponent></TheComponent>
    </>
}