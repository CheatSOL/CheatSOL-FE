import styled from "styled-components";

export const StyledNewsItemParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    overflow-y: scroll;

    & div {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding: 10px;
    }

    & .youtube-title {
        font-weight: 400;
    }
`;

export const StyledImageDiv = styled.div`
    & img{
    max-width: 180px;
    height: auto;
    border-radius: 10px;
    }
`;