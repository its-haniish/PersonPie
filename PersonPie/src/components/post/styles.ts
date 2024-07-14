import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    postWrapper: {
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingVertical: 5,
        borderBottomColor: '#ddd',
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    userAvatarWrapper: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
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
    postImageWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    postImageLandscape: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.91 / 1,
        resizeMode: 'contain',
        backgroundColor: 'black',
    },
    postImagePortrait: {
        width: '100%',
        height: undefined,
        aspectRatio: 4 / 5,
        resizeMode: 'contain',
        backgroundColor: 'black',
    },
    postImageSquare: {
        width: '100%',
        height: undefined,
        aspectRatio: 1 / 1,
        resizeMode: 'contain',
        backgroundColor: 'black'
    },
    footerControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 5,
    },
    footerBtns: {
        flexDirection: 'row',
        gap: 16,
    },
    likesAndCmtsCount: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        gap: 8,
    },
    countText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#8e8e8e',
    },
    captionWrapper: {
        paddingHorizontal: 15,
    },
    caption: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    captionUsername: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    captionText: {
        fontSize: 15,
        color: 'black'
    },
    captionUsernameBtn: {
        justifyContent: 'center'
    },
    captionMoreBtn: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: -4
    },
    addCmtWrapper: {
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    addCmtUserInfoWrapper: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    addCmtInput: {
        width: '100%',
        fontSize: 15,
        color: 'black',
        paddingVertical: 5,
    },
});

export default styles;
