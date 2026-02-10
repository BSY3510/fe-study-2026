import {useState} from 'react';
import '../App.css';

function SearchForm({onSearch, loading}) {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        onSearch(input);
    };

    return (
        <div className="search-box">
            <input 
                type="text" 
                placeholder="GitHub 아이디 입력"
                value={input} 
                onChange={(e) => setInput(e.target.value)} // 입력할 때마다 상태 업데이트
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} // 엔터키 지원
            />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? '검색 중...' : '검색'}
            </button>
        </div>
    );
}

export default SearchForm;