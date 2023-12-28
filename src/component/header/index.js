import './header.css';
import D from './D.png';
import { Link } from 'react-router-dom';

function Header() {

    // 최상단으로 스크롤
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤
        });
    };

    return (
        <>
            <div className='hd_container'>
                <div className='hd_homepage_link'>
                    <Link to="/" onClick={scrollToTop}>
                        <img src={D} alt='D'/>JHun
                    </Link>
                </div>
                <div className='hd_sebmenu_section'>
                    <span><Link>About me</Link></span>
                    <span><Link>Skill</Link></span>
                    <span><Link>Repository</Link></span>
                    <span><Link>Project</Link></span>
                    <span><Link>Contact</Link></span>
                </div>
            </div>
        </>
    )
}

export default Header;