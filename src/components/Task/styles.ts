import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 12,
        paddingRight: 8,
        paddingLeft: 12,
        borderRadius: 8,
        backgroundColor: '#262626',
        marginBottom: 8
    },
    checkBox: {
        borderColor: '#4EA8DE',
        borderRadius: 20,
        borderWidth: 1,
        width: 20,
        height: 20,
        
      },
      checkBoxDone: {
        backgroundColor: '#5E60CE',
        borderColor: '#5E60CE',
        borderRadius: 20,
        borderWidth: 1,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: '#fff',
        flex: 1,
        paddingHorizontal: 1,
        marginLeft: 20,
      },
      textDone: {
        flex: 1,
        paddingHorizontal: 1,
        marginLeft: 20,
        textDecorationLine: 'line-through',
        color: '#808080'
      },
      deleteButton: {
        height: 20,
        width: 20
      }
})