import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Feed from "./Feed";
import Questions from "./Questions";
function App() {
  return (
    <>
         
    <Router>
      <Routes>
          <Route path="/" Component={Feed}/>
          <Route path="/questions/:id" Component={Questions}/>
      </Routes>
    </Router>


    
    

   
    </>
     
  );
}

export default App;
