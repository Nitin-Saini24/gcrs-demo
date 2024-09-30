import axios from "axios";

// Function to check if the user is authenticated
const getUser = async () => {
    const token = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(token.accessToken)

    // Return false if the token or accessToken is missing
    if (!token?.accessToken) return false;

    try {
        const response = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                Authorization: `Bearer ${token.accessToken}` // Pass JWT via Authorization header
            },
            withCredentials: false // Exclude cookies
        });
        // console.log(response.data);

        // Return true if the response contains valid data
        return response.data ? true : false;
    } catch (error) {
        console.error("Error during authentication check:", error);
        return false; // Return false on error
    }
};

// Wrapper function that checks if the user is authenticated
export const userAuth = async () => {
    return await getUser();
};
