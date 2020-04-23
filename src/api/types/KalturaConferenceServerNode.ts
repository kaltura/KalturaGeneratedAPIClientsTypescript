
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNode, KalturaServerNodeArgs } from './KalturaServerNode';

export interface KalturaConferenceServerNodeArgs  extends KalturaServerNodeArgs {
    serviceBaseUrl? : string;
}


export class KalturaConferenceServerNode extends KalturaServerNode {

    serviceBaseUrl : string;

    constructor(data? : KalturaConferenceServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConferenceServerNode' },
				serviceBaseUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConferenceServerNode',KalturaConferenceServerNode);
