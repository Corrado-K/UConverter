import { HiSearch } from "react-icons/hi";

const Searchbar = () => {
     return ( 
          <>
               <div className="relative">
                    <HiSearch className="w-4 text-[#242a45] absolute top-2.5 left-3" />
                    <input className="pl-10 placeholder:text-[#484e6dc6] p-1 bg-white w-64 border-2 rounded-2xl" placeholder="Search..." />
               </div>
          </>
      );
}
 
export default Searchbar;