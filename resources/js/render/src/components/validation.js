import axios from "axios";

export default function ValidAccount(username, password) {
    const getValidation = async () => {
        try {
            await axios.post("/api/usertinknet",{
                username: username,
                password: password
            })
            .then(
                function (response) {
                    localStorage.setItem("acc", response.data.acc);
                    localStorage.setItem("token", response.data.token);
                    window.location.replace("/home");
                }
            );
        } catch(error) {
            console.log(error);
        }
    }

    getValidation();
}