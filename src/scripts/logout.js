import { api } from "../api.js";

export function Logout() {
    const token = localStorage.getItem("JWT");
    localStorage.clear("JWT");

    const user = {
        auth: false,
        userData: {}
    };
    localStorage.setItem("user", JSON.stringify(user));

    if (!token)
        return;

    fetch(`${api}/api/account/logout`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }})
        .then(response => location.reload());

    location.reload();
}