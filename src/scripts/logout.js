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

    try {
        fetch('https://react-midterm.kreosoft.space/api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
    } catch {
        alert("Ошибка выходы из аккаунта");
    }
    
    location.reload();
}