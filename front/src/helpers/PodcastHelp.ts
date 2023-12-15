export const convertUrlYoutube = (url: string) => {
    const init1 = "https://www.youtube.com/watch?v="
    const init2 = "https://youtu.be/"
    let send: string = url
    let s = ""
    if (url.startsWith(init1)) {
        s = url.slice(init1.length, url.length)
        send = "https://www.youtube.com/embed/" + s
    }
    if (url.startsWith(init2)) {
        s = url.slice(init2.length, url.length)
        send = "https://www.youtube.com/embed/" + s
    }
    return send
}