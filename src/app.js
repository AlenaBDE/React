import React from "react";
import ReactDOM from "react-dom";
import AddCards from "./render";
import {createTeble,  buttonClick} from './events';

$(document).ready(function () {
    $('#difficultLow, #difficultMedium, #difficultHigh').click(createTeble);
    $('#user-button').click(buttonClick);
    ReactDOM.render(<AddCards/>, document.getElementById('table_card'));
});




