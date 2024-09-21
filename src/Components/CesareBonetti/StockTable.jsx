import React from 'react'

export default function StockTable() {
    const stocks = [
        {
        id:1,
          category: "Piston Valves",
          valveSize: "0.5''",
          rating:" 800#",
          endconnection: "SW",
          moc: "A105",
          qty: 50,
          Indvalvedim: "80x90x109",
          indvalveweights: "1.2",
        },
        {
            id:2,
            category: "Piston Valves",
            valveSize: "0.5''",
            rating:"150#",
            endconnection: "RF",
            moc: "A105",
            qty: 10,
            Indvalvedim: "85x90x109",
            indvalveweights: "1.2",
        },
        {
            id:3,
            category: "Piston Valves",
            valveSize: "3/4''",
            rating:"800#",
            endconnection: "SW",
            moc: "A105",
            qty: 50,
            Indvalvedim: "100x110x140",
            indvalveweights: "1.8",
        },{
            id:4,
            category: "Piston Valves",
            valveSize: "3/4''",
            rating:"150#",
            endconnection: "RF",
            moc: "A105",
            qty: 10,
            Indvalvedim: "100x110x140",
            indvalveweights: "1.8",
        },{
            id:5,
            category: "Piston Valves",
            valveSize: "1''",
            rating:"800#",
            endconnection: "SW",
            moc: "A105",
            qty: 75,
            Indvalvedim: "120x135x170",
            indvalveweights: "3.2",
        },{
            id:6,
            category: "Piston Valves",
            valveSize: "1''",
            rating:"150#",
            endconnection: "RF",
            moc: "A105",
            qty: 10,
            Indvalvedim: "120x135x170",
            indvalveweights: "3.2",
        },{
            id:7,
            category: "Piston Valves",
            valveSize: "1.5''",
            rating:"800#",
            endconnection: "SW",
            moc: "A105",
            qty: 15,
            Indvalvedim: "160x170x215",
            indvalveweights: "6.8",
        },{
            id:8,
            category: "Piston Valves",
            valveSize: "1.5''",
            rating:"150#",
            endconnection: "RF",
            moc: "A105",
            qty: 10,
            Indvalvedim: "160x170x215",
            indvalveweights: "6.8",
        },{
            id:9,
            category: "Piston Valves",
            valveSize: "2''",
            rating:"150#",
            endconnection: "RF",
            moc: "A216 WCB",
            qty: 10,
            Indvalvedim: "185x195x250",
            indvalveweights: "10.2",
        },{
            id:10,
            category: "Piston Valves",
            valveSize: "2.5''",
            rating:"150#",
            endconnection: "RF",
            moc: "A216 WCB",
            qty: 5,
            Indvalvedim: "241x375x435",
            indvalveweights: "40",
        },{
            id:11,
            category: "Piston Valves",
            valveSize: "3''",
            rating:"150#",
            endconnection: "RF",
            moc: "A216 WCB",
            qty: 5,
            Indvalvedim: "241x375x435",
            indvalveweights: "40"
        },{
            id:12,
            category: "Piston Valves",
            valveSize: "4''",
            rating:"150#",
            endconnection: "RF",
            moc: "A216 WCB",
            qty: 5,
            Indvalvedim: "292x415x490",
            indvalveweights: "50"
        },{
            id:13,
            category: "Piston Valves",
            valveSize: "6''",
            rating:"150#",
            endconnection: "RF",
            moc: "A216 WCB",
            qty: 4,
            Indvalvedim: "406x495x590",
            indvalveweights: "98",


        }
        // Add more teams as needed
      ];
      
  return (
    <div className=' w-full container'>
    <div className=" p-2 sm:p-4 text-white bg-transparent mx-auto">
  <h2 className="mb-7  text-3xl font-semibold leading-tight text-center text-white">Available Stocks</h2>
  <div className="overflow-x-auto w-full">
    <table className="w-full text-xs sm:text-sm lg:text-base">
      <thead className="rounded-t-lg ">
        <tr className="text-center bg-slate-600">
          <th title="Ranking" className="p-3 text-left">Category</th>
          <th title="Team name" className="p-3 text-left">Valve Size</th>
          <th title="Wins" className="p-3">Rating</th>
          <th title="Losses" className="p-3">End Connection</th>
          <th title="Win percentage" className="p-3">MOc</th>
          <th title="Games behind" className="p-3">Qty</th>
          <th title="Home games" className="p-3">Individual VALVE Dimensions</th>
          <th title="Away games" className="p-3">Individual VALVE Weights</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((data) => (
          <tr key={data.id}  className="text-center border-b border-opacity-20 dark:border-gray-300">
            <td className="px-3 py-2 text-left">{data.category}</td>
            <td className="px-3 py-2 text-left">{data.valveSize}</td>
            <td className="px-3 py-2">{data.rating}</td>
            <td className="px-3 py-2">{data.endconnection}</td>
            <td className="px-3 py-2">{data.moc}</td>
            <td className="px-3 py-2 text-right">{data.qty}</td>
            <td className="px-3 py-2">{data.Indvalvedim}</td>
            <td className="px-3 py-2">{data.indvalveweights}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>

  )
}
