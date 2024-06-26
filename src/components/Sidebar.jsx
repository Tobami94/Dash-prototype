import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiBarChart2Line,
  RiEarthLine,
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
  RiUserLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-primary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}>
        <div>
          <h1 className="text-center text-2l font-bold text-white mb-10">
            YOU Dashboard
          </h1>
          <ul>
            <li>
              <Link
                to="/perfil"
                className="flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiUserLine className="text-primary-305" />{" "}
                <span className="text-primary-305 text-base">Profile</span>
              </Link>
            </li>
            <hr className="my-2 border-slate-800" />
            <li>
              <Link
                to="/home"
                className="flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiBarChart2Line className="text-primary-305" />{" "}
                <span className="text-primary-305 text-base">REPORT</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-2 rounded-lg hover:bg-secondary-900 transition-colors">
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary-305" />{" "}
                  <span className="text-primary-305 text-base">
                    SOCIAL MEDIA
                  </span>
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                    Graph
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profiles"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">
                    Users
                  </Link>
                </li>
              </ul>
            </li>
            <hr className="my-2 border-slate-800" />
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiCustomerService2Line className="text-primary-305" />
                <span className="text-primary-305 text-base">
                  Technical support
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiCalendarTodoLine className="text-primary-305" />{" "}
                <span className="text-primary-305 text-base">Calendar</span>
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
            <RiLogoutCircleRLine className="text-primary-305" />{" "}
            <span className="text-primary-305">Sign off</span>
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
