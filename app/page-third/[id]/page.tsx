"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
export default function TheDynam(){
    const {id} = useParams();
   
       return <>
       <div> My ID is : {id} </div>

        <Link href="\"> HOME</Link>

       <br></br>

       <Link href="/page-two"> page 2</Link>

       </>

}