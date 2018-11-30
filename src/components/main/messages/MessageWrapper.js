import styled from "styled-components";

const MessageWrapper = styled.div`
    border-style: solid;
    border-width: 1px;
    color: blue;
    background: white;
    width: 300px;
    position: relative;
    left: ${props => (props.sentByUser) ? '150px' : '0px' };
`;

export default MessageWrapper;
