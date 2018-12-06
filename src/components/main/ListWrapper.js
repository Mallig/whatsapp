import styled from 'styled-components'

const ListWrapper = styled.div`
    font-size: 18px;
    height: ${props => props.inputHeight || "50vh"};
    overflow: scroll;
`

export default ListWrapper