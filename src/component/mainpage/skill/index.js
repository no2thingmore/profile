import './skill.css'
import React, { useEffect } from 'react';
import HTML5Logo from './images/html5.svg';
import CSS3Logo from './images/css3.svg';
import JSLogo from './images/javascript.svg';
import ReactLogo from './images/react.svg';
import NodeJsLogo from './images/nodejs.svg';
import SequelizeLogo from './images/sequelize.svg';
import GithubLogo from './images/github.svg';
import SourcetreeLogo from './images/sourcetree.svg';
import LinkIcon from './images/link.png';


function Skill() {


    // 이미지 배치
    useEffect(() => {
        const adjustImageWidth = () => {
            const images = document.querySelectorAll('.sk_content_info img');
    
            images.forEach(img => {
                img.style.width = '5vw';
            });
        };
        adjustImageWidth();
        window.addEventListener('resize', adjustImageWidth);
        return () => {
            window.removeEventListener('resize', adjustImageWidth);
        };
    }, []);
    

    return (
        <>
            <div className='sk_container'>
                <div className='sk_skill_section'>
                    <img src={LinkIcon} alt='Link'/>
                    Skill
                </div>
                <div className='sk_info'>
                    <div className='sk_f_section'>
                        <div className='sk_title'>
                            FRONT
                        </div>
                        <div className='sk_content_info'>
                            <img src={HTML5Logo} alt='HTML5'/>
                            <img src={CSS3Logo} alt='CSS3'/>
                            <img src={JSLogo} alt='JS'/>
                            <img src={ReactLogo} alt='React'/>
                        </div>
                    </div>
                    <div className='sk_b_section'>
                        <div className='sk_title'>
                            BACK
                        </div>
                        <div className='sk_content_info'>
                            <img src={NodeJsLogo} alt='NodeJs'/>
                            <img src={SequelizeLogo} alt='Sequelize'/>
                        </div>
                    </div>
                    <div className='sk_var_section'>
                        <div className='sk_var_title'>
                            버전관리
                        </div>
                        {/* 기술 들어갈 공간  */}
                        <div className='sk_var_content_section'>
                            <img src={GithubLogo} alt='github' />
                            <img src={SourcetreeLogo} alt='sourcetree' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;