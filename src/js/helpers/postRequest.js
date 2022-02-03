const postRequest = async (url = '', data = {test: 'false'}) => {

    const response = await fetch(url, {
        method: 'POST',
        body: data
    })
    const result = await response.text()
    console.log(response.status)
    return result;
}

export default postRequest