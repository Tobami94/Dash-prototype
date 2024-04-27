import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const LatestUsers = ({
  id,
  name,
  state,
  position,
  registration_date,
  email,
}) => {
  let status = "";
  let colorGlob = "";
  let iconStatus = "";

  switch (state) {
    case "Online":
      status = "py-1 px-2 rounded-lg bg-green-500/10 text-green-500";
      colorGlob = "text-green-500";
      iconStatus = "Online";
      break;

    case "Offline":
      status = "py-1 px-2 rounded-lg bg-red-500/10 text-red-500";
      colorGlob = "text-red-500";
      iconStatus = "Offline";
      break;

    default:
      status = "";
      textColor = "";
      break;
  }

  return (
    <>
      <div
        key={id}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
        <div>
          <span>
            {" "}
            <Link to="/perfil">{name}</Link>
          </span>
          <p className="py-1 px-0 rounded-lg text-slate-600">{email}</p>
        </div>
        <div>
          <p>{position}</p>
        </div>
        <div>
          <span className={status}>{state}</span>
        </div>
        <div>
          <span>{registration_date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Menu
            menuButton={
              <MenuButton className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                <Link to="/perfil">Edit</Link>
              </MenuButton>
            }></Menu>
          <Menu
            menuButton={
              <MenuButton className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                Delete
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
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-1 flex-1">
                Esta accion es irreversible
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default LatestUsers;
