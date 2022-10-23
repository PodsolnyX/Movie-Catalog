export function Login() {
    document.getElementById("btn-login").addEventListener("click", function () {

        const login = $("#inputLogin").val(),
            password = $("#inputPassword").val();

        const userData = {
            username: login,
            password: password,
        };

        PostRequestLogin(userData);
    });
}

async function PostRequestLogin(userData) {
    try {
        await fetch('https://react-midterm.kreosoft.space/api/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
            .then(data => {
                localStorage.setItem("JWT", data.token);
                location.pathname = "/";
            })
    } catch {
        alert("Ошибка авторизации");
    }

}