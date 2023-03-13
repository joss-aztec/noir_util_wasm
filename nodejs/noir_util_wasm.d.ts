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
* @param {Map<any, any>} intermediate_witness
* @returns {string}
*/
export function select_return_value(abi_json_str: string, intermediate_witness: Map<any, any>): string;
