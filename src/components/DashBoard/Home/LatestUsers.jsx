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
              <MenuButton className="bg-blue-800/60 transition-colors text-gray-300 hover:bg-secondary-300 p-2 rounded-lg transition-colors">
                <Link to="/perfil">Edit user</Link>
              </MenuButton>
            }></Menu>
          <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 bg-red-800/60 p-2 rounded-lg transition-colors">
                Delete user
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
