async function get(url: URL, options?: RequestInit) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return {}
        }
        const json = await response.json();

        return json;
    }
    catch (e) {
        console.log(e);
        return {}
    }
}

async function post(url: URL, options?: RequestInit) {
    await fetch(url, options);
}

export default {
    get,
    post
}