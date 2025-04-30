import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'green',
        borderRadius: 8
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 16,
        paddingHorizontal: 24
    },
    word: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        marginBottom: 16
    },
    ctaText: {
        color: 'white'
    },
    list: {
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
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        marginBottom: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 8,
        width: '100%'
    }
})

export default styles