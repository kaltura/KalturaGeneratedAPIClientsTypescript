
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNode, KalturaServerNodeArgs } from './KalturaServerNode';

export interface KalturaSipServerNodeArgs  extends KalturaServerNodeArgs {
    
}


export class KalturaSipServerNode extends KalturaServerNode {

    

    constructor(data? : KalturaSipServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSipServerNode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSipServerNode',KalturaSipServerNode);
