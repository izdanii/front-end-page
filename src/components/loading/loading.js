import styled from "styled-components";

export const Loading=styled.div`
border: 5px solid white;
border-radius: 50%;
border-top: 5px solid cyan;
width: 50px;
height: 50px;
margin: 20px auto;
text-align: center;
animation: spin .4s linear infinite;

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`