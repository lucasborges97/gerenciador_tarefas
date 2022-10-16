let modal = document.querySelector('.modal-container');

function openModal () {
    modal.classList.add('active');
}

function closeModal () {
    modal.classList.remove('active');
}


function abrirMenu () {
    if(menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'flex'; 
    }
}