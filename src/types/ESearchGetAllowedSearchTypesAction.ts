
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';

import { KalturaESearchItem } from './KalturaESearchItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ESearchGetAllowedSearchTypesActionArgs  extends KalturaRequestArgs {
    searchItem : KalturaESearchItem;
}


export class ESearchGetAllowedSearchTypesAction extends KalturaRequest<KalturaKeyValue[]> {

    searchItem : KalturaESearchItem;

    constructor(data : ESearchGetAllowedSearchTypesActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaKeyValue', responseConstructor : KalturaKeyValue  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'elasticsearch_esearch' },
				action : { type : 'c', default : 'getAllowedSearchTypes' },
				searchItem : { type : 'o', subTypeConstructor : KalturaESearchItem, subType : 'KalturaESearchItem' }
            }
        );
        return result;
    }
}

