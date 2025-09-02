import { CardData } from "./MyServiceCard";
import { useEffect, useState } from "react";
function MyServices() {
  const [current, setCurrent] = useState(0);
  // const cardsPerView = 3;

  const [cardsPerView, setcardsPreView] = useState(3);

  useEffect(() => {
    const cardsPerView = () => {
      if (window.innerWidth <= 360) {
        setcardsPreView(1);
      } else {
        setcardsPreView(3);
      }
    };
    cardsPerView();
    window.addEventListener("resize", cardsPerView);
    return () => window.addEventListener("resize", cardsPerView);
  }, []);

  // const lastIndex = Math.max(0, CardData.length - cardsPerView);

  // function prevSlide() {
  //   if (current === 0) setCurrent(lastIndex);
  //   else setCurrent(current - 1);
  // }

  // function nextSlide() {
  //   console.log("handle clicked------------------------------");
  //   if (current >= lastIndex) setCurrent(0);
  //   else setCurrent(current + 1);
  // }

  return (
    <div className="w-[100%] flex flex-col gap-[60px] px-[200px] max-[360px]:px-[20px] py-[100px] bg-[#2a2c39]">
      <h1 className=" text-[50px] max-[360px]:text-[20px] text-white font-semibold">
        Service Provide For My Clients
      </h1>

      <div className=" relative w-[100%] overflow-hidden z-10 ">
        <div
          className={`flex  justify-between  items-center  gap-[80px] max-[360px]:gap-[30px]  transition-transform ease-out duration-500`}
          style={{
            transform: `translateX(-${
              current * (310 + (cardsPerView === 1 ? 0 : 80))
            }px)`,
          }}
        >
          {CardData.map((skills) => (
            <div
              key={skills.id}
              className="w-[310px] shrink-0 h-[450px] max-[360px]:w-[280px] max-[360px]:h-[430px] bg-[#22242e] px-[30px] py-[30px] max-[360px]:px-[18px] max-[360px]:py-[18px]"
            >
              <img
                className="w-[120px] max-[360px]:w-[80px]"
                src={skills.imgUrl}
              />
              <div className="flex flex-col gap-4 mt-6 text-[#858792]">
                <h2 className=" text-3xl max-[360px]:text-[20px] font-[500] text-white">
                  {skills.heading}
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 ">
                    {skills.icon}
                    {skills.skill1}
                  </p>
                  <p className="flex items-center gap-2">
                    {skills.icon}
                    {skills.skill2}
                  </p>
                  <p className="flex items-center gap-2 ">
                    {skills.icon}
                    {skills.skill3}
                  </p>
                  <p className="flex items-center gap-2 ">
                    {skills.icon}
                    {skills.skill4}
                  </p>
                  <p className="flex items-center gap-2 ">
                    {skills.icon}
                    {skills.skill5}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-[100px] flex items-center justify-between ">
          {Array.from({ length: 5 }).map((item, index) => {
            return (
              <div className="w-[15px] h-[15px] rounded-full bg-amber-300"></div>
            );
          })}
        </div> */}
      </div>
      {/* <div className="c">
        {Array.from({ length: 5 }).map((item, index) => {
          <div className="w-[50px] h-[50px]  bg-amber-300"></div>;
        })}
      </div> */}

      <div className="flex justify-center items-center">
        <div className="w-[80px] flex items-center justify-between m-0">
          {Array.from({ length: 3 }).map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer z-10 ${
                  current === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MyServices;
