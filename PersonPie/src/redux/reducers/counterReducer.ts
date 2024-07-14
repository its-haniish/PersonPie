import { createReducer } from '@reduxjs/toolkit';

interface CounterState {
    msgCount: number;
    notificationCount: number;
}

const initialState: CounterState = {
    msgCount: 2,
    notificationCount: 20
}

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('incrementMsg', (state) => {
            state.msgCount += 1;
        })
        .addCase('decrementMsg', (state) => {
            state.msgCount -= 1;
        })
        .addCase('incrementNotification', (state) => {
            state.notificationCount += 1;
        })
        .addCase('decrementNotification', (state) => {
            state.notificationCount -= 1;
        })
        .addCase('resetNotificationCount', (state) => {
            state.notificationCount = 0;
        })
        .addCase('resetMsgCount', (state) => {
            state.msgCount = 0;
        })
});

export default counterReducer;


