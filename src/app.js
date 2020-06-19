import { showAlert } from './mensajes';
import $ from 'jquery';
import "./estilos.scss";


document.getElementById('btn-alert')
.addEventListener('click', showAlert);

$('#btn-jq').click(() => alert('Click con Jquery'));