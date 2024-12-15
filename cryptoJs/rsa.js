//const NodeRSA = require("./node_modules/node-rsa");
import NodeRSA from 'node-rsa';

//const key = new NodeRSA({ b: 512 });
const keyData = '-----BEGIN PUBLIC KEY----- \n' +
    'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGlUeWg0+pBUSYh2VgI9YN6VKqNh\n' +
    'ztNqkeuJuUUs/OGvhKIGxkifzrEfedIQlIE6474FRVWRCaaxchTOnzGLUTYj7o6b\n' +
    'CORd5pSChpsVgpH7JPPVwlwFYQAWwY7uGrq3ltJUgfE+Qjv+TUWT4AK5b8La6Jq0\n' +
    'A9XU4GbykaToP+7zAgMBAAE\n' +
    '-----END PUBLIC KEY-----';

const key = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICWwIBAAKBgGlUeWg0+pBUSYh2VgI9YN6VKqNhztNqkeuJuUUs/OGvhKIGxkif\n' +
    'zrEfedIQlIE6474FRVWRCaaxchTOnzGLUTYj7o6bCORd5pSChpsVgpH7JPPVwlwF\n' +
    'YQAWwY7uGrq3ltJUgfE+Qjv+TUWT4AK5b8La6Jq0A9XU4GbykaToP+7zAgMBAAEC\n' +
    'gYAWPKtVALpVdjYAtryBtrVurJWIqG7vguml74OflnjHrFNBepTuPKXb7JiHw6wBBBRcV\n' +
    'IWWrXFmC8xfihVvcYLLjNtJyIdRR6dl3gUfim6UBu17ex9/xh0LLBT8SKX6s2x1/\n' +
    'ekyCd8zW9idovSumPkh8HrLliha5brDvSLR8nuJCUfVBgQJBALlKFcvOmb9KRbLX\n' +
    'wvZr1/zcEz9AMOFsaDYcmRZJM1aLQNtFnn0PMZZbL26h1PNGV/Lfh7kOg7x4ORwn\n' +
    'JVCkahECQQCRhrmHJ1HlTR6QyCFPZ/MT/j/acYxQi2+uAZO/NCLNsR0yyoTgwflf\n' +
    'gFggYbuqgBQmDQFp7eIWj5oNNDoXzOTDAkEArSy02lsqD0MXiWNm8HEy2T3HL2KL\n' +
    'TOTJMWnhGpcnyEc2Qrn6ut+sdN6cokXWhdjE8lZAv5D1Rv0GQ23CznAcQQJAFJ85\n' +
    '1TwuL8dA6JVjmwQI/zFNTSBAGP3ZYpgYnsS9ldZeY98s+0ihlPX0BwqydFPYBxha\n' +
    'te8e1cGdu/dFsC+5zwJAchRYOPwfsQDt1lwizvHBYX57kwiJ4N/RBPAcxl6hAnvZ\n' +
    'xwhPFheN1d+NIByxUB3PvXSJhDfeWGh8H7TbQfrmBA\n' +
    '-----END RSA PRIVATE KEY-----', 'pkcs1');
//key.importKey(keyData, 'pkcs8');
console.log(key.isPublic(true));
console.log(key.getKeySize());

const text = 'GkhozrqyAZHGoN/ueYQpdA==';
const encrypted_ = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted_);
const decrypted_ = key.decrypt(encrypted_, 'utf8');
console.log('decrypted: ', decrypted_);