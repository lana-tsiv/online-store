import {Outlet} from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import './../styles/Layout.css'

const Layout = () => {
    return (
        <div className='layout'>
            <Header/>

            <main className='main'>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};

export default Layout;