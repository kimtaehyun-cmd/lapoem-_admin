import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticeManagement from './components/CommunityAdmin/NoticeManagement';
import PostManagement from './components/CommunityAdmin/PostManagement';
import CommentManagement from './components/CommunityAdmin/CommentManagement';
import BooksManageing from './components/adminBooks/BooksManageing';
import BooksEmailing from './components/adminBooks/BooksEmailing';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
        <Header />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/community/notice" element={<NoticeManagement />} />
            <Route path="/community/posts" element={<PostManagement />} />
            <Route path="/community/comments" element={<CommentManagement />} />
            <Route path="/books/managing" element={<BooksManageing />} />
            <Route path="/books/emailing" element={<BooksEmailing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
