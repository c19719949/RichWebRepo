import { fromEvent } from 'rxjs';

const button = document.getElementById("greenButton");

const Observable =  fromEvent(button, 'click');

