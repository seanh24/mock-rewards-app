import {transactions} from './transactions'

const mockDataCall = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(transactions)
        },2000)
    })
}

export const mockFetch = async () => {
    let data = await mockDataCall()
    return data
}

