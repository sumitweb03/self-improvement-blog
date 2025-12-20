const articles = document.querySelectorAll('.article');
  
    window.addEventListener('scroll', () => {
      articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        const screenHeight = window.innerHeight;
  
        // Agar article viewport ke andar hai
        if (rect.top < screenHeight - 100 && rect.bottom > 100) {
          article.classList.add('show');   // animate hoga
        } else {
          article.classList.remove('show'); // bahar nikalte hi reset ho jayega
        }
      });
    });
 
   
      let likes = 0;
  
      function likePost() {
        likes++;
        document.getElementById("likeCount").innerText = likes;
      }
  
     
      const shareBtn = document.querySelector('.share-btn');
const shareBox = document.getElementById("shareOptions");

// Toggle popup on button click
shareBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // ताकि button click document तक न पहुंचे
    shareBox.style.display = (shareBox.style.display === "flex") ? "none" : "flex";
});

// Body पर क्लिक करने पर popup बंद
document.addEventListener("click", (e) => {
    if (!shareBox.contains(e.target) && e.target !== shareBtn) {
        shareBox.style.display = "none";
    }
});

   
//       let comments = JSON.parse(localStorage.getItem("comments")) || [];

// function saveComments() {
//   localStorage.setItem("comments", JSON.stringify(comments));
// }

// function renderComments() {
//   const commentList = document.getElementById("commentList");
//   commentList.innerHTML = "";
//   comments.forEach((c, index) => {
//     commentList.appendChild(createCommentElement(c, index));
//   });
// }

// function createCommentElement(comment, index, isReply = false) {
//   const div = document.createElement("div");
//   div.className = "comment";
//   if (isReply) div.style.marginLeft = "20px";

//   const header = document.createElement("div");
//   header.className = "comment-header";

//   const text = document.createElement("span");
//   text.innerText = comment.text;

//   const actions = document.createElement("div");
//   actions.className = "comment-actions";

//   // Like button
//   const likeBtn = document.createElement("button");
//   likeBtn.innerText = `❤️ ${comment.likes || 0}`;
//   likeBtn.onclick = () => {
//     comment.likes = (comment.likes || 0) + 1;
//     saveComments();
//     renderComments();
//   };

//   // Edit button
//   const editBtn = document.createElement("button");
//   editBtn.innerText = "✏️";
//   editBtn.onclick = () => {
//     const newText = prompt("Edit your comment:", comment.text);
//     if (newText !== null && newText.trim() !== "") {
//       comment.text = newText.trim();
//       saveComments();
//       renderComments();
//     }
//   };

//   // Delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "❌";
//   deleteBtn.onclick = () => {
//     if (isReply) {
//       // Reply delete
//       const parentComment = comments[index.parentIndex];
//       parentComment.replies.splice(index.replyIndex, 1);
//     } else {
//       comments.splice(index, 1);
//     }
//     saveComments();
//     renderComments();
//   };

//   // Reply button
//   const replyBtn = document.createElement("button");
//   replyBtn.innerText = "↩️ Reply";
//   replyBtn.onclick = () => {
//     const replyText = prompt("Write your reply:");
//     if (replyText && replyText.trim() !== "") {
//       if (!comment.replies) comment.replies = [];
//       comment.replies.push({ text: replyText.trim(), likes: 0, replies: [] });
//       saveComments();
//       renderComments();
//     }
//   };

//   actions.append(likeBtn, replyBtn, editBtn, deleteBtn);
//   header.appendChild(text);
//   div.appendChild(header);
//   div.appendChild(actions);

//   // Show replies
//   if (comment.replies && comment.replies.length > 0) {
//     comment.replies.forEach((reply, rIndex) => {
//       div.appendChild(
//         createCommentElement(reply, { parentIndex: index, replyIndex: rIndex }, true)
//       );
//     });
//   }

//   return div;
// }

// function postComment() {
//   const input = document.getElementById("commentInput");
//   const commentText = input.value.trim();

//   if (commentText === "") {
//     alert("Please write something before posting!");
//     return;
//   }

//   comments.unshift({ text: commentText, likes: 0, replies: [] });
//   saveComments();
//   renderComments();
//   input.value = "";
// }

// // Initial render
// renderComments();

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("show");
});

// Dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
  
      const parent = toggle.parentElement;
      const isOpen = parent.classList.contains("open");
  
      // close other dropdowns
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
  
      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });
  
  // Sub-dropdown toggle
  document.querySelectorAll(".sub-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevents scroll
      e.stopPropagation();
  
      const parent = btn.parentElement;
      const subList = parent.querySelector(".sub-list");
      const isOpen = parent.classList.contains("open");
  
      // close other sub-dropdowns
      parent.parentElement.querySelectorAll(".sub-dropdown").forEach(d => d.classList.remove("open"));
  
      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });
  
  // Click outside to close everything
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown, .sub-dropdown").forEach(d => d.classList.remove("open"));
  });
  
// ===== PREVENT MENU CLOSE WHEN CLICKING INSIDE DROPDOWN =====
document.querySelectorAll(".dropdown-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.stopPropagation(); // 🔥 THIS IS THE FIX
      // allow normal navigation
    });
  });
  
  
       