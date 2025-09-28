const postList = document.getElementById('post-list');
if (postList) {
    const posts = [
        { file: '1-my-first-post.html', title: 'My First Post' },
        {
            file: '2-family-time-studying-and-holiday.html',
            title: 'Balancing Studying, Family, & Sunshine'
        },
        {
            file: '3-balancing-study-family-and-sunshine-part-2 copy.html',
            title: 'Balancing Studying, Family, & Sunshine - Part 2'
        },
        {
            file: '4-back-on-the-bandwagon.html',
            title: 'Back on the Bandwagon'
        },
        { file: '5-life-lately.html', title: 'Life Lately' },
        { file: '6-ai-vs-trade.html', title: 'AI vs Trade' },
        {
            file: '7-rtfq-learning-to-trust-what-you-know.html',
            title: 'RTFQ: Learning to Trust What You Know'
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
