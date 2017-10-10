
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionServeReturnedDataActionArgs  extends KalturaRequestArgs {
    id : number;
	actionType : KalturaDistributionAction;
}

/**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryDistributionServeReturnedDataAction extends KalturaRequest<string> {

    id : number;
	actionType : KalturaDistributionAction;

    constructor(data : EntryDistributionServeReturnedDataActionArgs)
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
				action : { type : 'c', default : 'serveReturnedData' },
				id : { type : 'n' },
				actionType : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' }
            }
        );
        return result;
    }
}

