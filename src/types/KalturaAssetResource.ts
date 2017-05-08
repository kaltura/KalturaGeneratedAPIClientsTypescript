
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaAssetResourceArgs  extends KalturaContentResourceArgs {
    assetId? : string;
}

/** 
* Used to ingest media that is already ingested to Kaltura system as a different
* flavor asset in the past, the new created flavor asset will be ready immediately
* using a file sync of link type that will point to the existing file sync of the
* existing flavor asset.
**/
export class KalturaAssetResource extends KalturaContentResource {

    assetId : string;

    constructor(data? : KalturaAssetResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaAssetResource'  },
				assetId : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetResource',KalturaAssetResource);
