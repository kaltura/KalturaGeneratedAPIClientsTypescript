
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';

export interface KalturaSipEntryServerNodeArgs  extends KalturaEntryServerNodeArgs {
    
}


export class KalturaSipEntryServerNode extends KalturaEntryServerNode {

    readonly sipRoomId : string;
	readonly sipPrimaryAdpId : string;
	readonly sipSecondaryAdpId : string;

    constructor(data? : KalturaSipEntryServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSipEntryServerNode' },
				sipRoomId : { type : 's', readOnly : true },
				sipPrimaryAdpId : { type : 's', readOnly : true },
				sipSecondaryAdpId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSipEntryServerNode',KalturaSipEntryServerNode);
