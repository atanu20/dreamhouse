import React from 'react';
import { features } from '../data';
const Features = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="flex-1 order-1 lg:-order-1 mx-auto">
            <img src={features.image.type} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2">
            <h2 className="text-2xl md:text-3xl font-semibold ">
              {features.title}
            </h2>
            <p>{features.subtitle}</p>
            <div className="">
              {features.items.map((val, ind) => {
                return (
                  <>
                    <div key={ind} className="flex gap-2  ">
                      <div className="text-2xl mr-4 lg:text-3xl">
                        {val.icon}
                      </div>
                      <div>
                        <h4>{val.title}</h4>

                        <p>{val.subtitle}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
