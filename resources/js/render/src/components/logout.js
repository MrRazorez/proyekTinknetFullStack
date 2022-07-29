export default function Logout() {
    localStorage.clear();
    window.location.replace("/login");
}