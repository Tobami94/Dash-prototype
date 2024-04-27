import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiEyeFill,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[7vh] md:h-[7vh] border-b border-secondary-100 p-4 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line className="text-fuchsia-700" />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-fuchsia-700  rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          arrow
          transition
          arrowClassName="bg-secondary-100"
          menuClassName="bg-secondary-100 p-4">
          <h1 className="text-gray-300 text-center font-medium">
            Notifications
          </h1>
          <hr className="my-2 border-slate-800" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                className="w-8 h-8 object-cover rounded-full "
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Name User</span>{" "}
                  <span className="text-[8px]">18/06/2023</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>New Ticket</span>{" "}
                  <span className="text-[8px]">18/06/2024</span>
                </div>
                <p className="text-gray-500 text-xs">Lorem ipsum...</p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-2 border-slate-800" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
              <RiEyeFill /> View all
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                className="w-9 h-9 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4">
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">User Name</span>
                <span className="text-xs text-gray-500">
                  example@example.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-2 border-slate-800" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
              <RiSettings3Line /> Settings
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
              <RiLogoutCircleRLine /> Sign out
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
