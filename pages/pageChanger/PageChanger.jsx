import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoList } from "../../redux/CyrptoSlice";

const PageChanger = () => {
  const page = useSelector((state) => state.crypto.page);
  const dispatch = useDispatch();
  const nextPage = () => {
    dispatch(getCryptoList(page + 1));
  };
  const previous = () => {
    dispatch(getCryptoList(page - 1));
  };
  return (
    <div className="flex gap-5 items-center justify-center">
      <button
        className="p-2 bg-orange-500 rounded-xl text-white"
        style={page === 1 ? { opacity: "0.5" } : { opacity: "1" }}
        disabled={page === 1}
        onClick={previous}
      >
        🡠 Previous Page
      </button>
      <button
        className="p-2 bg-orange-500 rounded-xl text-white"
        style={page === 100 ? { opacity: "0.5" } : { opacity: "1" }}
        disabled={page === 100}
        onClick={nextPage}
      >
        Next Page 🡢
      </button>
    </div>
  );
};

export default PageChanger;
