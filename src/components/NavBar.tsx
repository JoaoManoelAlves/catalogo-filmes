import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav className="w-full h-20 bg-[#075985] flex flex-row items-center justify-center gap-4 text-white font-4xl">
        <Link to="/series">Series</Link>
      </nav>
    </>
  );
}
