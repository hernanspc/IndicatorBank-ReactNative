import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListFlag = ({ data, opacity, scale }) => {
    const navigation = useNavigation();
    const { title, description } = data;

    const handlePress = () => {
        navigation.navigate('Detail', {
            data: { title: title }
        })
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <Animated.View style={[styles.container, { opacity, transform: [{ scale }] }]}>
                <View style={styles.wrapperText}>
                    <Text style={{ fontSize: 17 }}>{title}</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 14, color: "#0078fd" }}>{description}</Text>
                </View>
                <View style={styles.wrapperIcon}>
                    <Ionicons name="information-circle-outline" size={30} color="#0078fd" />
                    <Entypo name="chevron-right" size={24} color="#cacacb" />
                </View>
            </Animated.View>
        </TouchableOpacity>
    )
}

export default ListFlag

const styles = StyleSheet.create({
    container: {
        marginVertical: 5, display: 'flex',
        flexDirection: 'row', width: "100%", height: 70,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CBCBCB",
        shadowRadius: 10,
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "70%",
        height: "100%",
    },
    wrapperIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "30%",
        height: "100%",
    }
})