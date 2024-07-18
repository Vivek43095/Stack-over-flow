import styled from "styled-components";
const OwnerWrapper = styled.div`
display: flex;
flex-basis: 40%;
align-items: center;
justify-content: flex-end;
`;
const ImageWrapper = styled.img`
display: block;
width: 32px;
height: 32px;
border-radius: 50%;
`;
const Name = styled.h3`
margin-left: 5%;
`;
function Owner ({data}){
    return(
        <OwnerWrapper>
              <ImageWrapper src={data.owner.profile_image} />
              <Name>{data.owner.display_name}</Name>
         </OwnerWrapper>
    )
}
export default Owner;