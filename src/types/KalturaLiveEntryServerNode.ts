
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamParams } from './KalturaLiveStreamParams';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';

export interface KalturaLiveEntryServerNodeArgs  extends KalturaEntryServerNodeArgs {
    streams? : KalturaLiveStreamParams[];
}


export class KalturaLiveEntryServerNode extends KalturaEntryServerNode {

    streams : KalturaLiveStreamParams[];

    constructor(data? : KalturaLiveEntryServerNodeArgs)
    {
        super(data);
        if (typeof this.streams === 'undefined') this.streams = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryServerNode' },
				streams : { type : 'a', subTypeConstructor : KalturaLiveStreamParams, subType : 'KalturaLiveStreamParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryServerNode',KalturaLiveEntryServerNode);
