import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { HiArrowsRightLeft, HiOutlineArrowPath } from "react-icons/hi2";
import Change from "../../icons/change.svg";
import Metrics from "../../icons/metrics.svg";
import { useState} from "react";

const Units = () => {

     const [unitToMeasure, setUnitToMeasure] = useState('');
     
     const [firstUnit, setFirstUnit] = useState('first');
     const [secondUnit, setSecondUnit] = useState('second');
     const [value, setValue] = useState(1);

     const [result, setResult] = useState(0);
     

     const units = [
          "acceleration", "angle", "area", "charge", "current", "digital", "energy", "force", "mass"
     ];



     
     // useEffect(() => {
     //      const options = {
     //           method: 'GET',
     //           headers: {
     //                'X-RapidAPI-Key': 'be20aa17c0msh09f1059575d68eep11bb2ajsnb614e309f465',
     //                'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com'
     //           }
     //      };
          
     //      fetch('https://zylalabs.com/api/189/measurement+unit+conversion+api/200/measurement+types')
     //           .then(response => response.json())
     //           .then(data => {
     //                setUnits(data)
     //                console.log(data)
     //           })
     //           .catch(err => console.error(err));
     // }, []);
     
     // console.log(units);

     const swapButton = (event) => {
          event.preventDefault();
          // on click the button
          let temp = firstUnit;
          // change the first unit to the second unit
          setFirstUnit(secondUnit);
          // change the second unit to the first unit
          setSecondUnit(temp);

          console.log(firstUnit);
          console.log(secondUnit);
     }


     const handleConversion = (event) => {
          event.preventDefault();
          // if unit to measure is set
          // find the units for that scientific measure
          console.log("Submitted");
          setResult(value * 10);

     }



     return ( 
          <Container>
               <Navbar page="Units"/>
               <div className="lg:h-[90%] py-4 lg:overflow-y-auto hide-scroll-bar text-white">
                    <h1 className="text-xl font-semibold mb-4">Unit conversion</h1>
                    <div className="w-full lg:grid lg:grid-cols-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-800 py-8 px-5 lg:px-0 rounded-md">
                         <div className="lg:flex" >
                              <img className="mx-auto lg:block hidden" src={Metrics} width='180' alt="" />
                              <img className="mx-auto lg:block" src={Change} width='180' alt="" />      
                         </div>
                         
                         <p className="font-medium text-sm leading-loose lg:px-5">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sed aut, numquam totam fuga reprehenderit dolores iusto vel. Voluptate, voluptates? Odit natus impedit, aliquam ad recusandae exercitationem. Quidem, sed error.
                         </p>
                    </div>

                    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-800 mt-10 rounded-md p-5">
                         <div className="lg:p-2 w-full mb-5 rounded-md lg:grid lg:grid-cols-2">
                              <div>
                                   <h2 className="text-lg font-bold">Perform you calculations here</h2>
                                   <p className="text-sm">Change data from one unit to another</p>     
                              </div>
                              
                              <div className="mt-5 lg:mt-0">
                                   <label className="ml-3 lg:ml-0 font-semibold">Measurement</label>
                                   <select className="w-full p-2 rounded-full border-2 border-gray-400 bg-white" name="measurement" onChange={(e) => setUnitToMeasure(e.target.value)}>
                                        <option value=''>Choose a measurement</option>
                                        {
                                             units.map((unit, index) => 
                                                  <option key={index} value={unit}>{unit}</option>
                                             )
                                        }
                                   </select>
                              </div>
                         </div>
                         <form className="space-y-5 mb-5" onSubmit={handleConversion}>
                              <div className="block">
                                   <label className="ml-3 font-semibold">Value</label>
                                   <input type="number" className="w-full pl-5 p-2 rounded-full border-2 border-gray-400 bg-white disabled:bg-gray-200" placeholder="Value" disabled={ unitToMeasure === '' ? true : false } onKeyDown={(e) => e.key ==='Enter' ? e.preventDefault() : null } defaultValue={ unitToMeasure === '' ? 0 : value} onChange={(e) => setValue(e.target.value)}/>     
                              </div>
                              <div>
                                   <h2 className="ml-3 font-semibold">Units</h2>
                                   <div className="flex space-x-5">
                                        <select className="w-full pl-5 p-2 rounded-full border-2 border-gray-400 bg-white" placeholder="Unit 1" onChange={(e) => setFirstUnit(e.target.value)}>
                                            {
                                                  // units.map((unit) => 
                                                  //      <option>{unit}</option>
                                                  // )
                                            }
                                             <option>cm</option>
                                             <option>dm</option>
                                             <option>mm</option>
                                             <option selected value={'fire'}>{firstUnit}</option>
                                        </select>
                                        <button onClick={swapButton} className="rounded-full bg-cyan-200 p-3 text-xs hover:bg-cyan-400 shadow-lg"><HiArrowsRightLeft size={20}/></button>     
                                        <select className="w-full pl-5 p-2 rounded-full border-2 border-gray-400 bg-white" placeholder="Unit 2" onChange={(e) => setSecondUnit(e.target.value)}>
                                             <option>cm</option>
                                             <option>dm</option>
                                             <option>mm</option>
                                             <option selected value={'water'}>{secondUnit}</option>
                                        </select>    
                                   </div>
                              </div>
                              
                              <div className="mt-10">
                                   <button type="submit" className="rounded-full mx-auto lg:mx-0 bg-cyan-900 text-white p-3 text-sm hover:bg-cyan-400 flex space-x-2 shadow-lg"><span>Convert</span><HiOutlineArrowPath size={16}/></button>     
                              </div>

                         </form>

                         <div className="bg-gray-200 p-3 w-full mb-5 rounded-md flex">
                              <p className="text-lg font-semibold">Result: <span className="font-normal">{value} {firstUnit} =</span> <span className="font-normal">{result} {secondUnit}</span></p>
                         </div>
                         <div className="bg-gray-200 p-3 w-full mb-5 rounded-md">
                              <p className="text-sm">All calculations were done using an API from Rapid Apis</p>
                         </div>
                    </div>

                    

               </div>
          </Container>
      );
}
 
export default Units;