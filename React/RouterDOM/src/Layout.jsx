import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
    return (
        <>
            <Header />

            <main className="min-h-screen pt-48">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Layout;