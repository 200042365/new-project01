import Link from "next/link";
import TheComponent from "../components/TheComponent";

export default function PageOne() {
    return <>
    <h1> this is the <i>first</i>  page of many pages </h1>


    <nav>
        <Link href="/"> HOME </Link>
        <p></p>
        <Link href="/page-two"> THE second page</Link>
        <br></br>
        <Link href="/page-third/{id}"> the dynamic page</Link>
    </nav>


    <TheComponent></TheComponent>
    </>
}