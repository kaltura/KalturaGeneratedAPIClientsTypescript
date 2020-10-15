
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportExportFileArgs  extends KalturaObjectBaseArgs {
    fileId? : string;
	fileName? : string;
}


export class KalturaReportExportFile extends KalturaObjectBase {

    fileId : string;
	fileName : string;

    constructor(data? : KalturaReportExportFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportExportFile' },
				fileId : { type : 's' },
				fileName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportExportFile',KalturaReportExportFile);
