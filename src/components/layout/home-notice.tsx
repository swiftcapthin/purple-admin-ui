import React, { useState } from 'react';

type Notice = {
  id: number;
  title: string;
  content: string;
};

const NoticeComponent: React.FC = () => {
  const notices: Notice[] = [
    { id: 1, title: '새로운 기능 업데이트', content: '저희 서비스에 새로운 기능이 추가되었습니다.' },
    { id: 2, title: '정기 점검 안내', content: '서버 정기 점검으로 서비스 이용이 중단됩니다.' },
    { id: 3, title: '이벤트 소식', content: '특별 이벤트가 진행됩니다. 많은 참여 바랍니다.' }
  ];

  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2>공지사항</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {notices.map(notice => (
          <li 
            key={notice.id} 
            onClick={() => setSelectedNotice(notice)} 
            style={{ padding: '10px 15px', borderBottom: '1px solid #ddd', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'white')}
          >
            {notice.title}
          </li>
        ))}
      </ul>

      {selectedNotice && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
          <h3>{selectedNotice.title}</h3>
          <p>{selectedNotice.content}</p>
        </div>
      )}
    </div>
  );
};

export default NoticeComponent;
