import { FlatList, Image, Pressable, Text, View } from "react-native"
import styles from "../styles/historyPage"
import images from "../constants/images"
import { useSelector } from "react-redux"
import WordSelectors from "../selectors/wordSelectors"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const HistoryPage = () => {

    const history = useSelector(WordSelectors.getHistory)
    const [currHistory, setHistory] = useState(history)
    const navigation = useNavigation()
    const onBackPress = () => {
        navigation.pop();
    }

    useEffect(() => {
        const loadData = async () => {const data = await AsyncStorage.getItem('history')
            console.log('data',data)
            setHistory(JSON.parse(data));
        }
        loadData()
    }, [])

    return (
        <View style={styles.screen}>
            <View style={styles.row}> 
                <Pressable style={styles.backCta} onPress={onBackPress} >
                    <Image style={styles.backIcon} source={images.backIcon} />
                </Pressable>
                <Text>History Page</Text>
            </View>
            <View style={styles.flex1} >
                <FlatList 
                    data={currHistory}
                    renderItem={({item}) => <View style={{ backgroundColor: 'grey', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }} >
                        <Text>{item.date}</Text>
                        <Text style={{ fontStyle: 'italic', paddingHorizontal: 16 }} >{item.word}</Text>
                        </View>}
                    style={styles.listContainer}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </View>
    )
}

export default HistoryPage