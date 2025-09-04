// import { CardData } from "./MyServiceCard";
// import { useEffect, useState } from "react";
// function MyServices() {
//   const [current, setCurrent] = useState(0);
//   // const cardsPerView = 3;

//   const [cardsPerView, setcardsPreView] = useState(3);

//   useEffect(() => {
//     const cardsPerView = () => {
//       if (window.innerWidth <= 450) {
//         setcardsPreView(1);
//       } else {
//         setcardsPreView(3);
//       }
//     };
//     cardsPerView();
//     window.addEventListener("resize", cardsPerView);
//     return () => window.addEventListener("resize", cardsPerView);
//   }, []);

//   // const lastIndex = Math.max(0, CardData.length - cardsPerView);

//   // function prevSlide() {
//   //   if (current === 0) setCurrent(lastIndex);
//   //   else setCurrent(current - 1);
//   // }

//   // function nextSlide() {
//   //   console.log("handle clicked------------------------------");
//   //   if (current >= lastIndex) setCurrent(0);
//   //   else setCurrent(current + 1);
//   // }

//   return (
//   <>
//      <div className="w-full  bg-[#2a2c39]">
//    <div className="w-full gap-[60px] py-[100px] px-[200px]  flex flex-col min-[500px]:items-center justify-center">
//       <h1 className=" text-[50px]  max-[500px]:text-[20px] text-white font-semibold">
//         Service Provide For My Clients
//       </h1>

//       <div className=" relative full overflow-hidden z-10 ">
//         <div
//           className={`flex items-center gap-[80px] max-[500px]:gap-[35px] transition-transform ease-out duration-500`}
//           style={{
//             transform: `translateX(-${
//               current * (310 + (cardsPerView === 1 ? 0 : 80))
//             }px)`,
//           }}
//         >
//           {CardData.map((skills) => (
//             <div
//               key={skills.id}
//               className="w-[310px]  h-[450px] max-[500px]:w-[300px] max-[500px]:h-[450px] bg-[#22242e] px-[30px] py-[30px] max-[500px]:px-[18px] max-[500px]:py-[18px]"
//             >
//               <img
//                 className="w-[120px] max-[500px]:w-[100px]"
//                 src={skills.imgUrl}
//               />
//               <div className="flex flex-col gap-4 mt-6 text-[#858792]">
//                 <h2 className=" text-3xl max-[500px]:text-[20px] font-[500] text-white">
//                   {skills.heading}
//                 </h2>
//                 <div className="flex  flex-col gap-2">
//                   <p className="flex items-center gap-2 ">
//                     {skills.icon}
//                     {skills.skill1}
//                   </p>
//                   <p className="flex items-center gap-2">
//                     {skills.icon}
//                     {skills.skill2}
//                   </p>
//                   <p className="flex items-center gap-2 ">
//                     {skills.icon}
//                     {skills.skill3}
//                   </p>
//                   <p className="flex items-center gap-2 ">
//                     {skills.icon}
//                     {skills.skill4}
//                   </p>
//                   <p className="flex items-center gap-2 ">
//                     {skills.icon}
//                     {skills.skill5}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <div className="w-[100px] flex items-center justify-between ">
//           {Array.from({ length: 5 }).map((item, index) => {
//             return (
//               <div className="w-[15px] h-[15px] rounded-full bg-amber-300"></div>
//             );
//           })}
//         </div> */}
//       </div>
//       {/* <div className="c">
//         {Array.from({ length: 5 }).map((item, index) => {
//           <div className="w-[50px] h-[50px]  bg-amber-300"></div>;
//         })}
//       </div> */}

//       <div className="flex justify-center items-center">
//         <div className="w-[80px] flex items-center justify-between m-0">
//           {Array.from({ length: 3 }).map((item, index) => {
//             return (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer z-10 ${
//                   current === index ? "bg-white" : "bg-gray-500"
//                 }`}
//               />
//             );
//           })}
//         </div>
//       </div>
//       </div>
//     </div>

// )

// </>
//   );
// }
// export default MyServices;


  
import { CardData } from "../Project_Data/MyServiceCard";
import { useEffect, useState } from "react";

function MyServices() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 420) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Card width and gap must match your CSS
  const cardWidth = cardsPerView === 1 ? 300 : 310;
  const gap = cardsPerView === 1 ? 60 : 80;
  const offset = current * (cardWidth + gap);

  return (
    <>
      <div className="w-full bg-[#2a2c39]">
        <div className={`w-full py-[50px] md:py-[100px] ${cardsPerView === 1 ? "px-5" : "px-8 lg:px-[200px]"} flex flex-col items-center justify-center gap-[60px]`}>
          <h1 className="text-2xl md:text-4xl lg:text-[50px] text-white font-semibold text-center">
            Service Provide For My Clients
          </h1>

          <div className="relative w-full overflow-hidden">
            <div
              className={`flex items-center gap-[${gap}px] transition-transform ease-out duration-500`}
              style={{
                transform: `translateX(-${offset}px)`,
              }}
            >
              {CardData.map((skills) => (
                <div
                  key={skills.id}
                  className={`flex-shrink-0 bg-[#22242e] ${cardsPerView === 1 ? "w-[300px] h-[400px] px-5 py-5" : "md:w-[310px] h-[450px] px-4 md:px-[30px] py-4 md:py-[30px] mx-auto md:mx-0"}`}
                >
                  <img
                    className="w-20 md:w-[120px]"
                    src={skills.imgUrl}
                    alt={skills.heading}
                  />
                  <div className="flex flex-col gap-4 mt-6 text-[#858792]">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] text-white">
                      {skills.heading}
                    </h2>
                    <div className="flex flex-col gap-2">
                      <p className="flex items-center gap-2">
                        {skills.icon}
                        {skills.skill1}
                      </p>
                      <p className="flex items-center gap-2">
                        {skills.icon}
                        {skills.skill2}
                      </p>
                      <p className="flex items-center gap-2">
                        {skills.icon}
                        {skills.skill3}
                      </p>
                      <p className="flex items-center gap-2">
                        {skills.icon}
                        {skills.skill4}
                      </p>
                      <p className="flex items-center gap-2">
                        {skills.icon}
                        {skills.skill5}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 z-10 ${
                    current === index ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyServices;