import md5 from 'md5'

import privateKey from '../.secret'

export const publicKey = 'd1925cd3b431b62ac236c00d3c681015'

export const timeStamp = new Date().getMilliseconds()

export const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
