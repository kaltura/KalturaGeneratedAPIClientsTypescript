
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetCsvActionArgs  extends KalturaRequestArgs {
    id : number;
	params? : KalturaKeyValue[];
}

/**
 * Build request payload for service 'report' action 'getCsv'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportGetCsvAction extends KalturaRequest<string> {

    id : number;
	params : KalturaKeyValue[];

    constructor(data : ReportGetCsvActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
        if (typeof this.params === 'undefined') this.params = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getCsv' },
				id : { type : 'n' },
				params : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

