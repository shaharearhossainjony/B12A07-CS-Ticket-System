
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">CS  Ticket </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            CS Ticket System is a powerful and intuitive customer support platform designed to help teams manage, track, and resolve customer queries efficiently. 
            With real-time updates, smart prioritization, and seamless collaboration, we empower businesses to deliver exceptional support experiences.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-5">Information</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Join Us</a></li>
          </ul>
        </div>
          <div className=" items-center gap-6 mt-4 md:mt-0">
            <h3 className="text-white font-semibold mb-5">Social</h3>
            <a href="#" className="hover:text-white transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              <span>Tweet</span>
            </a>
            <a href="#" className="hover:text-white transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.75 3.5H4.25A1.75 1.75 0 002.5 5.25v13.5c0 .966.784 1.75 1.75 1.75h15.5c.966 0 1.75-.784 1.75-1.75V5.25c0-.966-.784-1.75-1.75-1.75zM8.53 18.5H5.75v-9h2.78v9zm-1.39-10.27h-.02c-.93 0-1.53-.72-1.53-1.62 0-.92.62-1.62 1.57-1.62 0 .95.62 1.62 1.58 1.62h.02c.93 0 1.53-.72 1.53-1.62 0-.92-.62-1.62-1.57-1.62-.68 0-1.24.47-1.44 1.13zm12.36 10.27h-2.78v-4.8c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.24-1.82 2.52v4.88h-2.78v-9h2.67v1.23h.04c.37-.7 1.28-1.44 2.63-1.44 2.82 0 3.34 1.85 3.34 4.26v4.95z"/></svg>
              <span>Linkedin</span>
            </a>
          </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-8">
          <p className="text-center">© 2025 CS  Ticket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;