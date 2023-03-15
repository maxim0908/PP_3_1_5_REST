'use strict';
const tbody = $('#users');
getAllUsers()

function getAllUsers() {
    tbody.empty()
    fetch("http://localhost:8080/adminAPI")
        .then(res => res.json())
        .then(js => {
            js.forEach(user => {
                let roles = [];
                for (let role of user.roles) {
                    roles.push(' ' + role.role.toString().replaceAll('ROLE_', ''));
                }
                const users = `$(
                    <tr>      
                        <td id="userID">${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${roles}</td>
                        <td>
                            <button type="button" 
                            class="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#editModal" 
                            onclick="editModal(${user.id})">
                            Edit
                            </button>
                        </td>
                        <td>
                            <button type="button" 
                            class="btn btn-danger" 
                            data-toggle="modal" 
                            data-target="#deleteModal" 
                            onclick="deleteModal(${user.id})">
                                Delete
                            </button>
                        </td>
                    </tr>)`;
                tbody.append(users);
            })
        })
}


