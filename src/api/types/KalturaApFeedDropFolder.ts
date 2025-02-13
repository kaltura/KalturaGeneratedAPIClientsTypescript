
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaFeedDropFolder, KalturaFeedDropFolderArgs } from './KalturaFeedDropFolder';

export interface KalturaApFeedDropFolderArgs  extends KalturaFeedDropFolderArgs {
    apApiKey? : string;
	itemsToExpand? : KalturaStringValue[];
}


export class KalturaApFeedDropFolder extends KalturaFeedDropFolder {

    apApiKey : string;
	itemsToExpand : KalturaStringValue[];

    constructor(data? : KalturaApFeedDropFolderArgs)
    {
        super(data);
        if (typeof this.itemsToExpand === 'undefined') this.itemsToExpand = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApFeedDropFolder' },
				apApiKey : { type : 's' },
				itemsToExpand : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApFeedDropFolder',KalturaApFeedDropFolder);
