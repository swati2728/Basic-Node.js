const getUsername = userid => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const user = {
                name:'John Doe',
                age: 25
            };
            resolve({user_id: id, username: user.name, age: user.age});
        },1500, userid)
    })
}
const getUserage = userid => {
    return new Promise((resolve, reject) =>{
        setTimeout((id) =>{
            const user = {
                name:'John Doe',
                age: 25
            };
            resolve({user_id:id, user_age: user.age})
        },1500, userid)
    })
}
const getuserIds =  new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([10,20,30,40])
    },1500)
});
getuserIds.then((IDS)=>{
    console.log(IDS)
    return getUsername(IDS[3]);
}).then((userObj) => {
    console.log(userObj)
    return getUserage(userObj.user_id);
}).then((userage) => {
    console.log(userage)
}).catch((erorr)=>{
    console.log(erorr)
})