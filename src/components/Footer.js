import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <SocialLinks>
                <SocialLink target="_blank" href="https://www.instagram.com/mr_shank2/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="inherit" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </SocialLink>
                <SocialLink target="_blank" href="https://www.facebook.com/1Shank1/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="inherit" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                </SocialLink>
                <SocialLink target="_blank" href="https://www.linkedin.com/in/emmanuel-ever-telewik-9252ab18b/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="inherit" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </SocialLink>
                <SocialLink target="_blank" href="https://github.com/EmmanuelEver">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="inherit" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                </SocialLink>
            </SocialLinks>
            <Copyright>
                Created by <SpanLink href="https://emmanueltelewik.netlify.app/">@dalbong</SpanLink>
                <br/>
                © 2021 Random Universe. All rights reserved.
            </Copyright>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    width: 100%;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    z-index: 5;
`
const Copyright = styled.p`
    line-height: 1.4;
    font-size: .8rem;
    text-align: center;
    color: #00cec9;
    opacity: .45;
    margin-top: .5rem;
`
const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SocialLink = styled.a`
    cursor: pointer;
    margin: 0 .35rem;
    fill: #8385A9;
    
    &:hover svg{
        fill: #00cec9;
    }
`
const SpanLink = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover{
        text-decoration: underline;
    }
`

export default Footer
