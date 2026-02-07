import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <h2>프론트엔드 개발자</h2>
      <p>리액트 학습 중</p>

      <button onClick={addLike}>
        좋아요 {likes}
      </button>
    </div>
  )
}

export default App