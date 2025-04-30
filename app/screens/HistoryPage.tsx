import { FlatList, Image, Pressable, Text, View } from "react-native"
import styles from "../styles/historyPage"
import images from "../constants/images"
import { useSelector } from "react-redux"
import WordSelectors from "../selectors/wordSelectors"

const HistoryPage = () => {

    const examples = useSelector(WordSelectors.getExamples)

    return (
        <View style={styles.screen}>
            <View style={styles.row}> 
                <Pressable style={styles.backCta} >
                    <Image style={styles.backIcon} source={images.backIcon} />
                </Pressable>
                <Text>History Page</Text>
            </View>
            <View style={styles.flex1} >
                <FlatList 
                    data={examples}
                    renderItem={({item}) => <Text>{item}</Text>}
                    style={styles.listContainer}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </View>
    )
}

export default HistoryPage