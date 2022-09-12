
import "flag-icons";

const DBCard = () => {
     return ( 
          <>
               <div className="block justify-center text-center">
                    <div className="bg-gradient-to-r text-black from-[#2783B7] to-[#1C2860] w-48 h-32 md:w-64 md:h-32 py-2 md:py-5 rounded-lg items-center grid grid-cols-2 place-content-center gap-4 px-4">
                         {/* <div className="mt-2 flex mx-2 text-xs md:text-lg">
                              {'Number of tasks on list'}
                         </div>
                         <div className="block text-center mt-5">
                              <h3 className="text-xs md:text-base font-normal">{'Jan 10, 2001'}</h3>
                         </div> */}
                         <p className="text-2xl font-semibold">
                              USD
                         </p>
                         <p className="text-lg font-semibold">
                              2.13%
                         </p>
                         <p className="text-md font-medium">
                              <span class="fi fi-us text-4xl"></span> 
                         </p>
                         <p className="text-4xl font-semibold">$</p>
                         {/* <div className="text-xl font-semibold h-12 w-16">
                              USD
                         </div> */}
                         {/* <div className="h-12 w-16">
                              +2.13%
                         </div>
                         <div className="h-12 w-16">
                              Flag here
                         </div>
                         <div className="h-12 w-16">
                              Currency here $
                         </div> */}
                    </div>
               </div>
          </>
      );
}
 
export default DBCard;