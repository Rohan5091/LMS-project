import { SiMessenger, SiGoogleads,SiTwitter, SiInstagram } from 'react-icons/si';
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <div className="">
      {/* Footer */}
      <footer className="text-center  text-lg-start text-white bg-gray-900">
        {/* Section: Social media */}
        <section className="flex justify-between items-center p-4 bg-gray-700">
          <div className="mr-5 pl-10">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <i className="fab   hover:text-teal-400 fa-facebook-f"><  SiMessenger size={30}/></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab   hover:text-teal-400 fa-twitter">< SiTwitter size={30} /></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab   hover:text-teal-400 fa-google"><  SiGoogleads size={30} /></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab hover:text-teal-400 fa-instagram">< SiInstagram size={30} /></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab hover:text-teal-400 fa-linkedin"><ImLinkedin size={30} /></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab  hover:text-teal-400 fa-github">< FaGithubSquare size={30} /></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="py-8">
          <div className="container mx-auto text-center md:text-left">
            <div className="flex flex-wrap">
              {/* Company Name */}
              <div className="w-full md:w-1/4 lg:w-1/3 pl-10 pr-10 mb-8 md:mb-0">
                <h6 className="uppercase font-semibold  hover:text-teal-400 hover:underline ">Code-Scorer</h6>
                <hr className="w-12 my-4 border-t-2  border-teal-400" />
                <p className=" ">
                Ultimately, our goal is to uplift individuals and communities by emphasizing the transformative power of education. By enabling access to knowledge and creativity, we strive to contribute to the overall growth and well-being of humanity.
                </p>
              </div>

              {/* Products */}
              <div className="w-full md:w-1/4 lg:w-1/6   mb-8 md:mb-0">
                <h6 className="uppercase font-semibold  hover:text-teal-400 hover:underline">Products</h6>
                <hr className="w-12 my-4 border-t-2 border-teal-400" />
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline ">Frontend Development Course</a></p>
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline">Backed Development Course</a></p>
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline">FullStack Development Course</a></p>
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline">DSA Course with C++ </a></p>
              </div>

              {/* Useful Links */}
              <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
                <h6 className="uppercase font-semibold  hover:text-teal-400 hover:underline">Useful links</h6>
                <hr className="w-12 my-4 border-t-2 border-teal-400" />
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline transition duration-500 ease-in-out">Your Account</a></p>
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline">Become an Affiliate</a></p>
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline">Shipping Rates</a></p>
                <p><a href="#!" className="text-white hover:text-teal-400 hover:underline">Help</a></p>
              </div>

              {/* Contact */}
              <div className="w-full md:w-1/4 lg:w-1/3">
                <h6 className="uppercase font-semibold  hover:text-teal-400 hover:underline">Contact</h6>
                <hr className="w-12 my-4 border-t-2 border-teal-400" />
                <p><i className="fas fa-home mr-2"></i> Gwalior, Gole ka Mandir, 474005, (M.P.), India</p>
                <p><i className="fas fa-envelope mr-2"></i> CodeScorer@gmail.com</p>
                <p><i className="fas fa-phone mr-2"></i> Brajraz Mishra - +91-8418989493</p>
                <p><i className="fas fa-print mr-2"></i> Rohan Malakar - +91-9098905595</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-3 bg-teal-400">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/" className="text-white hover:underline">
            CodeScorer.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* End of Footer */}
    </div>
  );
};

export default Footer;
