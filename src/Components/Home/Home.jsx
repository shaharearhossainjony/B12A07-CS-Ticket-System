
import React from "react";

const Home = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <div className="w-full mx-auto px-4 my-12">
      <section
        className="
          flex flex-col md:flex-row 
          gap-4 
          h-auto md:h-64
        "
      >
        {/* left div */}
        <div className="my-element w-full h-40 md:h-full flex justify-center items-center rounded-xl">
          <div className="text-center text-xl font-extrabold text-white">
            <h2>In-progress</h2>
            <h2>{inProgressCount}</h2>
          </div>
        </div>

        {/* right div */}
        <div className="my-element2 w-full h-40 md:h-full flex justify-center items-center rounded-xl">
          <div className="text-center text-xl font-extrabold text-white">
            <h2>Resolved</h2>
            <h2>{resolvedCount}</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

