import TheComponent from "./components/TheComponent";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1> this is the <b>heading</b> for this page. </h1>
        <p>whats up? </p>


        <nav>
          <Link href="/page-one">The First Page</Link>
          <br></br>
          <Link href="/page-two">The Second Page</Link>
        </nav>
  
  <TheComponent></TheComponent>
  </>
   );
}
