import {useState} from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');   // 입력창 값
  const [userData, setUserData] = useState(null); // 유저 정보
  const [loading, setLoading] = useState(false);  // 로딩 중 여부
  const [error, setError] = useState(null);       // 에러 메시지

  const fetchGithubUser = async () => {
    if (!username) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error('유저를 찾을 수 없습니다.');
      }

      const data = await response.json();
      setUserData(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub 유저 검색기</h1>
      
      {/* 검색 영역 */}
      <div className="search-box">
        <input 
          type="text" 
          placeholder="GitHub 아이디 입력"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} // 입력할 때마다 상태 업데이트
          onKeyDown={(e) => e.key === 'Enter' && fetchGithubUser()} // 엔터키 지원
        />
        <button onClick={fetchGithubUser} disabled={loading}>
          {loading ? '검색 중...' : '검색'}
        </button>
      </div>

      {/* 3. 조건부 렌더링 (Conditional Rendering) */}
      {error && <p className="error-msg">{error}</p>}
      {userData && (
        <div className="profile-card">
          <img src={userData.avatar_url} alt="프로필" className="avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || ""}</p>
          
          <div className="stats">
            <span>Followers: <strong>{userData.followers}</strong></span>
            <span>Following: <strong>{userData.following}</strong></span>
            <span>Repos: <strong>{userData.public_repos}</strong></span>
          </div>
          
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            프로필 보러가기
          </a>
        </div>
      )}
    </div>
  );
}

export default App;