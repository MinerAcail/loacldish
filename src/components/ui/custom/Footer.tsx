import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#f3782b] h-[50px] text-center flex items-center justify-center rounded-2xl text-amber-100 px-4">
      <div className="text-center text-sm space-y-1">
        <p>© {new Date().getFullYear()} Local Dish. UEW ICT Dept. Kobbi Mensah</p>
        <p>
          Also Designed  
          <Link to="https://winnemart.com" target="_blank" rel="noopener noreferrer" className="ml-2 underline">
            winnemart.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
