import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

export default function Header() {
  const isLoggedIn = false;

  return (
    <nav className="container flex w-full lg:items-center items-center justify-between xl:justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex items-center">
        <NavLink className="flex items-center gap-1 lg:gap-2 shrink-0" href="/">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="text-xl font-extrabold">WrapUp.ai</span>
        </NavLink>
      </div>

      <div className="flex flex-10 justify-center gap-4 lg:gap-12 items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button>Sing Out</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
