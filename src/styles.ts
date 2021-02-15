import styled from 'styled-components';
import palette from './themes/palette';

export const Container = styled.div`
    padding: 20px;
    background-color: ${palette.backgroundColor};
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 260px;
    justify-content: space-between;
    margin-top: 5px;
`

export {}