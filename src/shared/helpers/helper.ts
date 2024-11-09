import { Questions } from 'entities/questions/model/types'

export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const formatQuestion = ({ 
    optionOne, 
    optionTwo, 
    author 
}: Questions ) => {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOne,
    },
    optionTwo: {
      votes: [],
      text: optionTwo,
    }
  }
}