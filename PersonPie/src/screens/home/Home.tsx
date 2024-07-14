import React from 'react'
import { View, ScrollView } from 'react-native'
import Post from '../../components/post/Post'
import styles from './styles'

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Post
                    key={1}
                    username='itshaniish'
                    imageSource={require('../../assets/post.jpg')}
                    type='landscape'
                    follow={true}
                    isLiked={true}
                    isBookmarked={true}
                    likes={301}
                    comments={47}
                    caption='By following these guidelines and ensuring your layout adheres to them, your ScrollView should work correctly, allowing you to scroll through the Post components. Adjust the scrollViewContent style according to your specific layout and padding requirements.'
                />
                <Post
                    key={2}
                    username='stark_dalla'
                    imageSource={require('../../assets/post2.jpg')}
                    type='portrait'
                    follow={false}
                    isLiked={false}
                    isBookmarked={false}
                    likes={232}
                    comments={123}
                    caption='By following these guidelines and ensuring your layout adheres to them, your ScrollView should work correctly, allowing you to scroll through the Post components. Adjust the scrollViewContent style according to your specific layout and padding requirements.'
                />
                <Post
                    key={3}
                    username='naman_gay'
                    imageSource={require('../../assets/post3.jpg')}
                    type='square'
                    follow={false}
                    isLiked={true}
                    isBookmarked={true}
                    likes={213}
                    comments={121}
                    caption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                />
                <Post
                    key={4}
                    username='sabkapapa'
                    imageSource={require('../../assets/post.jpg')}
                    type='landscape'
                    follow={true}
                    isLiked={true}
                    isBookmarked={true}
                    likes={234}
                    comments={124}
                    caption='By following these guidelines and ensuring your layout adheres to them, your ScrollView should work correctly, allowing you to scroll through the Post components. '
                />
            </ScrollView>
        </View>
    )
}

export default Home