
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaEntryCaptionAdvancedFilterArgs  extends KalturaSearchItemArgs {
    hasCaption? : KalturaNullableBoolean;
}


export class KalturaEntryCaptionAdvancedFilter extends KalturaSearchItem {

    hasCaption : KalturaNullableBoolean;

    constructor(data? : KalturaEntryCaptionAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryCaptionAdvancedFilter' },
				hasCaption : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryCaptionAdvancedFilter',KalturaEntryCaptionAdvancedFilter);
