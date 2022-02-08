const postRequest = async (url = '', data = {test: 'false'}) => {

    const response = await fetch(url, {
        method: 'POST',
        body: data
    })

    if(!response.ok) {
        throw new Error('ОШИБКА отправки на сервер')
    }
    
    return await res.text();
   
}

const getRequest = async (url) => {
    const response = await fetch(url);

    if(!response.ok) {

        throw new Error('ОШИБКА отпрвки GET на сервер');
    }

    return await response.json();
}

export  {postRequest, getRequest};