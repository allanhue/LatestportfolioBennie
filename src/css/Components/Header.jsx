import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-8 xl:py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-semibold">
           Allan
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Link to="/contact">
            <Button text="Hire me" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
