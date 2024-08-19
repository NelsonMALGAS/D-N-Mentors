"use client";

import { useState } from "react";
import { FiMenu, FiX, FiBell } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, handleLogout, isAdmin } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(!showUserMenu);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLoginClick = () => {
    router.push("/");
  };

  const handleSignUpClick = () => {
    router.push("/sign-up");
  };

  return (
    <nav className="bg-gray-900 relative p-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-20 w-20 rounded-full"
                src="/images/logo-pic.jpeg"
                alt="Your Company"
                width={64}
                height={64}
                priority
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center justify-center">
                <Link href="/">
                  <span
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 ${
                      pathname === "/" ? "bg-gray-800" : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </span>
                </Link>
                {user && isAdmin(user.email) && (
                  <Link href="/dashboard">
                    <span
                      className={`block rounded-md px-3 py-2 text-white font-medium hover:bg-gray-800 ${
                        pathname === "/dashboard" ? "bg-gray-800" : ""
                      }`}
                    >
                      Dashboard
                    </span>
                  </Link>
                )}
                <Link href="/bookings">
                  <span
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 ${
                      pathname === "/bookings" ? "bg-gray-800" : ""
                    }`}
                  >
                    Bookings
                  </span>
                </Link>
                <Link href="/courses">
                  <span
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 ${
                      pathname === "/courses" ? "bg-gray-800" : ""
                    }`}
                  >
                    Courses
                  </span>
                </Link>
                <Link href="/about">
                  <span
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 ${
                      pathname === "/about" ? "bg-gray-800" : ""
                    }`}
                  >
                    About
                  </span>
                </Link>
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      toast.info(`${user.email} logged out`);
                      router.push("/login");
                    }}
                    className="rounded-md px-3 py-2 text-sm bg-gray-600 font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleLoginClick}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleSignUpClick}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={toggleNotifications}
            >
              <span className="sr-only">View notifications</span>
              <FiBell className="h-6 w-6" aria-hidden="true" />
            </button>

            {user && (
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={showUserMenu}
                    aria-haspopup="true"
                    onClick={toggleUserMenu}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={
                        user?.photoURL ||
                        "https://via.placeholder.com/64x64.png?text=Profile"
                      }
                      alt="Profile Picture"
                      width={64}
                      height={64}
                      priority
                    />
                  </button>
                </div>

                {showUserMenu && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <Link href="/profile">
                      <span
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={toggleUserMenu}
                      >
                        Your Profile
                      </span>
                    </Link>
                    <Link href="/settings">
                      <span
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={toggleUserMenu}
                      >
                        Settings
                      </span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleUserMenu();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-200"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800 bg-opacity-90 text-gray-100 transform transition-transform backdrop-blur z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-200">Menu</h2>
          <button type="button" className="text-gray-200" onClick={toggleMenu}>
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="px-2 pb-3 pt-2 space-y-1">
          <Link href="/" onClick={toggleMenu}>
            <span
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/"
                  ? "bg-gray-700 text-gray-100"
                  : "hover:bg-gray-600 text-gray-100"
              }`}
              aria-current="page"
            >
              Home
            </span>
          </Link>
          {user && isAdmin(user.email) && (
            <Link href="/dashboard" onClick={toggleMenu}>
              <span
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === "/dashboard"
                    ? "bg-gray-700 text-gray-100"
                    : "hover:bg-gray-600 text-gray-100"
                }`}
              >
                Dashboard
              </span>
            </Link>
          )}
          <Link href="/bookings" onClick={toggleMenu}>
            <span
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/bookings"
                  ? "bg-gray-700 text-gray-100"
                  : "hover:bg-gray-600 text-gray-100"
              }`}
            >
              Bookings
            </span>
          </Link>
          <Link href="/courses" onClick={toggleMenu}>
            <span
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/courses"
                  ? "bg-gray-700 text-gray-100"
                  : "hover:bg-gray-600 text-gray-100"
              }`}
            >
              Courses
            </span>
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            <span
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === "/about"
                  ? "bg-gray-700 text-gray-100"
                  : "hover:bg-gray-600 text-gray-100"
              }`}
            >
              About
            </span>
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium hover:bg-gray-600 text-gray-100"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <button
                  onClick={handleLoginClick}
                  className="block w-full text-left rounded-md px-3 py-2 text-base font-medium hover:bg-gray-600 text-gray-100"
                >
                  Login
                </button>
              </Link>
              <button
                onClick={handleSignUpClick}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium hover:bg-gray-600 text-gray-100"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
