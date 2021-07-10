import React from 'react'
import styled from 'styled-components'

const HiddenTextarea = () => {
    return (
        <Textarea>
            
        </Textarea>
    )
}
const Textarea = styled.textarea`
    pointer-events: none;
    opacity:0;
    height: 0;
`

export default HiddenTextarea
