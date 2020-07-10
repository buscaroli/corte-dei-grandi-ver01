import { combineReducers } from 'redux'


const landingPicLinks = ['./landingPics/landing-top.jpg']
const petsListOfLinks = [
    {
        pic: './pics/pic01.jpg',
        text: 'Consectetur do enim commodo enim.'},
    {
        pic: './pics/pic02.jpg',
        text: 'Sint aute sit dolore fugiat nostrud cillum anim velit cupidatat magna.'
    },
    {
        pic: './pics/pic03.jpg',
        text: 'Irure velit aliquip culpa in in fugiat incididunt ullamco pariatur amet id do consectetur qui.'},
    {
        pic: './pics/pic04.jpg',
        text: 'Qui laboris deserunt ad nulla ad exercitation culpa amet proident ex non.'},
    {
        pic: './pics/pic05.jpg',
        text: 'Nulla eu commodo commodo occaecat exercitation exercitation minim in in.'
    }
]

const aboutPics = ['./aboutPics/about-top.jpg']


const landingReducer = () => {
    return landingPicLinks
}

const petsReducer = () => {
    return petsListOfLinks
}

const aboutReducer = () => {
    return aboutPics
}

export default combineReducers({
    landing: landingReducer,
    pets: petsReducer,
    pictures: null,
    services: null,
    aboutPics: aboutReducer,
    contacts: null
})