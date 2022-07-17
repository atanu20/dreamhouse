import React from 'react';
import { stats } from '../data';
const Stats = () => {
  return (
    <div className="bg-accent rounded-md p-8">
      <div className="flex flex-wrap gap-y-8">
        {stats.map((val, ind) => {
          return (
            <>
              <div
                key={ind}
                className="text-white min-h-[70px] w-3/6 flex lg:flex-1 flex-col justify-center odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-0 "
              >
                <div className="text-2xl font-semibold lg:text-4xl">
                  {val.value}
                </div>
                <div className="max-w-[110px] mx-auto">{val.text}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
