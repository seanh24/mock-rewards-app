import {transactionMockData } from './transactions'

const mockDataCall = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData)
        },2000)
    })
}

export const mockFetch = async () => {
    let data = await mockDataCall()
    return data
}

