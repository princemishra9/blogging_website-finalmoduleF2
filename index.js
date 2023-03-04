const createBlog_Btn = document.getElementById("blog_btn");
const modal = document.getElementById("modal");
const close_Btn = document.getElementById('close_btn');
const cancel_Btn = document.getElementById('cancel_btn');
const save_Btn = document.getElementById('save_btn');
const title_Input = document.getElementById('blog_title');
const description_Input = document.getElementById('blog_description');
const Blog_container = document.getElementById('blog_posts');
// to store a empty array

let dataArr = [];





close_Btn.addEventListener('click', crossmodul);
function crossmodul() {
    modal.style.display = 'none';
}

cancel_Btn.addEventListener('click', crossmodul);


save_Btn.addEventListener('click', saveBlogPostcontain);


Blog_container.addEventListener('click', deleteBlogPost);


Blog_container.addEventListener('click', editBlogPost);

createBlog_Btn.addEventListener('click', openmodulecontain);
function openmodulecontain() {
    modal.style.display = 'block';
}

function clearForm() {
    title_Input.value = '';
    description_Input.value = '';
}

function saveBlogPostcontain(e) {
    e.preventDefault();
    const title = title_Input.value;
    const description = description_Input.value;
    if (title.trim() === '' || description.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    const dateTime = new Date();
    const blogPost = { title, description, dateTime };
    dataArr.push(blogPost);
    displaydataArr();
    crossmodul();
    clearForm();
}

function displaydataArr() {
    Blog_container.innerHTML = '';

    dataArr.forEach((blogPost, index) => {
        const blogpostContainEle = document.createElement('div');
        blogpostContainEle.classList.add('blog-post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = blogPost.title;
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = blogPost.description;
        const dateTime = document.createElement('p');
        const dateTimeString = blogPost.dateTime.toLocaleString();
        dateTime.textContent = `Create at  ${dateTimeString}`;
        dateTime.classList.add('dateTime');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.index = index;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.dataset.index = index;
        blogpostContainEle.appendChild(titleElement);
        blogpostContainEle.appendChild(descriptionElement);
        blogpostContainEle.appendChild(editBtn);
        blogpostContainEle.appendChild(deleteBtn);
        blogpostContainEle.appendChild(dateTime);
        Blog_container.appendChild(blogpostContainEle);
    });
}
// delete btn remove contain 
function deleteBlogPost(e) {
    if (e.target.tagName.toLowerCase() === 'button' && e.target.textContent === 'Delete') {
        const index = e.target.dataset.index;
        dataArr.splice(index, 1);
        displaydataArr();
    }
}
//  edit btn to edit contain
function editBlogPost(e) {
    if (e.target.tagName.toLowerCase() === 'button' && e.target.textContent === 'Edit') {
        const index = e.target.dataset.index;
        const blogPost = dataArr[index];
        title_Input.value = blogPost.title;
        description_Input.value = blogPost.description;
        dataArr.splice(index, 1);
        displaydataArr();
        openmodulecontain();
    }
}
