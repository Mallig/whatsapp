import styled from "styled-components";

const MessageContent = styled.p`
    font-family: ${ props => props.theme.font };
    color: black;
    text-align: right;
`;

export default MessageContent;