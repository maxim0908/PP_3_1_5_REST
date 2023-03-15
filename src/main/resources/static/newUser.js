let formNew = document.forms["createNewUser"]

createNewUser();

function createNewUser() {
    formNew.addEventListener("submit", ev => {
        ev.preventDefault();
        let roles = [];
        for (let i = 0; i < formNew.roles.options.length; i++) {
            if (formNew.roles.options[i].selected) roles.push({
                id: formNew.roles.options[i].value,
                role: "ROLE_" + formNew.roles.options[i].text
            });
        }
        fetch("http://localhost:8080/adminAPI", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formNew.username.value,
                lastName: formNew.lastName.value,
                age: formNew.age.value,
                email: formNew.email.value,
                password: formNew.password.value,
                roles: roles
            })
        }).then(() => {
            $('#users-tab').click();
            getAllUsers();
        });
    });
}