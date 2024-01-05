import React from "react";
import { Link } from "react-router-dom";
import {
  RiFilter2Fill,
  RiSearch2Line,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiTicketLine,
  RiArrowLeftSLine,
  RiFileTextLine,
  RiDiscussLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Tab, Disclosure, Transition } from "@headlessui/react";

import CardTicket from "../../components/CardTicket";



const Analytic = () => {
  return (
<div>
  <div className="flex items-center justify-between mb-10"><h1 className="text-2xl  text-white">Overview</h1>
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
  )
 
};

export default Analytic;
