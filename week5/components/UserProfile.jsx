import '../App.css';

function UserProfile({user}) {
    if (!user) return null;

    return (
        <div className="profile-card">
            <img src={user.avatar_url} alt="프로필" className="avatar" />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio || ""}</p>
          
            <div className="stats">
                <span>Followers: <strong>{user.followers}</strong></span>
                <span>Following: <strong>{user.following}</strong></span>
                <span>Repos: <strong>{user.public_repos}</strong></span>
            </div>
        
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                프로필 보러가기
            </a>
        </div>
    );
}

export default UserProfile;
