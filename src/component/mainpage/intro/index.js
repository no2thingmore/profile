import './intro.css';
import Background from './images/background.jpg';

function Intro() {
    return (
        <>
            <div className='it_container'>
                {/* 배경 */}
                <div className='it_background'>
                    <img src={Background} alt='배경사진' />
                </div>
                {/* 짧은 소개 (사진 + 소개) */}
                <div>
                    {/* 사진 */}
                    <div>
                        
                    </div>
                    {/* 이름 + 직업 | 소개 */}
                    <div>
                        {/* 이름 + 직업 */}
                        <div>
                            {/* 이름 */}
                            <div>

                            </div>
                            {/* 직업 */}
                            <div>

                            </div>
                        </div>
                        {/* 짧은 소개 */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;