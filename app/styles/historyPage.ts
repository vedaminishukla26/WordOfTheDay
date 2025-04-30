import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    row: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 32,
    }, 
    backIcon: {
        height: 32,
        width: 32,
        borderRadius: 32
    },
    backCta: {
        position: 'absolute',
        top: -6,
        left: 16,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: 'purple'
    },
    flex1: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'grey',
    }
})

export default styles