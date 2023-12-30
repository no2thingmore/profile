import './skill.css'
import React, { useEffect } from 'react';
import HTML5 from './images/html5.svg';
import CSS3 from './images/css3.svg';
import JS from './images/js.svg';
import ReactLogo from './images/react.svg';
import Vue from './images/vue.svg';


function Skill() {

    useEffect(() => {
        const adjustImageWidth = () => {
            const images = document.querySelectorAll('.sk_content_info img');
    
            images.forEach(img => {
                img.style.width = '5vw';
            });
        };
    
        // 최초 로드 시 함수 실행
        adjustImageWidth();
    
        // 윈도우 크기가 변경될 때마다 함수 실행
        window.addEventListener('resize', adjustImageWidth);
    
        // 클린업 함수
        return () => {
            window.removeEventListener('resize', adjustImageWidth);
        };
    }, []);
    

    return (
        <>
            <div className='sk_container'>
                <div className='sk_skill_section'>
                    # Skill
                </div>
                <div className='sk_info'>
                    <div className='sk_f_section'>
                        <div className='sk_title'>
                            PRONT
                        </div>
                        <div className='sk_content_info'>
                            <img src={HTML5} alt='HTML5'/>
                            <img src={CSS3} alt='CSS3'/>
                            <img src={JS} alt='JS'/>
                            <img src={ReactLogo} alt='React'/>
                            <img src={Vue} alt='Vue'/>
                        </div>
                    </div>
                    <div>
                        <div className='sk_title'>
                            BACK
                        </div>
                        <div className='sk_content_info'>
                            <img src={HTML5} alt='HTML5'/>
                            <img src={CSS3} alt='CSS3'/>
                            <img src={JS} alt='JS'/>
                            <img src={ReactLogo} alt='React'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;