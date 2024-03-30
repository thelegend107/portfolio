import MD5 from 'crypto-js/md5'

export default function (email: string, size: number = 250) {
    let baseUrl = 'https://gravatar.com/avatar/'
    let emailHash = MD5(email)

    let url = baseUrl + emailHash + '?size=' + size
    return url
}