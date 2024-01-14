import Header from "./header";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-row py-12 mx-20">
        <div className="lg:w-1/2">
          <div className="about-item">
            <h3 className="mb-5 text-3xl font-semibold">
              <span className="text-black">About Us </span>
            </h3>
            <h3 className="mb-5 text-2xl text-cyan-700 italic">
              Connecting Businesses to the World
            </h3>
            <p className="mb-0 text-lg lg:mb-4">
              Business Profile is a project of IITAB (International IT Association of Bangladesh)
              that is working to bring all the legal businesses out there into the spotlight.
              Our main goal is to introduce both the business and the business
              owner to every corner of Bangladesh and the entire world.
              From remote area businesses to urban giants, our journey aims
              to centralize them in a single place.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="img">
            <img
              className="w-[100%] object-cover"
              src="https://www.dhartek.com/images/about-us-banner.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row py-12 mx-20">
        <div className="lg:w-1/2">
          <div className="img">
            <img
              className=" w-[60%] object-cover"
              src="https://hybrid-hse.com/wp-content/uploads/2019/07/Mission.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="about-item">
            <h3 className="mb-5 text-3xl font-semibold">
              <span className="text-black">Our Mission</span>
            </h3>
            <h3 className="mb-5 text-2xl text-cyan-700 italic">
              Connecting Businesses to the World
            </h3>
            <p className="mb-0 text-lg lg:mb-4">
              Our mission is to empower individuals and businesses by providing
              innovative solutions that enhance their online presence and digital
              identity. We strive to deliver high-quality services that cater to
              the unique needs of our clients, fostering growth, and creating lasting value.
              Through a commitment to excellence and customer satisfaction,
              we aim to be a trusted partner in the journey of our clients'
              success in digital and business market.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-12 mx-20 ">
        <div className="lg:w-1/2 ">
          <div className="about-item">
            <h3 className="mb-5 text-3xl font-semibold">
              <span className="text-black">Our Vision</span>
            </h3>
            <h3 className="mb-5 text-2xl text-cyan-700 italic">
              Connecting Businesses to the World
            </h3>
            <p className="mb-0 text-lg lg:mb-4">
              Our vision is to be a leading force in shaping the
              digital landscape,setting new standards for online
              visibility and engagement of businessmento worldwide.
              We aspire to be recognized for our cutting-edge technologies,
              creative solutions, and unwavering dedication to customer
              success in business market.By continuously evolving and
              adapting to the dynamic digital environment, we aim tobe
              the go-to platform for individuals and businessesseeking
              to establish and elevatetheir digital footprint
              with confidenc in country to worldwide.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <div className="img">
            <img
              className="w-[100%] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsYwwA9AubhSOJXJSqIDyL6O6HNvyDffJJQ&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*Team management part */}
      <div className="about-item ">
        <h3 className="my-px py-12 text-center text-3xl font-bold ">
          Our Management Team
        </h3>
      </div>
      {/*image add part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-44 lg:w-[1200px] mx-auto">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg 
      shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#" >
            <img className="object-cover w-full rounded-t-lg"
              src="https://businesseprofile.com/assets/about/ourTeam/management/K.K.Uddin%20Soikot.png"
              alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kazi Kutub Uddin Soikot </h5>
            </a>
            <p className="mb-3 font-bold text-blue-700 dark:text-blue-400">Chief Executive Engineer</p>
            {/*logo add part */}
            <div className="md:flex gap-4">
              <div className="flex gap-14">
                <div className="w-8 h-8 p-2  bg-black rounded-md">
                  <Link href={""} size-max style={{ color: "white" }}> <FaFacebook /> </Link>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                  <Link href={""} size-max style={{ color: "white" }}> <FaTwitter /> </Link>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                  <Link href={""} size-max style={{ color: "white" }}> <FaLinkedin /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*image add part */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg 
           shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="object-cover w-full rounded-t-lg"
              src="https://businesseprofile.com/assets/about/ourTeam/management/H.M.N.C%20Rana.png"
              alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">H.M.N.C Rana </h5>
            </a>
            <p className="mb-3 font-bold text-blue-700 dark:text-blue-400">Director (B.D)</p>
            {/*logo add part */}
            <div className="md:flex gap-4">
              <div className="flex gap-14">
                <div className="w-8 h-8 p-2  bg-black rounded-md">
                  <Link href={""} size-max style={{ color: "white" }}> <FaFacebook /> </Link>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                  <Link href={""} size-max style={{ color: "white" }}> <FaTwitter /> </Link>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                  <Link href={""} size-max style={{ color: "white" }}> <FaLinkedin /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*image add part */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg 
      shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="object-cover w-full rounded-t-lg"
              src="https://businesseprofile.com/assets/about/ourTeam/management/Md.Forhad.png"
              alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Md. Forhad Hossain</h5>
            </a>
            <p className="mb-3 font-bold text-blue-700 dark:text-blue-400">Admin & Logistic</p>
            {/*logo add part */}
            <div className="md:flex gap-4">
              <div className="flex gap-14">
                <div className="w-8 h-8 p-2  bg-black rounded-md">
                  <Link href={""} size-max style={{ color: "white" }}> <FaFacebook /> </Link>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                  <Link href={""} size-max style={{ color: "white" }}> <FaTwitter /> </Link>
                </div>
                <div className="w-8 h-8 p-2  bg-black rounded-full">
                  <Link href={""} size-max style={{ color: "white" }}> <FaLinkedin /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
