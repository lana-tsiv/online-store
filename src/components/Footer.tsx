import React from 'react';
import RSLogo from './../assets/icons/rs_school.svg'
import GitLogo from './../assets/icons/github-mark.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content-wrap'>
                <div className='footer__social-media'>
                    <div className='social-media__item'>
                        <div className='social-media__logo'>
                            <a className='social-media__logo-link' href='https://rs.school/js' rel='noreferrer'
                               target='_blank'>
                                <img className='social-media__logo-image' src={RSLogo} alt='RSSchool logo'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer__contacts'>
                    <div className='contacts-wrap'>
                        <div className='contact__item'>
                            <a className='contact__item-link' href='https://github.com/lana-tsiv' rel='noreferrer'
                               target='_blank'>
                                <img className='contact__item-image' src={GitLogo} alt='RSSchool logo'/>
                                <p className='contact__item-name'>Lana Tsiushkevich</p>
                            </a>
                        </div>
                        <div className='contact__item'>
                            <a className='contact__item-link' href='https://github.com/Kavume' rel='noreferrer'
                               target='_blank'>
                                <img className='contact__item-image' src={GitLogo} alt='RSSchool logo'/>
                                <p className='contact__item-name'>Ekaterina Gorbacheva</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer__info'>Online Store, 2022</p>
        </div>
    );
};

export default Footer;