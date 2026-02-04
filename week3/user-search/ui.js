const profileCard = document.getElementById('profile');
const loading = document.getElementById('loading');

const avatar = document.getElementById('avatar');
const nameEl = document.getElementById('name');
const bioEl = document.getElementById('bio');
const followersEl = document.getElementById('followers');
const followingEl = document.getElementById('following');
const reposEl = document.getElementById('repos');
const urlEl = document.getElementById('url');

export function showLoading() {
    loading.classList.remove('hidden');
    profileCard.classList.add('hidden');
}

export function hideLoading() {
    loading.classList.add('hidden');
}

export function displayProfile(data) {
    const {avatar_url, name, login, bio, followers, following, public_repos, html_url} = data;
    avatar.src = avatar_url;
    nameEl.innerText = name || login;
    bioEl.innerText = bio || "";
    followersEl.innerText = followers;
    followingEl.innerText = following;
    reposEl.innerText = public_repos;
    urlEl.href = html_url;

    profileCard.classList.remove('hidden');
}

export function showError(message) {
    alert(error.message);
}