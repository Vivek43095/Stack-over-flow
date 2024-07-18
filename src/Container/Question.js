import { useEffect, useState } from "react";
import Card from './Card'
import styled from "styled-components";
import { useParams } from "react-router-dom";
const ROOT_API='https://api.stackexchange.com/2.2/';
const QuestionWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 5%;
`;
const AlertWrapper = styled.div`
text-align:center;
`
const Question = () =>{
const [data,setData] = useState();
const [loading, setloading] = useState(true);
const [error,setError] = useState();
const {id} = useParams();
useEffect(()=>{
const fetchData = async()=>{
try{
const data= await
fetch(`${ROOT_API}questions/${id}?site=stackoverflow`);
const dataJson = await data.json();
if(dataJson){
console.log(dataJson);
setData(dataJson);
setloading(false);
}
}catch(error){
setError(error);
setloading(true);
}
}
fetchData();
},[])

if(loading || error){
return (
<AlertWrapper>
{loading ? 'Loading ': error}
</AlertWrapper>
)
}
return(
<QuestionWrapper>
<Card key={data.items[0].question_id}
data={data.items[0]}/>
</QuestionWrapper>
)
}
export default Question;
