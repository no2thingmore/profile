import './footer.css';
import { Link } from 'react-router-dom';
import Up from './images/up.png';
import Git from './images/git.png';
import Mail from './images/mail.png';
import velog from './images/velog.png';

function Footer() {

    // 최상단으로 스크롤
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤
        });
    };

    return (
        <>
            <div className='ft_container'>
                <div><Link to="/" onClick={scrollToTop}><img src={Up} alt='upbutton'/></Link></div>
                <div className='ft_icon_section'>
                    <div><Link><img src={Mail} alt='mail' /></Link></div>
                    <div><Link to="https://github.com/no2thingmore" target="_blank"><img src={Git} alt='github' /></Link></div>
                    <div><Link to="https://velog.io/@no2thingmore/posts" target="_blank"><img src={velog} alt='velog' /></Link></div>
                </div>
                <div>Copyright © 2023. JungHun. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer;