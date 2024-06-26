import React, { useState } from "react";

import CardTicket from "../../components/DashBoard/Home/CardTicket";
import LatestUsers from "../../components/DashBoard/Home/LatestUsers";
import GraphHomeRegister from "../../components/DashBoard/Home/GraphHomeRegister";
import GraphHomeTickets from "../../components/DashBoard/Home/GraphHomeTickets";
import GraphHomeVentas from "../../components/DashBoard/Home/GraphHomeVentas";
import GraphHomeTicketsCreateResolve from "../../components/DashBoard/Home/GraphTicketsCreateResolve";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { dataUsers, overviewTable } from "../../DataGosht"; //import dbGosht
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState(dataUsers);
  const [overviewtable, setOvertable] = useState(overviewTable);

  return (
    <div>
      <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-3 mb-1">

      <div className="col-span-3">
        <GraphHomeTicketsCreateResolve />
      </div>
      <div className="col-span-1">
        <GraphHomeVentas />
        </div>
  
      <div className="col-span-1">
        <GraphHomeRegister />
        </div>

        <div className="col-span-1">
        <GraphHomeTickets />
        </div>



      </div>

      <div className="flex items-center justify-between mb-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-1">
        {overviewtable?.map((i) => {
          return (
            <CardTicket
              key={i.id}
              dataCard={i.dataCard}
              totalValue={i.totalValue}
              titleCard={i.name}
            />
          );
        })}
      </div>
      <div>
        <h1 className="text-2xl text-white my-10">Latest registered users</h1>
      </div>
      <div key="usuarios" className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap- mb-10 p-4 capitalize md:uppercase">
          <h5>Name</h5>
          <h5>Positon</h5>
          <h5>State</h5>
          <h5>Registration date</h5>
        </div>
        {users?.map((u) => {
          return (
            <LatestUsers
              key={u.id}
              name={u.name}
              state={u.state}
              position={u.position}
              registration_date={u.registration_date}
              email={u.email}
            />
          );
        })}
      </div>
      <p className="text-2xs p-4  text-white">
        Malena Paraschuk ©{" "}
        <Link to="https://github.com/Tobami94">Github/Tobami94</Link>
      </p>
    </div>
  );
};

export default Home;
