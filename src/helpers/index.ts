export const getUserEmail = () => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
        return ""
    }

    return userEmail
}