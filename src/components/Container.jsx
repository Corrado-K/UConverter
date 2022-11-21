
const Container = ({children}) => {
     return ( 
          <div className="w-full max-w-full h-screen pt-16 px-5 lg:pt-5 lg:px-8">
               {children}
          </div>
      );
}
 
export default Container;