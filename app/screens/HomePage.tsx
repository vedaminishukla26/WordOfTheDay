import { Button, FlatList, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import WordSelectors from "../selectors/wordSelectors"
import WordActions from "../actions/word"
import styles from "../styles/homePage"
import isEmpty from "../utils/isEmpty"
import { useNavigation } from "@react-navigation/native"

const HomePage = () => {
    const dispatch = useDispatch()
    const word = useSelector(WordSelectors.getWord)
    const meanings = useSelector(WordSelectors.getMeanings)
    const navigation = useNavigation()
    const onCtaPress = () => {
        console.log("ctapressed")
        dispatch(WordActions.fetchWord())
    }

    const viewHistoryPress = () => {
        navigation.navigate('History')
    }

    return (
        <View style={styles.screen} >
            <View style={styles.row} > 
                <TouchableOpacity style={styles.btn} onPress={onCtaPress}>
                    <Text style={styles.ctaText} >
                        New Word
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'orange' }]} onPress={viewHistoryPress}>
                    <Text style={styles.ctaText} >
                        View History
                    </Text>
                </TouchableOpacity>
            </View>
            {word && (<Text style={styles.word} >
                Word of the Day:: {word}
            </Text>)}
            {meanings && !isEmpty(meanings) && (
                <View style={{ flex: 1 }} >
                <FlatList
                ItemSeparatorComponent={() => <View style={styles.separator} />} 
                ListHeaderComponent={() => { if (meanings) return (<Text style={styles.header} >Meanings</Text>); return (<View />) }}
                data={meanings}
                contentContainerStyle={styles.list}
                renderItem={({item}) => <Text>{item}</Text>}
                style={styles.listContainer}
            />
            </View>
            )}
           
        </View>
    )
}

export default HomePage

