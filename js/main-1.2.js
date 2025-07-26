const postList = document.getElementById('post-list');
if (postList) {
    const posts = [
        { file: 'my-first-post-1.html', title: 'My First Post' },
        {
            file: 'family-time-studying-and-holiday-2.html',
            title: 'Balancing Studying, Family, & Sunshine'
        }
    ];

    posts.forEach((post) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `posts/${post.file}`;
        link.textContent = post.title;
        item.appendChild(link);
        postList.appendChild(item);
    });
} else {
    console.warn('post-list not found in DOM');
}
