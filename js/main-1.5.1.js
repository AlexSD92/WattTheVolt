const postList = document.getElementById('post-list');
if (postList) {
    const posts = [
        { file: '1-my-first-post.html', title: 'My First Post' },
        {
            file: '2-family-time-studying-and-holiday.html',
            title: 'Balancing Studying, Family, & Sunshine'
        },
        {
            file: '3-balancing-study-family-and-sunshine-part-2.html',
            title: 'Balancing Studying, Family, & Sunshine - Part 2'
        },
        {
            file: '4-back-on-the-bandwagon.html',
            title: 'Back on the Bandwagon'
        },
        {file: '5-life-lately.html',
            title: 'Life Lately'
        },
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
