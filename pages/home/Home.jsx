import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoList } from "../../redux/CyrptoSlice";
import CryptoTable from "../cryptoTable/CryptoTable";
import PageChanger from "../pageChanger/PageChanger";

const Home = () => {
  const { cryptoList, isLoading } = useSelector((state) => state.crypto);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCrypto = () => {
      dispatch(getCryptoList(1));
    };
    fetchCrypto();
  }, []);

  if (isLoading) return "Loading";
  console.log(cryptoList);

  return (
    <div className="flex flex-col p-7 ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="h-96 md:p-12 mb-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-xl mb-1"
            placeholder="Search"
          />
          <table className="w-full text-m text-left rounded-xl text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-orange-500 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Coin Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Price Change
                </th>
                <th scope="col" className="px-6 py-3">
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody>
              {cryptoList &&
                cryptoList !== undefined &&
                cryptoList.length > 0 &&
                cryptoList
                  .filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (
                      item.id.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, i) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        key={i}
                      >
                        <CryptoTable item={item} />
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
      <PageChanger />
    </div>
  );
};

export default Home;
