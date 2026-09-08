"use client";

import HomeNav from "@/app/components/HomeNav";


import Link from "next/link";
import { useParams } from "next/navigation";
export default function TheDynam(){
    const {id} = useParams();
   
       return <>
       <div> My ID is : {id} </div>

    

       </>
}

