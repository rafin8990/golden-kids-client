import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import About from "./about/page";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <About></About>

            <Navbar></Navbar>

            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;