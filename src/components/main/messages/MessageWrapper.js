import styled from "styled-components";

const MessageWrapper = styled.div`
    border-style: solid;
    border-width: 1px;
    color: blue;
    background: ${props => (props.sentByUser) ? 'white' : 'beige' };
    width: 30%;
    position: relative;
    left: ${props => (props.sentByUser) ? '50%' : '10%' };
    padding: 10px;
`;

export default MessageWrapper;
