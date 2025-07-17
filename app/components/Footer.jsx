import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#172337] text-white text-sm pt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
                {/* ABOUT */}
                <div>
                    <h3 className="text-gray-400 font-semibold mb-2">ABOUT</h3>
                    <ul className="space-y-1">
                        {[
                            "Contact Us",
                            "About Us",
                            "Careers",
                            "Flipkart Stories",
                            "Press",
                            "Corporate Information",
                        ].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* GROUP COMPANIES */}
                <div>
                    <h3 className="text-gray-400 font-semibold mb-2">GROUP COMPANIES</h3>
                    <ul className="space-y-1">
                        {[
                            "Myntra",
                            "Cleartrip",
                            "Shopsy",
                        ].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* HELP */}
                <div>
                    <h3 className="text-gray-400 font-semibold mb-2">HELP</h3>
                    <ul className="space-y-1">
                        {[
                            "Payments",
                            "Shipping",
                            "Cancellation & Returns",
                            "FAQ",
                        ].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONSUMER POLICY */}
                <div>
                    <h3 className="text-gray-400 font-semibold mb-2">CONSUMER POLICY</h3>
                    <ul className="space-y-1">
                        {[
                            "Cancellation & Returns",
                            "Terms Of Use",
                            "Security",
                            "Privacy",
                            "Sitemap",
                            "Grievance Redressal",
                            "EPR Compliance",
                        ].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* MAIL US */}
                <div className="md:col-span-1 col-span-2">
                    <h4 className="font-semibold text-gray-400 mb-2">Mail Us:</h4>
                    <p className="text-sm">
                        Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
                    </p>
                </div>
            </div>

            {/* ADDRESS + SOCIAL */}
            <div className="max-w-7xl mx-auto px-4 mt-8 grid md:grid-cols-2 gap-6 text-sm border-t border-gray-600 pt-6">
                <div>
                    <h4 className="font-semibold text-gray-400 mb-2">Registered Office Address:</h4>
                    <p>
                        Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
                    </p>
                    <p className="mt-2">
                        CIN: U51109KA2012PTC066107 <br />
                        Telephone: <a href="tel:04445614700" className="text-blue-400">044-45614700 / 044-67415800</a>
                    </p>
                </div>
                <div className="flex items-start justify-end space-x-4 text-lg text-white">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-700 mt-6 py-4 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-2 md:mb-0">
                    <span className="flex items-center gap-1">👜 Become a Seller</span>
                    <span className="flex items-center gap-1">⭐ Advertise</span>
                    <span className="flex items-center gap-1">🎁 Gift Cards</span>
                    <span className="flex items-center gap-1">❓ Help Center</span>
                    <span>© 2007-2025 Flipkart.com</span>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                    <img src="/payment.png" alt="visa" className="h-4" />
                    {/* <img src="/payments/mastercard.png" alt="mastercard" className="h-4" />
                    <img src="/payments/upi.png" alt="upi" className="h-4" />
                    <img src="/payments/rupay.png" alt="rupay" className="h-4" /> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
