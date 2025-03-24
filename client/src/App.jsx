import Routing from "./Component/Routing";
import "./App.css"

import CustomThemeProvider from "./Component/ThemeContext";

const App = () => {
  return (
    
      <CustomThemeProvider>
        <div className=" w-full App" >
        <Routing/>
        </div>
      </CustomThemeProvider>
     
  
  );
};

export default App;