import React from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardTicket = ({ id, totalValue, dataCard }) => {
  let status = "";
  let textColor = "";
  let titleCard = "";

  switch (dataCard) {
    case "ventas":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      titleCard = "Total Tickets";
      break;

    case "totalNews":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      titleCard = "Total post";
      break;

    case "messagesend":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      titleCard = "Total message";
      break;

    case "usuarios":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      titleCard = "Total users";
      break;

    default:
      status = "";
      textColor = "";
      break;
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div key={id}>
        <h1 className="text-4xl text-white font-bold mb-4">{totalValue}</h1>
        <p className={textColor}>{titleCard}</p>
      </div>
    </div>
  );
};

export default CardTicket;
