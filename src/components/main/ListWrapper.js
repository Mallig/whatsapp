import styled from 'styled-components'

const ListWrapper = styled.div`
    font-size: ${props => props.fontSize || '18'}px;
    height: ${props => props.inputHeight || '50vh'};
    overflow: scroll;
`

export default ListWrapper