
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkServiceFilterDataBase, KalturaBulkServiceFilterDataBaseArgs } from './KalturaBulkServiceFilterDataBase';

export interface KalturaBulkServiceFilterDataArgs  extends KalturaBulkServiceFilterDataBaseArgs {
    templateObject? : KalturaObjectBase;
}


export class KalturaBulkServiceFilterData extends KalturaBulkServiceFilterDataBase {

    templateObject : KalturaObjectBase;

    constructor(data? : KalturaBulkServiceFilterDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkServiceFilterData' },
				templateObject : { type : 'o', subTypeConstructor : KalturaObjectBase, subType : 'KalturaObjectBase' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkServiceFilterData',KalturaBulkServiceFilterData);
