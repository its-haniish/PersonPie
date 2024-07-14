import { createReducer, PayloadAction } from "@reduxjs/toolkit";

// Define the User interface with name and email properties
interface User {
    name: string;
    email: string;
}

// Define the AuthType interface with isAuthenticated and user properties
interface AuthType {
    isAuthenticated: boolean;
    user: User | null; // user can be either of type User or null
}

// Set the initial state of the authentication
const initialState: AuthType = {
    isAuthenticated: false, // Initial state is not authenticated
    user: null // No user information initially
};

// Define action type strings
const LOGIN = 'login';
const LOGOUT = 'logout';

// Define the LoginAction interface extending PayloadAction<User> and adding type property
interface LoginAction extends PayloadAction<User> {
    type: typeof LOGIN; // Action type must be 'login'
}

// Create the Auth reducer using createReducer
const authReducer = createReducer(initialState, (builder) => {
    builder
        // Handle the login action
        .addCase(LOGIN, (state, action: LoginAction) => {
            state.isAuthenticated = true; // Set isAuthenticated to true
            state.user = action.payload; // Set user to the payload of the action
        })
        // Handle the logout action
        .addCase(LOGOUT, (state) => {
            state.isAuthenticated = false; // Set isAuthenticated to false
            state.user = null; // Clear the user information
        });
});

// Export the Auth reducer
export default authReducer;
