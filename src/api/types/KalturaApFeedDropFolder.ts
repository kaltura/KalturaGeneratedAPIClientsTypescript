
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeedDropFolder, KalturaFeedDropFolderArgs } from './KalturaFeedDropFolder';

export interface KalturaApFeedDropFolderArgs  extends KalturaFeedDropFolderArgs {
    apApiKey? : string;
}


export class KalturaApFeedDropFolder extends KalturaFeedDropFolder {

    apApiKey : string;

    constructor(data? : KalturaApFeedDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApFeedDropFolder' },
				apApiKey : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApFeedDropFolder',KalturaApFeedDropFolder);
