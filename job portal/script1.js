const allBtn = document.querySelectorAll(".job-id > *");
const sortItems = ducument.querySelectorAll(".jobs-container")
allBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        allBtn.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

    const targetData= btn.getAttribute('data-target')
    sortItems.forEach((item) => {
        sortItems.classList.add('delete');
        if (item.getAttribute('data-item') === targetData || targetData ==='all'){
            item.classList.remove("delete");

        }

    })
    });
}); 
