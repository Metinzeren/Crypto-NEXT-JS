import React from "react";
import Image from "next/image";
const CryptoTable = ({ item }) => {
  return (
    <>
      <td className="px-6 py-4">
        {item.market_cap_rank !== undefined ? item.market_cap_rank : ""}
      </td>
      <td className="flex font-bold text-black uppercase items-center px-6 py-4">
        <Image
          src={item.image}
          alt="Picture of the author"
          width={40}
          height={40}
        />
        {item.id}
      </td>
      <td className="px-6 py-4 text-yellow-400">
        {item.current_price !== undefined ? "$" + item.current_price : ""}
      </td>
      <td
        style={
          item.price_change_percentage_24h > 0
            ? { color: "green" }
            : { color: "red" }
        }
        className="px-6 py-4"
      >
        {item.price_change_percentage_24h !== undefined
          ? item.price_change_percentage_24h
          : ""}
        %
      </td>
      <td className="px-6 py-4">
        {item.market_cap !== undefined ? "$" + item.market_cap : ""}
      </td>
    </>
  );
};

export default CryptoTable;
