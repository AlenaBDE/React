import React from "react";
import ReactDOM from "react-dom";
import AddCards from "./render";
import {mas} from './render';
import {timer} from './timer'
import {createStore} from 'redux';
import {reducer, currentUser, addValue} from './reducers/index'

let user = new currentUser();

const store = createStore(reducer);

function SetValueCard() {
    this.id = '';
    this.value = -1;
}

function clearValue() {
    currentCard.id = '';
    currentCard.value = -1;
    Object.assign(previousCard, currentCard)
}

let previousCard = new SetValueCard;
let currentCard = new SetValueCard;
let clickFlag = true;
let allCards = 8;


export function createTeble(obj) {
    switch (obj.currentTarget.id) {
        case 'difficultLow':
            mas.setTableSize(2, 4);
            allCards = 2 * 4;
            user.level = 'low';
            break;
        case 'difficultMedium':
            mas.setTableSize(3, 4);
            allCards = 3 * 4;
            user.level = 'mid';
            break;
        case
        'difficultHigh':
            mas.setTableSize(3, 5);
            allCards = 3 * 5;
            user.level = 'high';
            break;
        default:
            mas.setTableSize(2, 4);
            allCards = 2 * 4;
            user.level = 'low';
            break;
    }
    $('.front, .back').toggleClass('hover-front hover-back hidden-card', false);
    ReactDOM.render(<AddCards/>, document.getElementById('table_card'));
    timer.startTimer();
}

function assignStyle(id, style1, style2) {
    $('#' + id.replace("b", "f")).toggleClass(style1);
    $('#' + id.replace("f", "b")).toggleClass(style2);
}


export function cardClick(obj) {

    if (!clickFlag) return;
    let id = obj.currentTarget.id;
    let value = obj.currentTarget.attributes.data.value;

    if (previousCard.value !== currentCard.value) {
        Object.assign(previousCard, currentCard);
    }

    if (id.indexOf('f') > -1) {
        currentCard.id = id;
        currentCard.value = value;
    }
    else {
        currentCard.value = -1;
        currentCard.id = '';
    }

    compareCards(previousCard.value, currentCard.value);

    assignStyle(id, 'hover-front', 'hover-back');
}


function compareCards(previousValue, currentValue) {
    if (!(previousValue === undefined) && !(currentValue === undefined)) {
        if (previousValue === currentValue) {
            assignStyle(previousCard.id, 'hidden-card', 'hidden-card');
            assignStyle(currentCard.id, 'hidden-card', 'hidden-card');
            clearValue();
            allCards = allCards - 2;
            if (allCards === 0) {
                user.fullTime = timer.stopTimer();
                store.dispatch(addValue);
                alert(store.getState());
            }
        } else {
            clickFlag = false;
            if (previousCard.value !== -1 && currentCard.value !== -1) {
                setTimeout(() => {
                    assignStyle(previousCard.id, 'hover-front', 'hover-back');
                    assignStyle(currentCard.id, 'hover-front', 'hover-back');
                    clearValue();
                    clickFlag = true;
                }, 1000);
            }
            else {
                clickFlag = true;
            }
        }
    }
}

export function buttonClick() {
    let userName = $('#user-input').val();
    if (userName !== '') {
        user.userName = userName;
        $('.user').hide();
        timer.startTimer();
    }
}
