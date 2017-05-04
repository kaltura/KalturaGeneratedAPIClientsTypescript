
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Generic Distribution Provider by id
**/
export class GenericDistributionProviderDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : GenericDistributionProviderDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovider' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

