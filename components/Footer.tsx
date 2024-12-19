export default function Footer() {
return(
  <footer className="bg-teal-500 text-gray-300 py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
    {/* Brand and Description */}
    <div>
      <h2 className="text-xl font-bold text-white mb-4">Comforty</h2>
      <p>
        Vivamus tristique odio sit amet volutpat semper, eu posuere turpis
        interdum. Cras egestas purus.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Category Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
      <ul>
        <li>
          <a href="#" className="hover:text-white">
            Sofa
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Armchair
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Wing Chair
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Desk Chair
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Park Bench
          </a>
        </li>
      </ul>
    </div>

    {/* Support Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
      <ul>
        <li>
          <a href="#" className="hover:text-white">
            Help & Support
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Help
          </a>
        </li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
      <p>Subscribe to our newsletter to stay updated.</p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="mt-3 w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-black"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-12 text-center text-gray-400 border-t border-gray-700 pt-6">
    <p>
      © 2024 Comforty - Designed & Developed by{" "}
      <a href="#" className="hover:text-white">
        Aman Ullah Qureshi
      </a>
    </p>
  </div>
</footer>
)}