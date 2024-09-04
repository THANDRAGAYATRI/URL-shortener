document.getElementById('url-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;
    if (!url) return alert('Please enter a URL');
    const uniqueId = Math.random().toString(36).substring(2, 8);
    const shortUrl = `${window.location.origin}/${uniqueId}`;
    localStorage.setItem(uniqueId, url);
    document.getElementById('short-url').href = url;
    document.getElementById('short-url').textContent = shortUrl;
    document.getElementById('shortened-url').classList.remove('hidden');
    document.getElementById('url-input').value = '';
});

window.addEventListener('load', function() {
    const path = window.location.pathname.substring(1);
    const originalUrl = localStorage.getItem(path);
    if (originalUrl) window.location.href = originalUrl;
});
