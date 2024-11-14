
import React from 'react';

const Footer = () => {
  return (
    <div className="my-5">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white bg-gray-900">
        {/* Section: Social media */}
        <section className="flex justify-between items-center p-4 bg-gray-700">
          <div className="mr-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="py-8">
          <div className="container mx-auto text-center md:text-left">
            <div className="flex flex-wrap">
              {/* Company Name */}
              <div className="w-full md:w-1/4 lg:w-1/3 mb-8 md:mb-0">
                <h6 className="uppercase font-semibold  hover:text-yellow-500 hover:underline">Company name</h6>
                <hr className="w-12 my-4 border-t-2 border-yellow-500" />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              {/* Products */}
              <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
                <h6 className="uppercase font-semibold  hover:text-yellow-500 hover:underline">Products</h6>
                <hr className="w-12 my-4 border-t-2 border-yellow-500" />
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline ">MDBootstrap</a></p>
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline">MDWordPress</a></p>
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline">BrandFlow</a></p>
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline">Bootstrap Angular</a></p>
              </div>

              {/* Useful Links */}
              <div className="w-full md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
                <h6 className="uppercase font-semibold block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  ">Useful links</h6>
                <hr className="w-12 my-4 border-t-2 border-yellow-500" />
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline transition duration-500 ease-in-out">Your Account</a></p>
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline">Become an Affiliate</a></p>
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline">Shipping Rates</a></p>
                <p><a href="#!" className="text-white hover:text-yellow-500 hover:underline">Help</a></p>
              </div>

              {/* Contact */}
              <div className="w-full md:w-1/4 lg:w-1/3">
                <h6 className="uppercase font-semibold  hover:text-yellow-500 hover:underline">Contact</h6>
                <hr className="w-12 my-4 border-t-2 border-yellow-500" />
                <p><i className="fas fa-home mr-2"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-2"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-2"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-2"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-3 bg-yellow-500">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/" className="text-white hover:underline">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* End of Footer */}
    </div>
  );
};

export default Footer;
