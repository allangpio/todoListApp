import { View, Text, TouchableOpacity, Image } from "react-native"
import {styles} from './styles';

import Delete from '../../../assets/Delete.png';
import Done from '../../../assets/Done.png';

type Props = {
    taskItem: {
        description?: string,
        done?: boolean,
    },
    handleRemoveTask: (description: string) => void,
    toggleTask: (description: string) => void
}

export function Task({taskItem, handleRemoveTask, toggleTask}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={taskItem?.done ? styles.checkBoxDone : styles.checkBox} onPress={() => toggleTask(taskItem.description!!)} >
                {taskItem.done && (<Image source={Done} />)}
            </TouchableOpacity>

            <Text style={taskItem.done ? styles.textDone : styles.text}>{taskItem?.description}</Text>
            
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveTask(taskItem.description!!)}>
                <Image source={Delete} />
            </TouchableOpacity>
          </View>
    )
}