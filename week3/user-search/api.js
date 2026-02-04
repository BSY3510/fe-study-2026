const BASE_URL = 'https://api.github.com/users';

export async function fetchUser(username) {
    const response = await fetch(`${BASE_URL}/${username}`);

    if (!response.ok) {
        throw new Error('유저를 찾을 수 없습니다.');
    }

    return await response.json();
}