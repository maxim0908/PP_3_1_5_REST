async function getUserById(id) {
    let url = "http://localhost:8080/adminAPI/" + id;
    let response = await fetch(url);
    return await response.json();
}