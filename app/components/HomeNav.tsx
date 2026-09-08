import Link from "next/link";

interface Props {
    nextText: string,
    nextLink: string
}

export default function HomeNav({nextText, nextLink}: Props) {

    return <>
     
     <Link href="/"> HOME</Link>
     <Link href={nextLink}>{nextText}</Link>

    </>

}