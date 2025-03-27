import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to foods page with search query
      navigate(`/foods?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Optional: clear search after navigation
    }
  };

  return (
    <nav className="bg-[#acc879] rounded-2xl text-gray-800 shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
             <img src={logo} className="w-16 " />
              <span className="font-medium text-[15px] text-white">Local Dish</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex bg-[#789448] rounded-2xl items-center space-x-6">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/foods"
                className="px-3 py-2 text-sm font-medium text-white hover:text-blue-500 transition-colors"
              >
                All Works
              </Link>
              <Link
                to="/lecturer"
                className="px-3 py-2 text-sm font-medium text-white hover:text-blue-500 transition-colors"
              >
                About
              </Link>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className={`relative transition-all duration-300 ${
              searchFocus ? "w-64" : "w-48"
            }`}>
              <Link to={"/foods"}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 rounded-lg text-sm leading-5 bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                />
                </Link>
              
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-lg">
          <div className="px-3 pt-2 pb-4 divide-y divide-gray-200">
            {/* Search in mobile menu */}
            <form onSubmit={handleSearch} className="relative my-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 rounded-lg text-sm leading-5 bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </form>

            {/* Mobile Navigation Links */}
            <div className="py-2">
              <Link
                to="/"
                className="flex justify-between items-center px-3 py-3 text-base font-medium text-white hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Home</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                to="/foods"
                className="flex justify-between items-center px-3 py-3 text-base font-medium text-white hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Menu</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                to="/about"
                className="flex justify-between items-center px-3 py-3 text-base font-medium text-white hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>About</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                to="/contact"
                className="flex justify-between items-center px-3 py-3 text-base font-medium text-white hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Contact</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;