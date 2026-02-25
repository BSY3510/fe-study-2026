import {useState, useEffect} from 'react'
import './App.css'
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';

function App() {
    const [userData, setUserData] = useState(null); // 유저 정보
    const [loading, setLoading] = useState(false);  // 로딩 중 여부
    const [error, setError] = useState(null);       // 에러 메시지

    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem('github_history');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    useEffect(() => {
        localStorage.setItem('github_history', JSON.stringify(history));
    }, [history]);

    const fetchGithubUser = async (username) => {
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

            setHistory(prev => {
                const newHistory = [username, ...prev.filter(id => id !== username)];
                return newHistory.slice(0, 5);
            });

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const removeHistory = (target, e) => {
        e.stopPropagation();
        setHistory(prev => prev.filter(item => item !== target));
    };

    return (
        <div className="app-container">
            <h1>GitHub 유저 검색기</h1>

            {/* 검색 폼에게 함수와 로딩 상태 전달 */}
            <SearchForm onSearch={fetchGithubUser} loading={loading}/>

            {/*최근 검색어 목록 UI*/}
            {history.length > 0 && (
                <div className='history-box'>
                    <h3>최근 검색어</h3>
                    <ul className='history-list'>
                        {history.map((item, index) => (
                            <li key={index} onClick={() => fetchGithubUser(item)}>
                                {item}
                                <button onClick={(e) => removeHistory(item, e)}>x</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {/* 에러 메시지 표시 */}
            {error && <p className="error-msg">{error}</p>}
            
            {/* 유저 프로필에게 데이터 전달 */}
            <UserProfile user={userData}/>
        </div>
    );
}

export default App;