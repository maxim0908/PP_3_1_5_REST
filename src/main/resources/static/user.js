getUser();

function getUser() {
    fetch("http://localhost:8080/userAPI")
        .then(res => res.json())
        .then(user => {
            let role = [];
            for (let roles of user.roles) {
                role.push(' ' + roles.role.toString().replaceAll('ROLE_', ''))
            }
            $('#userEmail').append(`<span>${user.email}</span>`);
            $('#userRole').append(`<span>${role}</span>`);
            const users = `$(
                    <tr>
                        <td id="userID">${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${role}</td>
                    </tr>)`;
            $('#userTable').append(users);
        })
}