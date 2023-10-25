import { IRule } from "./types";
import { generate } from "random-words";
import { Moon } from "lunarphase-js";

export const validate1  = (string:string)=>{
    return string.length >=6
}
export const validate2 = (string: string)=>{
    return /\d+/g.test(string);

}
export const validate3 = (string: string)=>{
    return 1===string.match(/[~`!#$@%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g)?.length

}
export const validate4 = (string: string)=>{
    const array = string.match(/\d+/g)
    const result: number[] = []
    array?.forEach(el=>el.split('').forEach(el1=>result.push(Number(el1))))
    return result.reduce((a:number, b:number)=> a+b, 0) === 15
}
export const validate5 = (string: string)=>{
    return string.includes('+20')

}
export const validate6 = (string: string, rule: IRule)=> {
    return string.includes(rule?.qr||'')
}
export const validate7 = (string: string) => {
    const phase = Moon.lunarPhaseEmoji()	
    return string.includes(phase)
}
export const validate8 = (string: string, rule: IRule) => {
    console.log(rule, string)
    return string.includes(rule?.capcha||'')
}
export const validate9 = (string: string, rule: IRule) => {
    console.log(rule, string)
    return string === rule.capcha
}
export const allRules: IRule[] = [
    {
      id: 0,
      header: 'Rule 1',
      text: 'Password must contain at leas 6 symbols',
      status: 'notShown',
      shown: false,
      validation: validate1,
    },
    {
      id: 1,
      header: 'Rule 2',
      text: 'Password must contain at least 1 number',
      status: 'notShown',
      shown: false,
      validation: validate2
    },
    {
        id: 2,
        header: 'Rule 3',
        text: 'Password must contain special symbol',
        status: 'notShown',
        shown: false,
        validation: validate3,
    },
    {
        id: 3,
        header: 'Rule 4',
        text: 'Summ of numbers in your password must be equal 15',
        status: 'notShown',
        shown: false,
        validation: validate4,
    },
    {
        id: 4,
        header: 'Rule 5',
        text: 'Your password must include Dialing Egypt code',
        status: 'notShown',
        shown: false,
        validation: validate5,
    },
    // {
    //     id: 5,
    //     header: 'Rule 6',
    //     text: 'Your password must include text behind this capture',
    //     status: 'notShown',
    //     shown: false,
    //     qr: generate({min: 2, max:4 }).map(el=>el[0].toUpperCase() + el.slice(1)).join(''),
    //     validation: validate6,
    // },
    {
        id: 6,
        header: 'Rule 7',
    text: 'Your password must include an emojy of a moon in the current phase in Northern Hemisphere',
    status: 'notShown',
    shown: false,
    validation: validate7,
    },
    {
        id: 7,
        header: 'Rule 8',
    text: 'Your password must include content of the capcha',
    status: 'notShown',
    shown: false,
    capcha: 'string',
    validation: validate8,
    },
    {
        id: 8,
        header: 'Rule 9',
        text: 'Your password must include dddd',
        status: 'notShown',
        shown: false,
        validation: validate9,
    }
  ]


 export const sortHelper = (array:IRule[])=> {
    const firstArr: IRule[] = []
    const secondArr: IRule[] = []
    array.forEach((el:IRule)=>{
        el.status === 'error'? firstArr.push(el): secondArr.push(el)
    })
    return firstArr.sort((a, b)=> a.id - b.id).concat(secondArr.sort((a, b)=> b.id - a.id))
  }