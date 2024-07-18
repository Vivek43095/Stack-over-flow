import Owner from './Owner'
import styled from "styled-components";

const CardWrapper = styled.div`
text-align: left;
padding: 1%;
background: lightGray;
border-radius: 5px;
margin-bottom: 2%;
`;
const MetaWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 2%;
`;
const CountWrapper = styled.div`
flex-basis: 80%;
`;
const TitleWrapper = styled.h2`
width: 100%;
padding-bottom: 10px;
text-align: center;
border-bottom: 1px solid darkGray;
`;


const Card = ({data}) =>{
return(
<CardWrapper>
<TitleWrapper>{data.title}</TitleWrapper>
<MetaWrapper>
<CountWrapper>
{`Views: ${data.view_count} | Answers:
${data.answer_count}`}
</CountWrapper>
<Owner data={data}/>
</MetaWrapper>
</CardWrapper>
)
}
export default Card;