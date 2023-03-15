let formDelete = document.forms["deleteModalForm"];

async function deleteModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#deleteModal'));
    await openModal(formDelete, modal, id);
    if (formDelete.roles.value === 1) {
        formDelete.roles.value = 'ADMIN';
    } else {
        formDelete.roles.value = 'USER';
    }
    deleteUser()
}

function deleteUser() {
    formDelete.addEventListener("submit", ev => {
        ev.preventDefault();
        fetch("http://localhost:8080/adminAPI/" + formDelete.id.value, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            $('#closeDelete').click();
            getAllUsers();
        });
    });
}