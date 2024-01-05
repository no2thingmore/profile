import './repository.css';
import LinkIcon from './images/link.png';
import Git from './images/github.png';
import Velog from './images/velog.png';
import { Link } from 'react-router-dom';

function Repository() {
    return (
        <>
            <div className='rp_container'>
                <div className='rp_title_section'>
                    <img src={LinkIcon} alt='Link' />
                    Repository
                </div>
                <div className='rp_section_info'>
                    <div className='rp_content_section'>
                        {/* 아이콘 + 제목 */}
                        <div className='rp_content_title'>
                            <div className='rp_content_icon'>
                                <img src={Git} alt='github'/>
                            </div>
                            <div className='rp_content_name'>
                                github
                            </div>
                        </div>
                        {/* 내용 공간 */}
                        <div className='rp_list_section'>
                            <div className='rp_list_title_name'>
                                개발 목록
                            </div>
                            <div className='rp_links_section'>
                                <div>
                                    <Link to='/'>
                                        준비중입니다.
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        준비중입니다.
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        준비중입니다.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rp_content_section'>
                        {/* 아이콘 + 제목 */}
                        <div className='rp_content_title'>
                            <div className='rp_content_icon'>
                                <img src={Velog} alt='velog'/>
                            </div>
                            <div className='rp_content_name'>
                                velog
                            </div>
                        </div>
                        {/* 내용 공간 */}
                        <div className='rp_list_section'>
                            <div className='rp_list_title_name'>
                                작성 목록
                            </div>
                            <div className='rp_links_section'>
                                <div>
                                    <Link to='/'>
                                        준비중입니다.
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        준비중입니다.
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        준비중입니다.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Repository;