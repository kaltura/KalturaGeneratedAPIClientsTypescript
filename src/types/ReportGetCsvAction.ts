
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetCsvActionArgs  extends KalturaRequestArgs {
    id : number;
	params? : KalturaKeyValue[];
}


export class ReportGetCsvAction extends KalturaRequest<string> {

    id : number;
	params : KalturaKeyValue[];

    constructor(data : ReportGetCsvActionArgs)
    {
        super(data, 'f', '');
        if (typeof this.params === 'undefined') this.params = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'report' },
				action : { type : 'c' , default : 'getCsv' },
				id : { type : 'n'  },
				params : { type : 'a'  , subType : 'KalturaKeyValue'}
            }
        );
        return result;
    }
}

