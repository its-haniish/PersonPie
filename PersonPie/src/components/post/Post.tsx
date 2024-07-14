import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ImageProps, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { FollowButton, RentButton, UnfollowButton } from '../buttons/Buttons';

interface PostProps {
    type: 'portrait' | 'landscape' | 'square';
    imageSource: ImageProps;
    username: string;
    likes: number;
    comments: number;
    caption: string;
    isLiked: boolean;
    isBookmarked: boolean;
    follow: boolean;
}

const Post: React.FC<PostProps> = ({ type, imageSource, caption, follow, comments, isBookmarked, isLiked, likes, username }) => {
    const [bookmarked, setBootmarked] = useState<boolean>(isBookmarked);
    const [liked, setLiked] = useState<boolean>(isLiked);
    const [isFollow, setIsFollow] = useState<boolean>(follow);
    return (
        <View style={styles.postWrapper}>
            {/* post header */}
            <View style={styles.postHeader}>
                <View style={styles.userAvatarWrapper}>
                    <Avatar.Image size={27} source={require('../../assets/default_user.png')} />
                    <Text style={styles.username}>{username}</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <RentButton />
                    {
                        isFollow ?
                            <UnfollowButton onPress={() => { setIsFollow(!isFollow) }} />
                            : <FollowButton onPress={() => { setIsFollow(!isFollow) }} />
                    }
                </View>
            </View>
            {/* post image */}
            <View style={styles.postImageWrapper}>
                <Image
                    source={imageSource}
                    style={
                        type === 'portrait' ?
                            styles.postImagePortrait
                            : type === 'landscape' ?
                                styles.postImageLandscape :
                                styles.postImageSquare
                    }
                />
            </View>

            {/* post footer controls */}
            <View style={styles.footerControls}>
                <View style={styles.footerBtns}>
                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        <MaterialCommunityIcons name={liked ? "heart" : "heart-outline"} size={27} color='red' />
                    </TouchableOpacity>
                    <TouchableWithoutFeedback>
                        <MaterialCommunityIcons name="chat-processing-outline" size={27} color="black" style={{ fontWeight: 'bold' }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Feather name="send" size={27} color="black" />
                    </TouchableWithoutFeedback>

                </View>
                <TouchableWithoutFeedback onPress={() => setBootmarked(!bookmarked)}>
                    <MaterialCommunityIcons name={bookmarked ? "bookmark" : "bookmark-outline"} size={27} color='#007AFF' />
                </TouchableWithoutFeedback>
            </View>

            {/* post likes and cmts */}
            <View style={styles.likesAndCmtsCount}>
                <Text style={styles.countText}>{likes} likes</Text>
                {/* <Text style={styles.countText}> . </Text> */}
                <Text style={styles.countText}>{comments} comments</Text>
            </View>

            {/* post caption */}
            <CaptionContainer username={username} caption={caption} />

            {/* write comment  */}

            <View style={styles.addCmtWrapper}>
                <TextInput
                    placeholderTextColor="#8e8e8e"
                    style={styles.addCmtInput}
                    placeholder='Add a comment...'
                    onSubmitEditing={() => console.warn('comment added')}
                />
            </View>

        </View >
    );
};

const CaptionContainer: React.FC<{ username: string, caption: string }> = ({ username, caption }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const shortendCaption = caption.length > 100 ? caption.slice(0, 70) + '...' : caption;

    return (
        <View style={styles.captionWrapper}>
            <Text style={styles.caption}>
                <TouchableWithoutFeedback onPress={() => {
                    console.warn('Username pressed')
                }}>
                    <Text style={styles.captionUsername}>{username}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => setIsExpanded(true)}>
                    <Text style={styles.captionText}>
                        {
                            isExpanded ? ` ${caption}` :
                                ` ${shortendCaption}`
                        }{
                            !isExpanded &&
                            <Text style={{ color: '#8e8e8e' }}>
                                more
                            </Text>
                        }
                    </Text>
                </TouchableWithoutFeedback>
            </Text>
        </View>
    );
}

export default Post;
