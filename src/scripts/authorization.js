export async function Authorization() {
    const token = localStorage.getItem("JWT");

    if (!token) {
        const user = {
            auth : false,
            userData : {}
        }
        localStorage.setItem("user", JSON.stringify(user))
        return;
    }
    
    try {
        const response = await fetch('https://react-midterm.kreosoft.space/api/account/profile', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        const json = await response.json();
        const user = {
            auth : true,
            userData : json
        }

        localStorage.setItem("user", JSON.stringify(user))
    } catch {
        localStorage.clear("JWT");
        const user = {
            auth : false,
            userData : {}
        }
        localStorage.setItem("user", JSON.stringify(user))
        location.pathname = "/login/";
    }
}