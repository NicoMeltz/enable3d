

import {Blob} from 'node:buffer';
//=> Blob {size: 0, type: ''}
 
// Global patch (to support external modules like is-blob).
// globalThis.Blob = Blob;

export { GLTFExporter } from './lib/GLTFExporter'

