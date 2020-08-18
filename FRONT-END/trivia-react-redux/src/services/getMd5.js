import md5 from 'crypto-js/md5';

const emailHash = (email) => md5(email).toString().toLowerCase().trim();

export default emailHash;
