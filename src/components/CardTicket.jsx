import React from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardTicket = (props) => {

const { dataCard, totalValue } = props;

  let status = "";
  let textColor = "";
  let titleCard = ""



  switch (dataCard) {
    case "ventas":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      titleCard = "Total sales"
      break;

    case "totalNews":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      titleCard = "Total post"
      break;
    case "messagesend":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      titleCard = "Total message"
      break;
      
    case "usuarios":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      titleCard = "Total users"
      break;

 default: 
 status = "";
 textColor = "";
 break;

  }


    // const rutes = () => {
    //   switch(route) {
    //     case "usuarios":
    //       return <Link to="/users" className="flex items-center gap-2 text-gray-900 hover:underline">  <FaChevronUp />  Ver más </Link>;;
    //       case "ventas":
    //       return <Link to="/shop" className="flex items-center gap-2 text-gray-900 hover:underline"> <FaChevronUp />  Ver más </Link>;
    //       case "totalNews":
    //         return <Link to="/news" className="flex items-center gap-2 text-gray-900 hover:underline">  <FaChevronUp />  Ver más </Link>;
    //         default:
    //           return null;
    //   }
    // };


  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
        <div></div>
      </div>
      {/* valores totales */}
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{totalValue}</h1>

      </div>
      <p className={textColor}>{titleCard}</p>
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:underline">
          <RiAddLine /> Ver más
        </Link>
      </div>
    </div>
  );
};

export default CardTicket;
