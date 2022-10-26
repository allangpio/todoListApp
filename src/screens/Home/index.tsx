import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from '../../../assets/Logo.png';

import { TaskContainer } from "../../components/TaskContainer";
import {styles} from './styles'

export function Home () {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} />
            </View>
            <TaskContainer />
        </View>
    )
}