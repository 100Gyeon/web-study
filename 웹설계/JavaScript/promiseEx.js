function findAndSaveUser(Users) {
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.findOne({ gender: 'm'});
    })
    .then((user) => {
        // 생략
    })
    .catch(err => {
        console.error(err);
    });
}

// 프로미스 패턴 코드를 async/await으로 축약 가능
// 에러 처리를 위해 try catch로 감싸줌
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
        // 생략
    } catch (error) {
        console.error(error);
    }
}

// 화살표 함수도 async/await 가능
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
        // 생략
    } catch (error) {
        console.error(error);
    }
}