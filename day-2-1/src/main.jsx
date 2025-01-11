import { createRoot } from 'react-dom/client'
import './index.css'
import { Fragment } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const root = createRoot(document.getElementById('root'))

root.render(
    <Page />
)

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}