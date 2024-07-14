import React from 'react'
import { Text, StyleSheet, Image, View, TouchableWithoutFeedback, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Octicons from 'react-native-vector-icons/Octicons'
import { Avatar } from 'react-native-paper';
import Home from '../screens/home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux';


const Tab = createBottomTabNavigator()

const BottomTab: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerStyle: {
                elevation: 4, // Adjust elevation for Android
                shadowColor: '#000', // Shadow color for iOS
                shadowOffset: { width: 0, height: 2 }, // Offset for shadow
                shadowOpacity: 0.2, // Opacity of shadow
                shadowRadius: 2, // Radius of shadow
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Octicons name='home' size={size} color={focused ? "#007AFF" : "#8E8E8F"} />),
                    headerTitle: () => <Image
                        source={require('../assets/PersonPie.png')}
                        alt='PersonPie' style={styles.image} />,
                    headerRight: () => <RightHeader />,

                }} />
            <Tab.Screen name="Search" component={Home}
                options={{
                    tabBarIcon: ({ focused, size }) => (<Octicons name='search' size={size} color={focused ? "#007AFF" : "#8E8E8F"} />),
                    headerShown: false,
                    tabBarShowLabel: false
                }} />
            <Tab.Screen name="Add" component={Home}
                options={{
                    tabBarIcon: ({ focused, size }) => (<Octicons name='diff-added' size={size} color={focused ? "#007AFF" : "#8E8E8F"} />),
                    headerShown: false,
                    tabBarShowLabel: false
                }} />
            <Tab.Screen name='Profile' component={Home}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View style={{ borderColor: focused ? "#007AFF" : "#8E8E8F", borderWidth: 2, borderRadius: 100 }}>
                            <Avatar.Image size={size} source={require('../assets/default_user.png')} style={{ aspectRatio: '1/1' }} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}


const RightHeader: React.FC = () => {
    const { msgCount, notificationCount } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    return (
        <View style={styles.rightHeaderWrapper}>
            <Pressable style={styles.iconWrapper}
                onPress={() => dispatch({ type: 'resetNotificationCount' })}
                onLongPress={() => dispatch({ type: 'incrementNotification' })}
            >
                {
                    notificationCount > 9 ?
                        <Text style={styles.counter}>9+</Text>
                        : notificationCount !== 0 ? <Text style={styles.counter}>{notificationCount}</Text> : null
                }
                <Ionicons name='notifications-outline' size={25} color={notificationCount > 0 ? '#007AFF' : '#8E8E8F'} />
            </Pressable>
            <Pressable style={styles.iconWrapper}
                onPress={() => dispatch({ type: 'resetMsgCount' })}
                onLongPress={() => dispatch({ type: 'incrementMsg' })}
            >
                {
                    msgCount > 9 ?
                        <Text style={styles.counter}>9+</Text>
                        : msgCount !== 0 ? <Text style={styles.counter}>{msgCount}</Text> : null
                }
                <Ionicons name='chatbubble-ellipses-outline' size={25} color={msgCount > 0 ? '#007AFF' : '#8E8E8F'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: '100%',
        resizeMode: 'contain'
    },
    rightHeaderWrapper: {
        flexDirection: 'row',
        marginRight: 15,
        gap: 15
    },
    iconWrapper: {
        position: 'relative',
        padding: 0
    },
    counter: {
        position: 'absolute',
        top: -3,
        right: -3,
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 100,
        width: 15,
        height: 15,
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 10,
        zIndex: 2
    }
})

export default BottomTab
