import React, { useState, useEffect } from "react";
import Allapi from "../all api/Allapi";

import { IoDesktopSharp } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";

function GamingCard({ game }) {
  return (
    <div className="w-3xs py-5 text-white">
      <div className="bg-black rounded-xl bg-radial-[at_99%_90%] from-blue-700/70 via-55% from-10/% via-blue-900/30 overflow-hidden shadow-lg h-full">
        <img
          src={game.bg}
          className="h-50 w-full mask-b-from-60% mask-b-to-95% object-cover "
          alt=""
        />
        <div>
          <div className="py-2">
            <div className="flex flex-col px-4 py-2 w-full font-semibold">
              <div className="text-xl font-bold">
                <h1>{game.title}</h1>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg text-cyan-600">{game.released}</p>
                <span className="text-yellow-300">★★★★★</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="px-4 flex items-center gap-4">
              <img src="/Everyone.svg" className="w-10" alt="" />
              <p className="text-gray-500 text-xl font-semibold">Action</p>
            </div>
            <div className="px-4 flex gap-2 text-xl">
              <span>
                <IoDesktopSharp />
              </span>
              <span>
                <FaPlaystation />
              </span>
              <span>
                <FaXbox />
              </span>
            </div>
          </div>
          <div className="text-gray-500 p-4 flex justify-end">
            <h1>View details</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingCard;
