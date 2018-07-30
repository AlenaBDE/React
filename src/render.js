import React, { Component } from "react";
import LoadCards from "./cards_engine"
import {cardClick} from './events';

export let mas = new LoadCards(2, 4);

export default class AddCards extends Component {
    render() {
        let tableTemplate;
        let idIndex = 0;

        function makeColumns(rowCards) {
            return rowCards.map((row, i) => {
                ++idIndex;
                return <td key={i}>
                    <div className={'card'}>
                        <div id={'f' + idIndex} data={row.index} className={'front'} onClick={cardClick}><img src={mas.getBack(1)}/></div>
                        <div id={'b' + idIndex} data={row.index} className={'back'} onClick={cardClick}><img src={row.img}/></div>
                    </div>
                </td>
            });
        }

        tableTemplate = mas.getCards(mas.row_count, mas.colunt_count).map((rowCards, i) => {
            return <tr key={i}>{makeColumns(rowCards)}</tr>
        });

        return (
            <table>
                {tableTemplate}
            </table>
        )
    }
}