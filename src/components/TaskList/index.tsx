import { View, Text, FlatList, Image } from 'react-native';
import {styles} from './styles';
import Clipboard from '../../../assets/Clipboard.png';
import { Task } from '../Task';

type TaskItem = {
    description?: string,
    done?: boolean
}

type Props = {
    list: TaskItem[]
    handleRemoveTask: (description: string) => void
    toggleTask: (description: string) => void
}

export function TaskList({list, handleRemoveTask, toggleTask}: Props) {
    return (
            <FlatList
                data={list}
                keyExtractor={item => item?.description || ''}
                renderItem={({item}) => (
                    <Task taskItem={item} handleRemoveTask={handleRemoveTask} toggleTask={toggleTask} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.empityContainer}>
                        <Image source={Clipboard} />
                        <Text style={styles.listEmpityTextBold}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmpityText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                    
                )}
            />
    )
}