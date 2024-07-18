import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Question from './Question';
import Feed from './Feed'
import Header from './Header'
const GlobalStyle = createGlobalStyle`
body{
margin:0;
padding:0;
font-family:Tahoma
}
`;
const AppWrapper = styled.div`
text-align:center;
`
class App extends Component{
render(){
return(
<>
<GlobalStyle/>
<AppWrapper>
<Header/>
<Router>
<Routes>
<Route exact path="/" Component={Feed}/>
<Route path="/questions" Component={Feed}/>
<Route path='/questions/:id' Component={Question} />
</Routes>
</Router>
</AppWrapper>
</>
)
}
}
export default App;
