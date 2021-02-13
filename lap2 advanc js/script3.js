const getUsers = async () => {
    const response = await fetch('users.json')
    const users = await response.json();
    let {results,info}=users;
    console.log(users);
    console.log(results);
    results.forEach(function (user) {
        let name=user.name;
        
        user.fullname = `${name.title}${name.first}${name.last}`;
      });
      console.log(results[0]);
      
const fiftyoldUser = results.filter((item) => {
    if(item.gender=="male"&& item.dob.age>50)
        return item ;
});
console.log(fiftyoldUser);
let obj={};
const groupbynationality=fiftyoldUser.reduce((acc,prop)=>{
    let nat=prop.nat;
    
    if(obj.hasOwnProperty(nat)){
       
        obj[nat].push(prop);
      
    }else{
        obj={
            ...obj,
            [nat]:[]
        }
        obj[nat].push(prop);
    }
    
return obj;

},{});
console.log(groupbynationality);
let userfr=obj['FR'];
let lowstageuser=0;
let youngeruser;
for(user of userfr){
    if(lowstageuser<user.dob.age){
        lowstageuser=user.dob.age;
        youngeruser=user;
    }
    
}
console.log(`younder perrson  with age ${lowstageuser}`)
console.log(youngeruser);
}

getUsers()