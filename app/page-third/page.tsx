"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import TheComponent from "../components/TheComponent";

export default function Page() {
    const {id} = useParams();

    return <>
    <div> My ID is : {id}

        <br></br>
      <Link href="\"> the next</Link>
      <br></br>

     <TheComponent></TheComponent>

    </div>
    </>
}