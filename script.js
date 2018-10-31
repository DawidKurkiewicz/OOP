// const growJSskill = function () {
//     return this.JSskill = this.JSskill + 1
// }


// this.JSskill = this.JSskill + 1 = {
//     name: 'dawid',
//     JSskill: 1,
//     growJSskill: growJSskill
// }

// const brother = {
//     name: 'zygmunt',
//     JSskill: 0,
//     growJSskill: growJSskill
// }


// me.growJSskill()
// brother.growJSskill()


const growJSskill = function (){
    this.JSskill = this.JSskill + 1
}
const makePerson = function (name, initialSkill) {
    return {
        name: name,
        JSskill: initialSkill,
        growJSskill: growJSskill
    }
}


const me = makePerson ('dawid' , 999)


const brothers = []
for(let i = 0; i < 100; i++){
    brothers[i] = makePerson(i, i + 1)
}