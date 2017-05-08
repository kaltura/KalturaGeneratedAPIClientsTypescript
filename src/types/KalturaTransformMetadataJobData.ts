
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaTransformMetadataJobDataArgs  extends KalturaJobDataArgs {
    srcXslPath? : string;
	srcVersion? : number;
	destVersion? : number;
	destXsdPath? : string;
	metadataProfileId? : number;
}


export class KalturaTransformMetadataJobData extends KalturaJobData {

    srcXslPath : string;
	srcVersion : number;
	destVersion : number;
	destXsdPath : string;
	metadataProfileId : number;

    constructor(data? : KalturaTransformMetadataJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTransformMetadataJobData' },
				srcXslPath : { type : 's' },
				srcVersion : { type : 'n' },
				destVersion : { type : 'n' },
				destXsdPath : { type : 's' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTransformMetadataJobData',KalturaTransformMetadataJobData);
