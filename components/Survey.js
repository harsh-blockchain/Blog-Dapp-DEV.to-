import React from "react";
import Image from "next/image";
import survey from "../public/survey.png";

const Survey = () => {
  const Listing = [
    {
      name: "Listings",
      seeAll: true,
      data: [
        {
          title: "Sidekick Live Debugger is now Open Source",
          description: "Product",
        },
        {
          title: "Shakti Packers and Movers Chandigarh",
          description: "Collab",
        },
        {
          title: "Free Laravel & Tailwind CSS Dashboard Template",
          description: "Forsale",
        },
        {
          title:
            "The Tailwind Site Creator, Design Tool, & Component Library 🎨",
          description: "events",
        },
        {
          title:
            "Front-end Foxes Day 2022 - Free Virtual Conference - September 13",
          description: "Product",
        },
      ],
    },
    {
      name: "#discuss",
      seeAll: false,
      data: [
        {
          title: "Sidekick Live Debugger is now Open Source",
          description: "Product",
        },
        {
          title: "Shakti Packers and Movers Chandigarh",
          description: "Collab",
        },
        {
          title: "Free Laravel & Tailwind CSS Dashboard Template",
          description: "Forsale",
        },
        {
          title:
            "The Tailwind Site Creator, Design Tool, & Component Library 🎨",
          description: "events",
        },
        {
          title:
            "Front-end Foxes Day 2022 - Free Virtual Conference - September 13",
          description: "Product",
        },
      ],
    },
    {
      name: "#Product",
      seeAll: false,
      data: [
        {
          title: "Sidekick Live Debugger is now Open Source",
          description: "Product",
        },
        {
          title: "Shakti Packers and Movers Chandigarh",
          description: "Collab",
        },
        {
          title: "Free Laravel & Tailwind CSS Dashboard Template",
          description: "Forsale",
        },
        {
          title:
            "The Tailwind Site Creator, Design Tool, & Component Library 🎨",
          description: "events",
        },
        {
          title:
            "Front-end Foxes Day 2022 - Free Virtual Conference - September 13",
          description: "Product",
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.parts}>
        <Image src={survey} alt="image" height={600} width={800} />
        <div>
          <div className="text-xl font-bold">
            Tell us your thoughts about DEV!
          </div>
          <p className="text-blue-500 font-semibold text-lg mt-2">
            Take the DEV Satisfaction Survey
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {Listing.map((item, index) => {
            return (
              <div className={styles.parts} key={index}>
                <div className="flex justify-between w-full items-center ">
                  <div className="font-bold text-xl">{item.name}</div>
                  {item.seeAll && (
                    <div className="text-xl font-bold text-blue-500">
                      See All
                    </div>
                  )}
                </div>
                <section className="">
                  {item?.data?.map((data, index) => {
                    return (
                      <div
                        className="border-t-2 flex flex-col space-y-3 py-2"
                        key={index}
                      >
                        <div className="text-lg font-bold">{data.title}</div>
                        <div className="text-sm text-gray-500 pb-2">
                          {data.description}
                        </div>
                      </div>
                    );
                  })}
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Survey;

const styles = {
  wrapper: `hidden lg:inline-flex flex flex-col my-3 max-w-[360px] gap-4 overflow-y-scroll h-[870px] `,
  parts: `border border-gray-300 rounded-md py-6 px-4 bg-white flex flex-col space-y-4`,
};
