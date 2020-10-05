const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data
    });

    return await res;
};

export default postData;