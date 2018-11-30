import styled from "styled-components";

const MessageContent = styled.div`
    font-family: ${ props => props.theme.font };
    color: red;
    text-align: right;
`;

export default MessageContent;