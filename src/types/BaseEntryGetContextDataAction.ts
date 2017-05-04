
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryContextDataResult } from './KalturaEntryContextDataResult';

import { KalturaEntryContextDataParams } from './KalturaEntryContextDataParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetContextDataActionArgs  extends KalturaRequestArgs {
    entryId : string;
	contextDataParams : KalturaEntryContextDataParams;
}

/** 
* This action delivers entry-related data, based on the user's context: access
* control, restriction, playback format and storage information.
**/
export class BaseEntryGetContextDataAction extends KalturaRequest<KalturaEntryContextDataResult> {

    entryId : string;
	contextDataParams : KalturaEntryContextDataParams;

    constructor(data : BaseEntryGetContextDataActionArgs)
    {
        super(data, 'o', 'KalturaEntryContextDataResult');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'getContextData' },
				entryId : { type : 's'  },
				contextDataParams : { type : 'o'  , subType : 'KalturaEntryContextDataParams'}
            }
        );
        return result;
    }
}

