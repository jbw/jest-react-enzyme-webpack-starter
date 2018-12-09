

const login = async (username, password) => {
    return new Promise(function (resolve, reject) {
        if (username === 'jason' && password === 'watson') {
            resolve({ "token": "caspian" });
        }
        reject(new Error({ message: '' }));
    });
};


export default login;
