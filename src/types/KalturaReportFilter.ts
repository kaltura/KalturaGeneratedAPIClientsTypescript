
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReportBaseFilter, KalturaReportBaseFilterArgs } from './KalturaReportBaseFilter';

export interface KalturaReportFilterArgs  extends KalturaReportBaseFilterArgs {
    
}


export class KalturaReportFilter extends KalturaReportBaseFilter {

    

    constructor(data? : KalturaReportFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaReportFilter'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportFilter',KalturaReportFilter);
