function saveComment() {
    var commentText = document.getElementById('editor').value;
    if (commentText.trim() !== '') {
        var commentList = document.getElementById('comment-list');
        var li = document.createElement('li');
        li.classList.add('comment');
        li.textContent = commentText;
        commentList.appendChild(li);
        document.getElementById('editor').value = '';
    } else {
        alert('Please enter the comment.');
    }
}
