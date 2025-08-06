import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-10 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white font-roboto">
            DailyBite
          </h2>
          <p className="mt-4 text-sm text-white">
            Taste the difference. Fresh ingredients, unforgettable flavors, and
            a dining experience you’ll crave every day.
          </p>
        </div>

        <div className="font-roboto">
          <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Reservations
              </a>
            </li>
          </ul>
        </div>

        <div className="font-roboto">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm text-white ">
            Chinotimba, Victoria Falls, Zimbabwe
          </p>
          <p className="text-sm text-white mt-2">Phone: +263 77 812 2053</p>
          <p className="text-sm text-white">
            Email: sibandasandra617@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="/" className="text-white hover:text-white">
              <FaFacebookF />
            </a>
            <a href="/" className="text-white hover:text-white">
              <FaInstagram />
            </a>
            <a href="/" className="text-white hover:text-white">
              <FaTwitter />
            </a>
            <a href="/" className="text-white hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-sm text-white font-roboto">
        © {new Date().getFullYear()} DailyBite Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
