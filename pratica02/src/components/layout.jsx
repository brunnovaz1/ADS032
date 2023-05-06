import { Outlet } from 'react-router-dom'
import '../components/layout.css'
import Navbar from './navbar'

export default function Layout(){
    return(
        <>
        <header>
            <h1>@Contatinhos</h1>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>Copyright 2023</p>
        </footer>
        </>
    )
}