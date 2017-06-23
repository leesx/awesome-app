import React, { Component } from 'react';
import { Link } from 'react-router'


export default function AdsSection(props){
	
    return (
        <div className="tb-ads-section">
            <div className="ads-img left-ads" style={{

                backgroundImage: `url("//gw.alicdn.com/tps/i2/TB1nQXGJVXXXXcEXXXXKKOh2VXX-432-567.jpg_q50.jpg?imgtag=avatar")`,
            }}>
            </div>
            <div className="right-ads">
                <div className="ads-top">
                    <div className="ads-img" style={{
                        backgroundImage: `url("//img.alicdn.com/tps/TB19RaGLpXXXXcDXpXXXXXXXXXX-333-261.jpg_q50.jpg?imgtag=avatar")`,
                    }}>
                    </div>
                    <div className="ads-img" style={{
                        backgroundImage: `url("//img.alicdn.com/imgextra/i1/75/TB28_3CXcIa61Bjy0FbXXbWXpXa_!!2-subaru.png")`,
                    }}>
                    </div>
                </div>
                <div className="ads-bottom">
                    <div className="ads-img" style={{
                        backgroundImage: `url("//gw.alicdn.com/tps/TB1MzfaLpXXXXaXXXXXXXXXXXXX-345-306.jpg_q50.jpg")`,
                    }}>
                    </div>
                    <div className="ads-img" style={{
                        backgroundImage: `url("//img.alicdn.com/imgextra/i3/27/TB21MzojFXXXXXbXpXXXXXXXXXX_!!27-2-subaru.png")`,
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
