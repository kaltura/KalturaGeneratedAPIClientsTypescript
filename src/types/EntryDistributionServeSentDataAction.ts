
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionServeSentDataActionArgs  extends KalturaRequestArgs {
    id : number;
	actionType : KalturaDistributionAction;
}

/** 
* Serves entry distribution sent data
**/
export class EntryDistributionServeSentDataAction extends KalturaRequest<string> {

    id : number;
	actionType : KalturaDistributionAction;

    constructor(data : EntryDistributionServeSentDataActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_entrydistribution' },
				action : { type : 'c', default : 'serveSentData' },
				id : { type : 'n' },
				actionType : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' }
            }
        );
        return result;
    }
}

