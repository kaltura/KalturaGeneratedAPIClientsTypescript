
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupType } from './KalturaGroupType';
import { KalturaGroupUserBaseFilter, KalturaGroupUserBaseFilterArgs } from './KalturaGroupUserBaseFilter';

export interface KalturaGroupUserFilterArgs  extends KalturaGroupUserBaseFilterArgs {
    groupType? : KalturaGroupType;
}


export class KalturaGroupUserFilter extends KalturaGroupUserBaseFilter {

    groupType : KalturaGroupType;

    constructor(data? : KalturaGroupUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupUserFilter' },
				groupType : { type : 'en', subTypeConstructor : KalturaGroupType, subType : 'KalturaGroupType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupUserFilter',KalturaGroupUserFilter);
