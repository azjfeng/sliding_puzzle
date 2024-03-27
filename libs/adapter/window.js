import Canvas from './Canvas'

export document from './document'
export navigator from './navigator'
export XMLHttpRequest from './XMLHttpRequest'
export WebSocket from './WebSocket'
export Image from './Image'
export Audio from './Audio'
export FileReader from './FileReader'
export HTMLElement from './HTMLElement'
export localStorage from './localStorage'
export location from './location'
export * from './WindowProperties'
export * from './constructor'
export TouchEvent from './EventIniter/TouchEvent'

export function addEventListener(...args) {
    document.addEventListener(...args)
}

export function removeEventListener(...args) {
    document.removeEventListener(...args)
}

// 暴露全局的 canvas
const canvas = new Canvas()

export {canvas}
export const {setTimeout} = window;
export const {setInterval} = window;
export const {clearTimeout} = window;
export const {clearInterval} = window;
export const {requestAnimationFrame} = window;
export const {cancelAnimationFrame} = window;
export const pageXOffset = 0
export const pageYOffset = 0
export const clientLeft = 0
export const clientTop = 0
export function WebGLRenderingContext() {}
