import React from "react";
import Loader from "./Loader";
import { useGlobalContext } from "./context";
import Pagination from "./Pagination";


const Stories = () => {
  const { query, loading, hits, removePost, SearchPost } =
    useGlobalContext();

  return (
    <div className=" flex flex-col py-24 w-full justify-center items-center bg-blue-300">
      <div>
        <input
          className="my-4 bg-transparent p-2 border-2 border-black rounded-lg outline-none placeholder:text-black"
          placeholder="Search Here..."
          type="text"
          value={query}
          onChange={(e) => SearchPost(e.target.value)}
        />
      </div>
      <Pagination />
      {loading === true ? (
        <Loader />
      ) : (
        <div>
          {hits.map((items) => {
            return (
              <div
                key={items.objectID}
                className=" flex justify-between items-center bg-blue-600 shadow-lg my-3 px-3 py-2 rounded-lg"
                
              >
                <p>{items.title}</p>
                <button className="text-red-500 text-lg font-semibold p-1 hover:bg-white rounded-lg ease-in" onClick={() => removePost(items.objectID)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Stories;
