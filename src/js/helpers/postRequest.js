const postRequest = async (url = '', data = {test: 'false'}) => {

    const response = await fetch(url, {
        method: 'POST',
        body: data
    })
  
    return response
   
}

export default postRequest