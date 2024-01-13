import React from 'react'
import styled from 'styled-components'

const AlertWrapper = styled.div`
    background: #ff000030;
    color: #e00909;
    border: 1px solid #e00909;
    padding: .6rem;
    border-radius: 7px;
    text-align: center;
    margin: 1rem 0;
`;

function AlertText() {
    return (
        <AlertWrapper>
            Please Fill Form Currectly!
        </AlertWrapper>
    )
}

export default AlertText
