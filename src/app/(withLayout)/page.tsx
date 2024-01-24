import AutismSpectrumDisorder from "@/Components/HomeComponents/AutismSpectrumDisorder";
import Banner from "@/Components/HomeComponents/Banner";
import Curriculum from "@/Components/HomeComponents/Curriculum";
import Service from "@/Components/HomeComponents/Service";
import Partner_Organization from "@/Components/HomeComponents/Partner_Organization";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Partner_Organization></Partner_Organization>
            <Curriculum></Curriculum>
            <AutismSpectrumDisorder></AutismSpectrumDisorder>
        </div>
    );
};

export default Home;