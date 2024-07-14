import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import counterReducer from './reducers/counterReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;