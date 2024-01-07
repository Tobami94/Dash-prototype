import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/DashBoard/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl  text-white">Global details</h1>
      <hr className="my-7 border-gray-500 w-auto h-2 border-0 rounded dark:bg-gray-700" />
      <div className="flex items-center justify-between mb-10 ">
        <h1 className="text-2xl  text-white">Overview</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CardTicket
          dataCard="usuarios"
          totalValue="145"
          titleCard="Total users"
        />
        <CardTicket
          dataCard="ventas"
          totalValue="500"
          titleCard="Total sales"
        />
        <CardTicket
          dataCard="totalNews"
          totalValue="130"
          titleCard="Total post"
        />
        <CardTicket
          dataCard="messagesend"
          totalValue="10,000"
          titleCard="total messages"
        />
      </div>
      <div>
        <h1 className="text-2xl text-white my-10">Latest registered users</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4 capitalize md:uppercase">
          <h5>Name</h5>
          <h5>Positon</h5>
          <h5>Status</h5>
          <h5>Registration date</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <span>Pepito Gonzales</span>
          </div>
          <div>
            <p>Developer</p>
          </div>
          <div>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Active
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">
              Fecha registro
            </h5>
            <span>28 octubre 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <Menu
              menuButton={
                <MenuButton className="bg-blue-800/60 p-2 rounded-lg transition-colors">
                  Edit user
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
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
                  Información
                </Link>
              </MenuItem>
            </Menu>
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
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <span>Lana Byrd</span>
          </div>
          <div>
            <p>Designer</p>
          </div>
          <div>
            <span className="py-1 px-2 bg-blue-500/10 text-red-500 rounded-lg">
              Offline
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">
              Fecha registro
            </h5>
            <span>28 octubre 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <Menu
              menuButton={
                <MenuButton className="bg-blue-800/60 p-2 rounded-lg transition-colors">
                  Edit user
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
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
                  Información
                </Link>
              </MenuItem>
            </Menu>
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
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <span>Josefina Ramirez</span>
          </div>
          <div>
            <p>Marketing</p>
          </div>
          <div>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Active
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">
              Fecha registro
            </h5>
            <span>28 octubre 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <Menu
              menuButton={
                <MenuButton className="bg-blue-800/60 p-2 rounded-lg transition-colors">
                  Edit user
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
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
                  Información
                </Link>
              </MenuItem>
            </Menu>
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
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <span>Robert Brown</span>
          </div>
          <div>
            <p>Product owner</p>
          </div>
          <div>
            <span className="py-1 px-2 bg-blue-500/10 text-red-500 rounded-lg">
              Offline
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">
              Fecha registro
            </h5>
            <span>28 octubre 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <Menu
              menuButton={
                <MenuButton className="bg-blue-800/60 p-2 rounded-lg transition-colors">
                  Edit user
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
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
                  Información
                </Link>
              </MenuItem>
            </Menu>
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
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
