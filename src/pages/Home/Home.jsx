import Container from "../../components/Container";
import Navbar from "../../components/Navbar";


const Home = () => {
     return ( 
          <Container>
               <Navbar page="Home"/>
               <div className="lg:h-[90%] pb-4 lg:overflow-y-auto hide-scroll-bar text-white">
                    <div>
                         <h3 className="text-lg my-4">Recent Projects</h3>
                         <div className="mt-5 flex w-full overflow-x-auto space-x-4 hide-scroll-bar lg:space-x-12">
                              
                              {/* limited to 4 projects */}

                         </div>     
                    </div>              
               </div>
          </Container>
      );
}
 
export default Home;