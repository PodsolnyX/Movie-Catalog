import { api } from "../api.js";

export async function Authorization() {
    const token = localStorage.getItem("JWT");

    if (!token) {
        const user = {
            auth: false,
            userData: {}
        };
        localStorage.setItem("user", JSON.stringify(user));
        return;
    }


    await fetch(`${api}/api/account/profile`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Токен истёк");
        })
        .then(json => {
            const user = {
                auth: true,
                userData: json
            };

            localStorage.setItem("user", JSON.stringify(user));
        })
        .catch(err => {
            localStorage.clear("JWT");
            const user = {
                auth: false,
                userData: {}
            };

            localStorage.setItem("user", JSON.stringify(user));

            location.pathname = "/login/";
        });
}