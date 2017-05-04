
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaScheduledTaskJobDataArgs  extends KalturaJobDataArgs {
    maxResults? : number;
	resultsFilePath? : string;
	referenceTime? : number;
}


export class KalturaScheduledTaskJobData extends KalturaJobData {

    maxResults : number;
	resultsFilePath : string;
	referenceTime : number;

    constructor(data? : KalturaScheduledTaskJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaScheduledTaskJobData' },
				maxResults : { type : 'n'  },
				resultsFilePath : { type : 's'  },
				referenceTime : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledTaskJobData',KalturaScheduledTaskJobData);
