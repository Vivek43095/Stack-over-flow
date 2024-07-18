import styled from "styled-components"
const HeaderWrapper = styled.div`
background-color:orange;
height:100%;
text-align:center;
display:flex;
flex-direction:column;
color:white;
align-items:center;
`;
const Title = styled.h1`
 pointer-events:none;
`;
const Header = ()=>{
return(
<HeaderWrapper>
<Title>Stackoverflow Community Feed</Title>
</HeaderWrapper>
)
}
export default Header;