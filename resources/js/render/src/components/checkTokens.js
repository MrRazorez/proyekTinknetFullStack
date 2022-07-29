export default function Decision() {
    (localStorage.getItem("token"))?
    window.location.replace("home"):
    (localStorage.getItem("token") === "jangan_login")?
    window.location.replace("failed"):
    window.location.replace("login");
}