
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaClipConcatJobDataArgs  extends KalturaJobDataArgs {
    destEntryId? : string;
	tempEntryId? : string;
	sourceEntryId? : string;
	importUrl? : string;
	partnerId? : number;
	priority? : number;
	operationAttributes? : KalturaOperationAttributes[];
	resourceOrder? : number;
	conversionParams? : string;
}


export class KalturaClipConcatJobData extends KalturaJobData {

    destEntryId : string;
	tempEntryId : string;
	sourceEntryId : string;
	importUrl : string;
	partnerId : number;
	priority : number;
	operationAttributes : KalturaOperationAttributes[];
	resourceOrder : number;
	conversionParams : string;

    constructor(data? : KalturaClipConcatJobDataArgs)
    {
        super(data);
        if (typeof this.operationAttributes === 'undefined') this.operationAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipConcatJobData' },
				destEntryId : { type : 's' },
				tempEntryId : { type : 's' },
				sourceEntryId : { type : 's' },
				importUrl : { type : 's' },
				partnerId : { type : 'n' },
				priority : { type : 'n' },
				operationAttributes : { type : 'a', subTypeConstructor : KalturaOperationAttributes, subType : 'KalturaOperationAttributes' },
				resourceOrder : { type : 'n' },
				conversionParams : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClipConcatJobData',KalturaClipConcatJobData);
