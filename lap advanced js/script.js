let developer = {
name: "Ahmed",
birthYear: 1992,
skills: ["PhotoShop", "HTML", "CSS", "JS"],
getAge: function(){
return 2021 - this.birthYear
}
};

let [designSkills, ...devSkills]=developer.skills
console.log(devSkills);
const newSkills = ["ES6", "ES7", "ES😎"];
devSkills=[...devSkills,...newSkills];