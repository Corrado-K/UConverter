import Button from "./NavComponents/Button";
import Searchbar from "./NavComponents/Searchbar";
import { HiUser, HiBell } from "react-icons/hi";


const Navbar = ({page}) => {
     return ( 
          <>
               <div className="hidden w-full h-12 p-1 lg:flex lg:justify-between lg:border-b-2">
                    
                    {/* Page name */}
                    <h2 className="text-xl font-semibold text-white">{page}</h2>
                    {/* End of page name */}

                    {/* Notification, user buttons */}
                    <div className="flex space-x-2">
                         {/* Search bar */}
                              <Searchbar />
                         {/* End of search bar */}  
                         <Button icon={HiBell} />
                         <Button icon={HiUser} />
                    </div>
                    {/* End of help, notification, user buttons */}
               </div>
          </>
      );
}
 
export default Navbar;