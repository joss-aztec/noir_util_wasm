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
/**
* @param {Uint8Array} circuit
* @param {Map<any, any>} intermediate_witness
* @returns {Array<any>}
*/
export function select_public_witness_flattened(circuit: Uint8Array, intermediate_witness: Map<any, any>): Array<any>;
/**
* @param {Uint8Array} circuit
* @param {Map<any, any>} intermediate_witness
* @returns {Array<any>}
*/
export function select_return_flattened(circuit: Uint8Array, intermediate_witness: Map<any, any>): Array<any>;
