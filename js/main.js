
document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById("post-list");
    const posts = [
        { file: "my-first-post.html", title: "My First Post" },
        { file: "uk-power-grid.html", title: "UK Power Grid 2025" },
        { file: "solar-panel-trends.html", title: "Solar Panel Trends in the UK" }
    ];

    posts.forEach(post => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `posts/${post.file}`;
        link.textContent = post.title;
        item.appendChild(link);
        postList.appendChild(item);
    });
});
