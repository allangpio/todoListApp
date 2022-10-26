import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 24
    },
    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -36,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
         backgroundColor: '#1E6F9F',
         alignItems: 'center',
         justifyContent: 'center',
         
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 32
    },
    filterOption: {
        flexDirection: 'row',
    },
    created: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EA8DE'

    },
    done: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8284FA'
    },
    totalContainer: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 14,
        marginLeft: 8
    },
    total: {
        fontSize: 12,
        color: '#D9D9D9',
    }
})