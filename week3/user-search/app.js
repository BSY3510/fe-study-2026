import { fetchUser } from "./api";
import { displayProfile, hideLoading, showError, showLoading } from "./ui";

const input = document.getElementById('username');
const searchBtn = document.getElementById('search-btn');

async function handleSearch() {
    const username = input.value;
    if (!username) return;

    showLoading();

    try {
        const data = await fetchUser(username);
        displayProfile(data);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

searchBtn.addEventListener('click', handleSearch);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
})