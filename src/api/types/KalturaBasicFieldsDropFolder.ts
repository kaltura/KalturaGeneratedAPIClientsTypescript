
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBasicFieldsDropFolderArgs  extends KalturaObjectBaseArgs {
    description? : string;
}


export class KalturaBasicFieldsDropFolder extends KalturaObjectBase {

    description : string;

    constructor(data? : KalturaBasicFieldsDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBasicFieldsDropFolder' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBasicFieldsDropFolder',KalturaBasicFieldsDropFolder);
