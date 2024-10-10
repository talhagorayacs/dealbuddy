import React ,{useState}from "react";
import SlickSlider from "react-slick";
import commas from '../assets/commas.svg';
import dealbuddy from '../assets/dealbuddy.svg';
import eye from '../assets/eye.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import LoaderComponent from "./LoaderComponent";

const sliderImages = [
  "https://images.pexels.com/photos/17187205/pexels-photo-17187205/free-photo-of-airplane-in-a-purple-sky-with-clouds.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/20693395/pexels-photo-20693395/free-photo-of-star-shaped-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/16655128/pexels-photo-16655128/free-photo-of-positano-wedding-photographer.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
];

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false); // Explicitly type the state
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // appendDots: (dots: React.ReactNode) => (
    //   <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', gap: '5px' }}>
    //     <ul style={{ margin: "0px", display: 'flex', gap: '5px' }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: () => (  // Changed from (i: number) to ()
    //   <div
    //     style={{
    //       width: "30px", // Width of the line
    //       height: "4px", // Height of the line
    //       backgroundColor: "white", // Color of the line
    //       borderRadius: "2px", // Rounded edges for the line
    //       cursor: "pointer", // Pointer cursor on hover
    //       opacity: 0.5, // Opacity of the line
    //     }}
    //   ></div>
    // ),
  };
  const signIn = (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-custom-gradient">
            <LoaderComponent isLoading={isLoading} />

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-[72rem] h-auto md:h-[48rem]">
        {/* Left Section - Image */}
        <div className="hidden md:block w-full md:w-1/2 relative overflow-hidden">
          <img src={dealbuddy} alt="First Icon" className="absolute top-10 left-10 z-10" />
          <SlickSlider {...settings} className="h-full relative">
            {sliderImages.map((image, index) => (
              <div key={index} className="h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-l-lg"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            ))}
          </SlickSlider>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-48 left-10 text-white">
            <img src={commas} alt="Second Icon" className="mr-1" />
            <div className="text-[#ffffff80] text-lg mt-2 ml-4 flex flex-col items-center">
              <p className="text-center">
                Streamline your real estate transactions from start to
              </p>
              <p className="text-center">finish.</p>
            </div>
          </div>
        </div>

        {/* Right Section - sign up Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-[18px] font-medium text-[#405189] mb-1 font-poppins">Create Your Account
          </h2>
          <p className="text-gray-500 mb-6 font-poppins">Sign up to continue to Deal Buddy.</p>

          <form className="flex flex-col space-y-4 "onSubmit={signIn}>
            <div>
              {/* name */}
              <label className="text-[16px] font-normal font-poppins">Name</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
              />
            </div>
{/* email */}
<label className="text-[16px] font-normal font-poppins">Name</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
              />

{/* password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[16px] font-normal font-poppins">Password</label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
                />
                <button type="button" className="absolute right-3 top-3 text-gray-500">
                  <img src={eye} alt="Toggle visibility" className="mt-1 w-5 h-5" />
                </button>
              </div>
            </div>
{/* confirm  password */}


<div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[16px] font-normal font-poppins">Confirm Password</label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
                />
                <button type="button" className="absolute right-3 top-3 text-gray-500">
                  <img src={eye} alt="Toggle visibility" className="mt-1 w-5 h-5" />
                </button>
              </div>
            </div>


            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-poppins">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
            </div>

            <button
              type="submit"
              className="bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center justify-center mt-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-[16px]">Sign In with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="bg-blue-800 text-white py-3 rounded-lg mt-4 hover:bg-blue-900 transition duration-200">
            Google
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default SignIn;
