import { HiOutlineViewGrid, 
         HiOutlineScale, 
         HiOutlineCurrencyDollar, 
         HiOutlineHeart, 
         HiOutlineClock } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const sidebarMenu = [
        {
          label: "Menu",
          children: [
            { id:1, name: "Dashboard", icon: HiOutlineViewGrid, path: '/' },
            { id:2, name: "Units", icon: HiOutlineScale, path: '/units'  },
            { id:3, name: "Currency", icon: HiOutlineCurrencyDollar, path: '/currency' },
            { id:4, name: "Saved", icon: HiOutlineHeart, path: '/saved' },
            { id:5, name: "History", icon: HiOutlineClock, path: '/settings' },
          ],
        }
      ];

    return (
        <>
            
            <div className="hidden md:flex md:flex-col md:justify-start md:min-h-screen md:w-[20%]">
                {/* Title */}
                <div className="p-8">
                    <h1 className="text-xl font-semibold text-white">UConverter</h1>
                </div>
                {/* <Sidebar content /> */}
                <div className="px-8 -mt-10 divide-y divide-gray-500">
                {/* create a map function that calls menu from an array */}
                {
                    sidebarMenu.map((menuLabel) => (
                        <div className="py-10">
                            <span className='tracking-widest text-[#767676] uppercase text-xs'>
                                {menuLabel.label}
                            </span>
                            <ul className="flex flex-col pt-5 space-y-6 text-sm ml-2">
                                {
                                    menuLabel.children.map((menuItem, index) => (
                                        <li key={menuItem.id} className="flex items-center space-x-4 group rounded-lg w-fit bg-transparent hover:bg-[#7caabdb4] hover:cursor-pointer hover:rounded-lg hover:w-fit hover:px-2">
                                            <Link to={menuItem.path}>
                                                <span className="flex flex-nowrap py-2 text-white rounded-xl">     
                                                    {/* <img className="text-white fill-current mr-2" src={menuItem.icon} alt=""/> */}
                                                    <menuItem.icon className='text-xl mr-2 text-white' />
                                                    {menuItem.name}
                                                </span>
                                                
                                            </Link>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                    ))
                }
                
                </div>
            </div>
            
        </>
    );
}

export default Sidebar;