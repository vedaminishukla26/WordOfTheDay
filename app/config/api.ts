const apis = {
    fetchWord:() => 'https://api.msmc.cc/api/dictionary/daily',
    fetchWordExample: (word: string) => `https://api.openai.com/v1/responses`
}

export default apis