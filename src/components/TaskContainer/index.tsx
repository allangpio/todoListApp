import { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet, Alert } from "react-native";
import Plus from '../../../assets/plus.png';
import { TaskList } from "../TaskList";
import { styles } from "./styles";

interface Task {
    description?: string,
    done?: boolean
}

export function TaskContainer() {
    const [taskList, setTaskList] = useState<Task[]>([])
    const [taskInput, setTaskInput] = useState('');

    const [counter, setCounter] = useState({created: 0, done: 0})

    useEffect(() => {
        const tasksDone = taskList.filter(item => item.done).length
        setCounter({...counter, done: tasksDone, created: taskList.length})
    }, [taskList])


    function handleAddTask() {
        if (taskList.filter(item => item.description === taskInput)?.length > 0) {
            return Alert.alert("Já existe uma tarefa com esse nome")
        }

        setTaskList(prevState => [{description: taskInput, done: false}, ...prevState])
        setTaskInput('')    
    }

    function handleRemoveTask(description: string) {
        setTaskList(prevState => prevState.filter(item => item.description !== description))
    }

    function toggleTask(description: string) {
        setTaskList((prevState) => {
           const newArray =  prevState.map(item => {
                if (item.description === description) {
                    return {
                        description: item.description,
                        done: !item.done
                    }
                }
                return item
            })
            return newArray
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    value={taskInput}
                    onChangeText={setTaskInput}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                />

                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Image source={Plus} />
                </TouchableOpacity>
            </View>

            <View style={styles.filterContainer}>
                <View style={styles.filterOption}>
                    <Text style={styles.created}>
                        Criadas
                    </Text>
                    <View style={styles.totalContainer}>
                    <Text style={styles.total}>
                        {counter.created}
                    </Text>
                    </View>
                </View>

                <View style={styles.filterOption}>
                    <Text style={styles.done}>
                        Concluídas
                    </Text>
                    <View style={styles.totalContainer}>
                    <Text style={styles.total}>
                        {counter.done}
                    </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginTop: 20,
                    paddingHorizontal: 24,
                    borderBottomColor: '#333333',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />

            <TaskList list={taskList} handleRemoveTask={handleRemoveTask} toggleTask={toggleTask} />

        </View>
    )
}