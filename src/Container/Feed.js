import { Component } from "react";
import styled from "styled-components";
import Card from './Card'
import { Link } from "react-router-dom";
const CardLink = styled(Link)`
text-decoration:none;
color:inherit;
`;
const AlertWrapper = styled.div`
text-align:center;
`;
const FeedWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 5%;
`;
class Feed extends Component{
constructor(){
super();
this.state={
data:[],
loading:true,
error:''
}
}
async componentDidMount(){
try{
const data = await
fetch('https://api.stackexchange.com/2.2/questions?site=stackoverflow');
const datajson = await data.json();
if(datajson){
this.setState({
data:datajson,
loading:false
})
}
}catch(error){
this.setState({
error:error.message,
loading:true
});
}
}
render(){
const {data,loading,error} = this.state;
if(loading || error){
return (<AlertWrapper>{loading ?
'Loading...':error}</AlertWrapper>)
}
return(
<FeedWrapper>
{
data.items.map(item=>
{
return (<CardLink key={item.question_id}
to={`/questions/${item.question_id}`}><Card data={item}/></CardLink>)
}
)
}
</FeedWrapper>
)
}
}
export default Feed;