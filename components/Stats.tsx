"use client";
import CountUp from "react-countup";

const state = [
  {
    num: 27,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

export default function stats() {
  return (
    <section className="lg:flex justify-center items-center w-full h-[300px]">
      <div>
        <div className="px-4 lg:flex gap-10 space-y-2">
          {state.map((item, index) => {
            return (
              <div
                className="bg-slate-200 cursor-pointer bg-opacity-5 px-10 py-5 rounded-lg border-[0.5px] border-green-400 flex gap-6 flex-wrap text-center border-opacity-50 hover:bg-opacity-20 duration-200 ease-in-out"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={4}
                  className="text-[39px] leading-[55px] font-bold"
                />
                <p className="w-24 text-start">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
