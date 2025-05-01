import { Button, FlatList, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import WordSelectors from "../selectors/wordSelectors"
import WordActions from "../actions/word"
import styles from "../styles/homePage"
import isEmpty from "../utils/isEmpty"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = () => {
    const dispatch = useDispatch()
    const word = useSelector(WordSelectors.getWord)
    const meanings = useSelector(WordSelectors.getMeanings)
    const examples = useSelector(WordSelectors.getExamples)
    const history = useSelector(WordSelectors.getHistory)
    const navigation = useNavigation()
    const onCtaPress = () => {
        dispatch(WordActions.fetchWord())
    }


    useEffect(() => {
        if(!isEmpty(history)) {
            const saveStorage = async () => await AsyncStorage.setItem('history', JSON.stringify(history));
            saveStorage()
        }
    }, [history])

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
            {meanings && (<Text style={styles.word} >
                Meaning:: {meanings}
            </Text>)}
            <FlatList
                data={examples}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <Text style={styles.itemText}>{item}</Text>
                )}
                ItemSeparatorComponent={() => (<View style={{ height: 1, backgroundColor: 'gray', width: '100%' }} />)} // Add a separator between items
                />
            
           
        </View>
    )
}

export default HomePage