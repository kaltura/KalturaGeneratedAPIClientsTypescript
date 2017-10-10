
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetCsvFromStringParamsActionArgs  extends KalturaRequestArgs {
    id : number;
	params? : string;
}

/**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportGetCsvFromStringParamsAction extends KalturaRequest<string> {

    id : number;
	params : string;

    constructor(data : ReportGetCsvFromStringParamsActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'getCsvFromStringParams' },
				id : { type : 'n' },
				params : { type : 's' }
            }
        );
        return result;
    }
}

