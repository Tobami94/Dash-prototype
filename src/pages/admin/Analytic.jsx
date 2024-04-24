import React from "react";

import CardTicket from "../../components/DashBoard/Home/CardTicket.jsx";

const Analytic = () => {
  return (
    <div>
      <h1 className="text-3xl  text-white">Analytics</h1>
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
    </div>
  );
};

export default Analytic;
