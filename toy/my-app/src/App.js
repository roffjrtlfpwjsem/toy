// 메인페이지 spa 싱글페이지 어플리케이션
import React, { Component } from 'react'; // 리액트 라이프러리
import './reset.css'; // 초기 css
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // 라우터 라이브러리

import { Home, Login, Join, List, ListDetail, ListState} from './pages';

class App extends Component {
    render() {
        return (
            
            <Router>
                {/* 라우터 */}

                <div className="spa-link-wrap">
                    {/* 각페이지 링크 */}                    
                    <Link to="/">메인페이지</Link>
                    <Link to="/login">로그인</Link>
                    <Link to="/join">회원가입</Link> 
                    <Link to="/list">게시판목록</Link>
                    <Link to="/listDetail">게시판상세</Link>
                    <Link to="/listState">게시판등록,수정,삭제</Link>
                </div>

                <div className="spa-wrap">
                    {/* 라우터로 가져온페이지 보여주는곳 */}                              
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/join' component={Join}/>
                    <Route path='/list' component={List}/>
                    <Route path='/listDetail' component={ListDetail}/>
                    <Route path='/listState' component={ListState}/>
                </div>

            </Router>
        );
    }
}

export default App;
