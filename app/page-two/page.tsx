"use client";

import TheComponent from "../components/TheComponent";
import Link from "next/link";


export default function PageTwo() {

    return <>
    <h1>
        this is the <i>second</i> page of many pages
    </h1>
    <br></br>

    <nav>
        <Link href="/"> HOME </Link>
        <br></br>
        <Link href="/page-one"> THE first one</Link>
        <br></br>
   
    </nav>
    <TheComponent></TheComponent>
    </>
}