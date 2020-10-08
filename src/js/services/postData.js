const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });

    return await res;
};

const postDataJSON = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'  
        },
        body: JSON.stringify(data)
    });
    return await res;
};

export default postData;
export {postDataJSON};