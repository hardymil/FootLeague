import styled from 'styled-components';

export const StyledList = styled.ul`
    margin:0;
    padding:0;
    li{
        background: #fff;
        list-style-type:none;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:10px 0;
        padding:10px;
        transition-duration: 0.3s;
        &:nth-child(2n){
            background:red;
        }
        &:hover{
            background: #e1e1e1;
        }
        img{
            width:50px;
        }
    }
`