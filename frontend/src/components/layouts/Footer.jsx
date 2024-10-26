import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Legal & Privacy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-500">Gift Card</a></li>
            <li><a href="#" className="hover:text-yellow-500">Customer Service</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Account</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-yellow-500">Televisions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Washing Machines</a></li>
            <li><a href="#" className="hover:text-yellow-500">Air Conditioners</a></li>
            <li><a href="#" className="hover:text-yellow-500">Laptops</a></li>
            <li><a href="#" className="hover:text-yellow-500">Accessories</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">My Profile</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Order History</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Wish List</a></li>
            <li><a href="#" className="hover:text-yellow-500">Order Tracking</a></li>
            <li><a href="#" className="hover:text-yellow-500">Shopping Cart</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-500">Our Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500">Affiliate</a></li>
            <li><a href="#" className="text-yellow-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 5 - Contact */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-4">Need Help? Call Us Now</h3>
          <p className="text-gray-100">+99 0214 2542 223</p>
          <p className="text-gray-100 mt-4">Monday - Friday: 9:00 - 20:00</p>
          <p className="text-gray-100">Saturday: 11:00 - 15:00</p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 text-yellow-500">
            <i className="fab fa-facebook-f cursor-pointer hover:text-white"></i>
            <i className="fab fa-twitter cursor-pointer hover:text-white"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-white"></i>
            <i className="fab fa-linkedin-in cursor-pointer hover:text-white"></i>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2022 TailGrids. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="text-gray-400">We Accept:</span>
          <i className="fab fa-cc-paypal text-gray-400"></i>
          <i className="fab fa-cc-visa text-gray-400"></i>
          <i className="fab fa-cc-mastercard text-gray-400"></i>
          <i className="fab fa-cc-amex text-gray-400"></i>
          <i className="fab fa-cc-discover text-gray-400"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
