
const Button = (props) => {
     return ( 
          <>
               <div className="p-2 rounded-2xl">
                    <props.icon size={24} className="w-6 text-white"/>
               </div>
          </>
      );
}
 
export default Button;