import React from "react";
import{ stocks } from "./stocks.js"
export default function StockTable() {
  

  return (
    <div className="w-full px-2 sm:px-4">
    <div className="p-2 sm:p-4 text-white bg-transparent">
      <h2 className="mb-7 text-3xl font-semibold leading-tight text-center text-white">
        Available Stocks
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max text-xs sm:text-sm lg:text-base border-collapse">
          <thead className=" mx-6">
            <tr className="text-center bg-slate-600">
              <th title="Category" className="p-3 text-left">
                Category
              </th>
              <th title="Valve Size" className="p-3 text-left">
                Valve Size
              </th>
              <th title="Rating" className="p-3">
                Rating
              </th>
              <th title="End Connection" className="p-3">
                End Connection
              </th>
              <th title="MOc" className="p-3">
                MOc
              </th>
              <th title="Qty" className="p-3">
                Qty
              </th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((data) => (
              <tr
                key={data.id}
                className="text-center mx-6 border-b border-opacity-20 dark:border-gray-300"
              >
                <td className="px-3 py-2 text-left">{data.category}</td>
                <td className="px-3 py-2 text-left">{data.valveSize}</td>
                <td className="px-3 py-2">{data.rating}</td>
                <td className="px-3 py-2">{data.endconnection}</td>
                <td className="px-3 py-2">{data.moc}</td>
                <td className="px-3 py-2 text-center">{data.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  
  );
}
