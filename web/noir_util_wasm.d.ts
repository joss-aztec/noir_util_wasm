/* tslint:disable */
/* eslint-disable */
/**
* @param {string} abi_json_str
* @param {string} inputs_json_str
* @returns {Map<any, any>}
*/
export function arrange_initial_witness(abi_json_str: string, inputs_json_str: string): Map<any, any>;
/**
* @param {string} abi_json_str
* @param {string} inputs_json_str
* @returns {Map<any, any>}
*/
export function arrange_public_witness(abi_json_str: string, inputs_json_str: string): Map<any, any>;
/**
* @param {string} abi_json_str
* @param {Map<any, any>} intermediate_witness
* @returns {string}
*/
export function select_return_value(abi_json_str: string, intermediate_witness: Map<any, any>): string;
/**
* @param {Uint8Array} circuit
* @param {Map<any, any>} intermediate_witness
* @returns {Map<any, any>}
*/
export function select_public_witness(circuit: Uint8Array, intermediate_witness: Map<any, any>): Map<any, any>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly arrange_initial_witness: (a: number, b: number, c: number, d: number) => number;
  readonly arrange_public_witness: (a: number, b: number, c: number, d: number) => number;
  readonly select_return_value: (a: number, b: number, c: number, d: number) => void;
  readonly select_public_witness: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
