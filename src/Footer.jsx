import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const locations = [
    {
      city: "Overland Park",
      address: "6936 W 135th St, Overland Park, KS 66223",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeecafekc@gmail.com",
      phone: "(913) 242-7892",
    },
    {
      city: "Downtown Kansas City",
      address: "1111 Main St Ste 165, Kansas City, MO 64106",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeecafedowntownkc@gmail.com",
      phone: "(913) 991-6242",
    },
    {
      city: "Lee's Summit",
      address: "880 NW Blue Pkwy, Lee’s Summit, MO 64086",
      storeHours: "Open Daily, 10:30AM-9PM",
      email: "fatbeeleessummit@gmail.com",
      phone: "(214) 622-1851",
    },
    {
      city: "Strongsville, Ohio",
      address: "14405 Pearl Rd, Strongsville, OH 44136",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeecafeohiocleveland@gmail.com",
      phone: "(440) 268-6252",
    },
    {
      city: "Colorado Springs",
      address: "3230 Centennial Blvd, Colorado Springs, CO 80907",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeecafecoloradollc@gmail.com",
      phone: "(719) 471-4187",
    },
    {
      city: "Chouteau, Missouri",
      address: "4307 Chouteau Trafficway, Kansas City, MO 64117",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeenorthkc@gmail.com",
      phone: "+1 816-997-9033",
    },
    {
      city: "Gardner, Kansas",
      address: "Moonlight Shopping Center 800 E Main St, Gardner, KS 66030",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeecafegardnerks@gmail.com",
      phone: "+1 913-605-1104",
    },
    {
      city: "Shawnee Mission",
      address: "13223 Shawnee Mission Pkwy, Shawnee, KS 66216",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeeshawnee@gmail.com",
      phone: "+1 913-318-0679",
    },
    {
      city: "Everett, Washington",
      address: "1523 132ND ST SE STE B-2, Everett, WA",
      storeHours: "Open Daily, 11AM-9PM",
      email: "fatbeeverett@gmail.com",
      phone: "+1 (425) 225-5799",
    },
  ];

  return (
    <footer className="bg-[#f6dbbf] border-t-3 border-t-[#4b2b1c] text-[#4b2b1c] py-12 mt-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {locations.map((location, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg">{location.city}</h3>
              <p><span className="font-semibold">Address:</span> {location.address}</p>
              <p><span className="font-semibold">Store Hours:</span> {location.storeHours}</p>
              <p><span className="font-semibold">Gmail:</span> {location.email}</p>
              <p><span className="font-semibold">Tel:</span> {location.phone}</p>
              <div className="flex gap-4 mt-3">
                <FaFacebookF className="text-xl cursor-pointer" />
                <FaInstagram className="text-xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
