import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface ButtonProps {
    onPress: () => void
}

export const FollowButton: React.FC<ButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.followButton} onPress={onPress}>
            <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
    )
}

export const UnfollowButton: React.FC<ButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.unfollowButton} onPress={onPress}>
            <Text style={styles.buttonText}>Unfollow</Text>
        </TouchableOpacity>
    )

}

export const RentButton: React.FC = () => {
    return (
        <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.buttonText}>Rent</Text>
        </TouchableOpacity>
    )
}