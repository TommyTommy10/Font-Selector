import Phaser from 'phaser';
import BootScene from './scenes/BootScene.js';
import MapScene from './scenes/MapScene.js';
// Importa qui le altre scene dei minigiochi man mano che le crei

// Configurazione base del gioco
const config = {
    type: Phaser.AUTO, // Sceglie automaticamente WebGL o Canvas
    width: 1280, // Larghezza del gioco (puoi adattarla)
    height: 720, // Altezza del gioco (puoi adattarla)
    scale: {
        mode: Phaser.Scale.FIT, // Scala il gioco per adattarsi allo schermo
        autoCenter: Phaser.Scale.CENTER_BOTH // Centra il gioco orizzontalmente e verticalmente
    },
    physics: {
        default: 'arcade', // Un sistema di fisica semplice e performante per giochi 2D
        arcade: {
            gravity: { y: 0 }, // Nessuna gravità di default per la mappa, o puoi cambiarla per i minigiochi
            debug: false // Imposta a true per vedere i box di collisione (utile in sviluppo)
        }
    },
    scene: [BootScene, MapScene] // L'ordine è importante: BootScene prima
};

// Inizializza il gioco
const game = new Phaser.Game(config);
