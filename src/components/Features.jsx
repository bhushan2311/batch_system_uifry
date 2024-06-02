import React from "react";

function Features() {
  return (
    <div className="flex justify-center relative">
      <div className="absolute left-12 top-40">
        <img src="../Assets/Images/smallstar.png" alt="Small Star" />
      </div>
      <div className="absolute left-0 top-20 z-10">
        <img src="../Assets/Images/y2r2.png" alt="Splash Image" />
      </div>
      <div className="absolute top-10 right-0 z-10">
        <img src="../Assets/Images/halfredyellow.png" alt="Half Red Yellow" />
      </div>
      <div className="flex w-11/12 justify-center items-center z-20">
        <div className="flex w-2/3 z-20">
          <img src="../Assets/Images/bg2.png" alt="Background Image" className="w-full" />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-red-500 text-xl font-semibold text-center mb-4">FEATURES</div>
          <div className="text-4xl font-bold mb-6 text-center">Uifry premium</div>
          <div className="flex flex-col">
            <ul className="list-none pl-0">
              <li className="flex items-center mb-4">
                <img src="../Assets/Images/star.png" alt="Star" className="w-6 h-6 mr-2" />
                <div>
                  <div className="text-lg font-semibold mb-2">Budgeting intervals 1</div>
                  <div className="text-gray-500">Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</div>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <img src="../Assets/Images/hex.png" alt="Hex" className="w-6 h-6 mr-2" />
                <div>
                  <div className="text-lg font-semibold mb-2">Budgeting intervals 2</div>
                  <div className="text-gray-500">Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</div>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <img src="../Assets/Images/cube.png" alt="Cube" className="w-6 h-6 mr-2" />
                <div>
                  <div className="text-lg font-semibold mb-2">Budgeting intervals 3</div>
                  <div className="text-gray-500">Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Features;



// ----------------------------------------

// function Features() {
//   return (
//     <div className="flex flex-col items-center justify-center p-4">
//       <div className="flex flex-row flex-wrap items-center justify-center m-4">
//         <div>
//           <img
//             src="/Assets/Images/fullyphone.png"
//             alt="feature image"
//             className="w-[40rem] md:w-[50rem] lg:w-[50rem]"
//           />
//         </div>
//         {/* <div className="text-center text-xl font-semibold mt-2"> */}
//           <div className="predetails">
//             <div className="features">FEATURES</div>
//             <div className="prehead">Uifry premium</div>

//             <div className="predetail">
//               <div className="detailimg">
//                 <img src="/Assets/Images/star.png" />
//               </div>
//               <div className="subheading">
//                 <div className="budget">Budgeting intervals</div>
//                 <div className="prepara">
//                   Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque
//                   Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
//                   Porttitor.
//                 </div>
//               </div>
//             </div>
//             <div className="predetail">
//               <div className="detailimg">
//                 <img src="/Assets/Images/hex.png" />
//               </div>
//               <div className="subheading">
//                 <div className="budget">Budgeting intervals</div>
//                 <div className="prepara">
//                   Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque
//                   Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
//                   Porttitor.
//                 </div>
//               </div>
//             </div>
//             <div className="predetail">
//               <div className="detailimg">
//                 <img src="/Assets/Images/cube.png" />
//               </div>
//               <div className="subheading">
//                 <div className="budget">Budgeting intervals</div>
//                 <div className="prepara">
//                   Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque
//                   Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
//                   Porttitor.
//                 </div>
//               </div>
//             </div>
//           </div>
//         {/* </div> */}
//       </div>

//       {/* <div className='flex flex-col items-center justify-center m-4'>
//         <img src='/path/to/image.png' alt='feature image' className='w-32 h-32' />
//         <div className='text-center text-xl font-semibold mt-2'>Feature 3</div>
//       </div> */}
//       {/* Add more feature items as needed */}
//     </div>
//   );
// }

// export default Features;
// // md:flex-row md:flex-wrap
