
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaExportToCsvOptionsArgs  extends KalturaObjectBaseArgs {
    format? : string;
}


export class KalturaExportToCsvOptions extends KalturaObjectBase {

    format : string;

    constructor(data? : KalturaExportToCsvOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExportToCsvOptions' },
				format : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExportToCsvOptions',KalturaExportToCsvOptions);
