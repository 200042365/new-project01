"use client";

import style from "./page.module.css";
import {useParams} from "next/navigation";
import { title } from "process";
import {useEffect, useState} from "react";

interface reactions{
    likes: number;
    dislikes: number;
}

interface Posts{
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: reactions;
    views: number;
    userId: number;
}


export default function Page() {
    
    const {id} = useParams();
    const [posts, setPosts] = useState<Posts | undefined>(undefined);

    function onJson(data: Posts) {
        setPosts(data);
    }

    function onFetch(response: Response){
        response.json().then(onJson);
    }

    function onLoad() {
        console.log("onLoad Executed");

        fetch(`https://dummyjson.com/posts/${id}`).then(onFetch);
    }

    useEffect(onLoad, []);

    return <>
    
    
    <div className={style.h1}> 
        {JSON.stringify(posts)};
        
    </div>

    </>

    



}