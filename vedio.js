document.addEventListener("DOMContentLoaded", () => {
    const postTitleInput = document.getElementById("postTitle");
    const contentContainer = document.getElementById("contentContainer");
    const addContentBtn = document.getElementById("addContentBtn");
    const publishBtn = document.getElementById("publishBtn");

    let contentAreas = [document.getElementById("postContent")];

    // Add new content area
    addContentBtn.addEventListener("click", () => {
        const newContentArea = document.createElement("textarea");
        newContentArea.placeholder = "Enter post content";
        contentContainer.appendChild(newContentArea);
        contentAreas.push(newContentArea);
    });

    // Publish post
    publishBtn.addEventListener("click", () => {
        const postTitle = postTitleInput.value.trim();
        const postContent = contentAreas.map((area) => area.value.trim()).join("\n\n");

        if (postTitle && postContent) {
            // Publish post logic goes here
            console.log("Post Title:", postTitle);
            console.log("Post Content:", postContent);

            // Reset form
            postTitleInput.value = "";
            contentAreas.forEach((area) => (area.value = ""));
        } else {
            alert("Please enter a post title and content.");
        }
    });

    // Drag and drop functionality (existing code)
    const dropZone = document.querySelector(".drop-zone");
    const fileInput = document.querySelector(".file-input");
    const browseBtn = document.querySelector(".browse-btn");
    const mediaContainer = document.querySelector(".media-container");

    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("dragover");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");
        handleFiles(e.dataTransfer.files);
    });

    browseBtn.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", () => {
        handleFiles(fileInput.files);
    });

    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const mediaItem = document.createElement("div");
            mediaItem.classList.add("media-item");

            if (isImageFile(file)) {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(file);
                mediaItem.appendChild(img);
            } else if (isVideoFile(file)) {
                const video = document.createElement("video");
                video.src = URL.createObjectURL(file);
                video.controls = true;
                mediaItem.appendChild(video);
            }

            const removeBtn = document.createElement("span");
            removeBtn.classList.add("remove-btn");
            removeBtn.innerHTML = "&times;";
            removeBtn.addEventListener("click", () => {
                mediaItem.remove();
            });
            mediaItem.appendChild(removeBtn);

            mediaContainer.appendChild(mediaItem);
        }
    }

    function isImageFile(file) {
        return file.type.startsWith("image/");
    }

    function isVideoFile(file) {
        return file.type.startsWith("video/");
    }

    // Share, like, comment, and contact button functionality (placeholders)
    const shareBtn = document.querySelector(".share-btn");
    const likeBtn = document.querySelector(".like-btn");
    const commentBtn = document.querySelector(".comment-btn");
    const contactBtn = document.querySelector(".contact-btn");

    shareBtn.addEventListener("click", () => {
        // Share functionality
        console.log("Share button clicked");
    });

    likeBtn.addEventListener("click", () => {
        // Like functionality
        console.log("Like button clicked");
    });

    commentBtn.addEventListener("click", () => {
        // Comment functionality
        console.log("Comment button clicked");
    });

    contactBtn.addEventListener("click", () => {
        // Contact functionality
        console.log("Contact button clicked");
    });
});