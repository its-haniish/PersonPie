import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up all available space
    },
    scrollViewContent: {
        flexGrow: 1, // Allows content container to grow to fill the ScrollView
        paddingVertical: 0, // Example padding for content
    },
});

export default styles;
