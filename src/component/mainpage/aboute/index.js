import './about.css';

function About() {

    return (
        <>
            <div className='ab_container'>
                <div className='ab_about_container'>
                    About
                </div>
                <div className='ab_section'>
                    <div className='ab_title'>
                        <div>이름</div>
                        <div>생년월일</div>
                        <div>주소지</div>
                    </div>
                    <div className='ab_content'>
                        <div>홍길동</div>
                        <div>2000년 10월 06일</div>
                        <div>서울 금천</div>
                    </div>
                    <div className='ab_title'>
                        <div>연락처</div>
                        <div>이메일</div>
                        <div>학력</div>
                    </div>
                    <div className='ab_content'>
                        <div>010-0000-0000</div>
                        <div>qwer@gmail.com</div>
                        <div>대학교 졸</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;