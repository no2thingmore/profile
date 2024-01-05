import React, { useState, useEffect, useRef } from 'react';
import './intro.css';
import Background from './images/background.jpg';
import Bear from './images/bear.png';
import Header from '../../header';

function Intro() {

    const [marginTop, setMarginTop] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        const updateMarginTop = () => {
            if (imageRef.current) {
                const height = imageRef.current.clientHeight;
                setMarginTop(height / 8); // 이미지 높이의 1/5
            }
        };

        window.addEventListener('load', updateMarginTop);
        window.addEventListener('resize', updateMarginTop);

        // 이벤트 리스너 정리
        return () => {
            window.removeEventListener('load', updateMarginTop);
            window.removeEventListener('resize', updateMarginTop);
        };
    }, []);

    return (
        <>
            <div className='it_container'>
                {/* 배경 */}
                <div className='it_background'>
                
                    <img ref={imageRef} src={Background} alt='배경사진' />
                </div>
                {/* 짧은 소개 (사진 + 소개) */}
                <div className='it_intro_section' style={{ marginTop: marginTop + 'px' }}>
                    <img src={Bear} alt='농담곰' />
                    <div className='it_name-job_intro_wrapper'>
                    
                        {/* 이름 + 직업 */}
                        <div className='it_name-job_section'>
                            {/* 이름 */}
                            <div className='it_name'>
                                김정훈 |
                            </div>
                            {/* 직업 */}
                            <div>
                                웹 개발자
                            </div>
                        </div>
                        <div>
                            나를 소개하는
                            <br />
                            두줄 입니다
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;