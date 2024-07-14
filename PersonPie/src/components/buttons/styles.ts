import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row',
        gap: 16,
    },
    followButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unfollowButton: {
        backgroundColor: '#849DE0',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rentButton: {
        backgroundColor: '#000080',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '400',
    },
})

export default styles;