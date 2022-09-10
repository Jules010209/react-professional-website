import React from 'react';
import Footer from '../components/Footer';
import { Icon } from '../components/icons/styles/icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#"><Icon className='fa-solid fa-shield-halved'/>Security</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-circle-user'/>Clients</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-database'/>Database</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#"><Icon className='fa-solid fa-store'/>Marketing</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-magnifying-glass'/>Consulting</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-code'/>Development</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-paintbrush'/>Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#"><Icon className='fa-solid fa-flag'/>France</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-flag-usa'/>United States</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-flag'/>United Kingdom</Footer.Link>
                        <Footer.Link href="#"><Icon className='fa-solid fa-info'/>Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className='fab fa-facebook-f'/>Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className='fab fa-twitter'/>Twitter</Footer.Link>
                        <Footer.Link href="#"><Icon className='fab fa-instagram'/>Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className='fab fa-youtube'/>YouTube</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}