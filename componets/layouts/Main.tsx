import Head from "next/head";
import NavBar from "../NavBar";

const Main = ({children, router, tittle })=>{
    return(
    <div>
        <div>This is the main</div>
        <NavBar />
        <main>
            {children}
        </main>
    </div>
    )
}

export default Main;