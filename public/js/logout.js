// logout handler func
const logout = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.assign("/");
    } else {
        throw console.error(response.statusText);
    }
};

document.querySelector("#logout").addEventListener("click", logout);