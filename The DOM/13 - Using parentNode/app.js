list.addEventListener("click", (e) => {
    const li = e.target;
    const ul = li.parentNode;
    ul.removeChild(li);
});


