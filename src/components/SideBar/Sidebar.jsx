import { useState } from "react";
import { HiOutlineViewGrid, 
         HiOutlineScale, 
         HiOutlineCurrencyDollar, 
         HiOutlineHeart, 
         HiOutlineClock,
         HiMenu } from "react-icons/hi";
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

    const [showSidebar, setShowSidebar] = useState(false);

    const displayHandler = () => {
        setShowSidebar(!showSidebar);
        // console.log(showSidebar);
    }


    return (
        <>
            
            <div className="lg:flex lg:flex-col lg:justify-start border-r border-[#2a2c52] bg-[#101120] lg:min-h-screen lg:h-max lg:w-[20%]">

                <div className="lg:hidden w-full py-5 pl-5 mobile-nav bg-[#131827] fixed flex items-center">
                    <button onClick={displayHandler}>
                        <HiMenu size={24} className="w-8 text-white"/>
                    </button>
                    <div className="mx-[20%] flex items-center  text-white space-x-1">
                        {/* <Squares2X2Icon className="w-6" /> */}
                        {/* <h1 className="text-lg log">U</h1> */}
                        <h2 className="text-xl font-medium">UConverter</h2>
                    </div>
                    
                </div> 

                {/* <Sidebar content /> */}
                <div className={`top-16 lg:top-0 lg:pt-0 pt-5 left-0 w-60 fixed h-full z-40 lg:h-auto lg:mt-1 bg-[#101120] lg:px-0 px-7 lg:translate-x-0 ease-in duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Logo */}
                    <div className="lg:flex hidden w-fit m-2 my-5 flex-shrink">
                        <div className="mx-5 flex items-center space-x-4 text-white">
                            <h1 className="text-5xl log">U</h1>
                            <h2 className="text-2xl font-medium">UConverter</h2>
                        </div>
                    </div>
                    {/* End of logo */}
                    <ul> 
                    {
                        sidebarMenu.map((menu, index) => (
                            <div className="py-5 px-8" key={index}>
                                <span className='tracking-widest text-[#cbcbcb] uppercase text-xs'>
                                    {menu.label}
                                </span>
                                <ul className="pt-5">
                                {
                                    menu.children.map((menuItem) => (
                                    <Link key={menuItem.id} to={menuItem.path} onClick={displayHandler}>
                                        <li  className="flex items-center space-x-5 text-md text-white mb-5">
                                            
                                            <div className="py-2 flex space-x-4 hover:text-cyan-400">
                                                <menuItem.icon className='text-xl mr-2 text-white hover:text-cyan-400' />
                                                <p>{menuItem.name}</p>
                                            </div>

                                        </li>
                                    </Link>
                                    ))
                                }  

                                </ul>
                                
                                
                            </div>    
                        ))
                    } 
                    </ul>  
                </div>
                {/* End of sidebar content */}

            </div>


            
        </>
    );
}

export default Sidebar;