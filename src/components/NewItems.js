import React from 'react';
import { newInStore } from '../data';

// import components
import NewItemsSlider from './NewItemsSlider';
const NewItems = () => {
  return (
    <div className="section relative overflow-hidden lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex md:flex-col items-baseline gap-2 mb-6 lg:mb-0">
            <h2 className="title max-w-[230px]">{newInStore.title}</h2>
            <p className="subtitle max-w-[230px]">{newInStore.subtitle}</p>
            <div className=" items-center hidden lg:flex ">
              <a
                className="hover:border-b border-primary font-medium transition-all"
                href=""
              >
                {newInStore.link}
              </a>
              {newInStore.icon}
            </div>
          </div>
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
