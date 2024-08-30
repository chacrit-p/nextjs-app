import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300 sticky w-full left-0 top-0">
          <div className="container mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1  font-semibold">chacrit.p</div>
            <div className="hidden flex-none lg:block ">
              <ul className="menu menu-horizontal ">
                <li>
                  <Link className="font-semibold" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold" href="/pokemon">
                    Pokemon
                  </Link>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/pokemon">Pokemon</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}
