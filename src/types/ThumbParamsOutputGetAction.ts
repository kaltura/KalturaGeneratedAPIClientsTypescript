
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsOutputGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get thumb params output object by ID
**/
export class ThumbParamsOutputGetAction extends KalturaRequest<KalturaThumbParamsOutput> {

    id : number;

    constructor(data : ThumbParamsOutputGetActionArgs)
    {
        super(data, 'o', 'KalturaThumbParamsOutput');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbparamsoutput' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

