import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p>경기도 성남시</p>
                <p>beam307@naver.com <u></u> 010-xxxx-xxxx</p>
                <p>©2019 OpenStudy Corp</p>
            </div>
        );
    }
}

export default Footer;
