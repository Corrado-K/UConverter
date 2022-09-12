import DBCard from "../components/DashboardCards/DBCard";

import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import Chart from "../components/Chart";

const Dashboard = () => {
     return ( 
          <>
               <div className="items-center md:h-screen w-full md:w-full justify-center bg-[#101120] text-white px-5 py-7 md:px-5">

                    <div className="pt-2">
                         <h2 className="text-lg font-semibold md:ml-10">Dashboard</h2>
                         {/* <div className="flex space-x-10 py-5 mx-5"> */}
                         <div className="flex overflow-x-scroll md:overflow-x-scroll scroll-smooth space-x-4 md:space-x-12 py-5 md:py-7 md:ml-4 hide-scroll-bar">
                              <DBCard />
                              <DBCard />
                              <DBCard />
                              <DBCard />
                         </div>
                    </div>
                    <div className="w-full md:flex">
                         <div className="pt-2 md:w-[67%]">
                              <h2 className="text-lg font-normal md:ml-10">Forex chart</h2>
                              <div className="flex overflow-x-scroll md:overflow-x-scroll scroll-smooth space-x-4 md:space-x-12 py-5 md:py-15 md:ml-4 hide-scroll-bar">
                                   <Chart />
                              </div>
                         </div>
                         
                         <div className="pt-2 md:w-[33%]">
                              <h2 className="text-md font-normal md:ml-10">Recent conversions</h2>
                              <div className="flex overflow-x-scroll md:overflow-x-scroll scroll-smooth space-x-4 md:space-x-12 py-5 md:py-15 md:ml-4 hide-scroll-bar">
                                   <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
                                        {/* <div className="overflow-x-auto"> */}
                                             <table className="w-[100%] text-xs">
                                                  <thead className="rounded-t-lg dark:bg-gray-700">
                                                       <tr className="text-left">
                                                            <th className="px-5 py-3">
                                                                 <span>From</span>
                                                                 <span className="md:mx-11 mx-5"> </span>
                                                                 <span>To</span>
                                                            </th>
                                                            <th className="px-3 md:px-10 py-3">Value</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-transparent">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-transparent">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-transparent">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                       <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                            <td className="px-5 py-4 flex">
                                                                 <span>USD</span>
                                                                 <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                                 <span>GHS</span>
                                                            </td>
                                                            <td className="md:px-10 px-3 py-4">
                                                                 <span className="text-md">USD 100</span>
                                                            </td>
                                                       </tr>
                                                  
                                                  </tbody>
                                             </table>
                                        </div>
                                   {/* </div> */}
                              </div>
                         </div>

                    </div>
                    <div className="pt-2">
                         <h2 className="text-lg font-normal md:ml-10">Common conversions</h2>
                         <div className="flex overflow-x-scroll md:overflow-x-scroll scroll-smooth space-x-4 md:space-x-12 py-5 md:py-15 md:ml-4 hide-scroll-bar">
                              <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
                                   <div className="overflow-x-auto">
                                        <table className="min-w-full text-xs">
                                             <thead className="rounded-t-lg dark:bg-gray-700">
                                                  <tr className="text-left">
                                                       <th className="px-5 py-3">
                                                            <span>From</span>
                                                            <span className="md:mx-11 mx-5"> </span>
                                                            <span>To</span>
                                                       </th>
                                                       <th className="px-3 md:px-10 py-3">Value</th>
                                                       <th className="px-10 py-3 text-right"></th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                       <td className="px-5 py-4 flex">
                                                            <span>USD</span>
                                                            <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                            <span>GHS</span>
                                                       </td>
                                                       <td className="md:px-10 px-3 py-4">
                                                            <span className="text-md">USD 100</span>
                                                       </td>
                                                       <td className="md:px-10 px-5 py-2 text-right">
                                                            <span className="block text-md">GHS 800</span>
                                                            <span className="text-gray-500">1:59 PM</span>
                                                       </td>
                                                  </tr>
                                                  <tr className="text-left border-b border-opacity-20 border-gray-700 bg-transparent">
                                                       <td className="px-5 py-4 flex">
                                                            <span>USD</span>
                                                            <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                            <span>GHS</span>
                                                       </td>
                                                       <td className="md:px-10 px-3 py-4">
                                                            <span className="text-md">USD 100</span>
                                                       </td>
                                                       <td className="md:px-10 px-5 py-2 text-right">
                                                            <span className="block text-md">GHS 800</span>
                                                            <span className="text-gray-500">1:59 PM</span>
                                                       </td>
                                                  </tr>
                                                  <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                       <td className="px-5 py-4 flex">
                                                            <span>USD</span>
                                                            <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                            <span>GHS</span>
                                                       </td>
                                                       <td className="md:px-10 px-3 py-4">
                                                            <span className="text-md">USD 100</span>
                                                       </td>
                                                       <td className="md:px-10 px-5 py-2 text-right">
                                                            <span className="block text-md">GHS 800</span>
                                                            <span className="text-gray-500">1:59 PM</span>
                                                       </td>
                                                  </tr>
                                                  <tr className="text-left border-b border-opacity-20 border-gray-700 bg-transparent">
                                                       <td className="px-5 py-4 flex">
                                                            <span>USD</span>
                                                            <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                            <span>GHS</span>
                                                       </td>
                                                       <td className="md:px-10 px-3 py-4">
                                                            <span className="text-md">USD 100</span>
                                                       </td>
                                                       <td className="md:px-10 px-5 py-2 text-right">
                                                            <span className="block text-md">GHS 800</span>
                                                            <span className="text-gray-500">1:59 PM</span>
                                                       </td>
                                                  </tr>
                                                  <tr className="text-left border-b border-opacity-20 border-gray-700 bg-gray-800">
                                                       <td className="px-5 py-4 flex">
                                                            <span>USD</span>
                                                            <span className="md:mx-10 mx-5"> <HiOutlineSwitchHorizontal className="text-lg"/> </span>
                                                            <span>GHS</span>
                                                       </td>
                                                       <td className="md:px-10 px-3 py-4">
                                                            <span className="text-md">USD 100</span>
                                                       </td>
                                                       <td className="md:px-10 px-5 py-2 text-right">
                                                            <span className="block text-md">GHS 800</span>
                                                            <span className="text-gray-500">1:59 PM</span>
                                                       </td>
                                                  </tr>
                                                 
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
      );
}
 
export default Dashboard;