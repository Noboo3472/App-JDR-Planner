// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> {/* ✅ Le contenu de la page actuelle s'affiche ici */}
            </main>
        </div>
    );
}

export default Layout;