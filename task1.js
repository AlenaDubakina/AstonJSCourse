async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();
  return data;
}
async function main() {
  const postsData = await getPosts();
  let pageCurrent = 1;
  let limit = 10;
  function displayPosts(arayData, rowPage, page) {
    const postsEl = document.querySelector('.posts');
    postsEl.innerHTML = '';
    page--;

    const start = rowPage * page;
    const end = start + rowPage;
    const postData = arayData.slice(start, end);

    postData.forEach((element) => {
      const postEl = document.createElement('div');
      postEl.classList.add('post');
      postEl.innerText = `${element.title}`;
      postsEl.appendChild(postEl);
    });
  }
  function displayPagination(arayData, rowPage) {
    const paginationDiv = document.querySelector('.pagination');
    const countPages = Math.ceil(arayData.length / rowPage);
    const ul = document.createElement('ul');
    ul.classList.add('pagination-list');
    for (let i = 0; i < countPages; i++) {
      const li = displayPaginationEl(i + 1);
      ul.appendChild(li);
    }
    paginationDiv.appendChild(ul);
  }
  function displayPaginationEl(page) {
    const li = document.createElement('li');
    li.classList.add('pagination-el');
    li.innerText = page;
    if (pageCurrent == page) li.classList.add('pagination-item-active');

    li.addEventListener('click', () => {
      pageCurrent = page;
      displayPosts(postsData, limit, pageCurrent);
      let pageCurrentActive = document.querySelector(
        'li.pagination-item-active'
      );
      pageCurrentActive.classList.remove('pagination-item-active');
      li.classList.add('pagination-item-active');
    });
    return li;
  }

  displayPosts(postsData, limit, pageCurrent);
  displayPagination(postsData, limit);
}
main();
