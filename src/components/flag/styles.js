import styled from 'styled-components'

export const FlagWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;

    img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }

    span {
        cursor: pointer;
        &:hover {
            font-weight: 500;
        }
    }
`
