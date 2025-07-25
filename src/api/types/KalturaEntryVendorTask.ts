
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryVendorTaskStatus } from './KalturaEntryVendorTaskStatus';
import { KalturaEntryObjectType } from './KalturaEntryObjectType';
import { KalturaEntryVendorTaskCreationMode } from './KalturaEntryVendorTaskCreationMode';
import { KalturaVendorTaskData } from './KalturaVendorTaskData';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntryVendorTaskArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	status? : KalturaEntryVendorTaskStatus;
	reachProfileId? : number;
	catalogItemId? : number;
	entryObjectType? : KalturaEntryObjectType;
	unitsUsed? : number;
	errDescription? : string;
	notes? : string;
	context? : string;
	accuracy? : number;
	outputObjectId? : string;
	partnerData? : string;
	taskJobData? : KalturaVendorTaskData;
	externalTaskId? : string;
}


export class KalturaEntryVendorTask extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly vendorPartnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly queueTime : Date;
	readonly finishTime : Date;
	entryId : string;
	status : KalturaEntryVendorTaskStatus;
	reachProfileId : number;
	catalogItemId : number;
	readonly price : number;
	readonly userId : string;
	entryObjectType : KalturaEntryObjectType;
	unitsUsed : number;
	readonly moderatingUser : string;
	errDescription : string;
	readonly accessKey : string;
	readonly version : string;
	notes : string;
	readonly dictionary : string;
	context : string;
	accuracy : number;
	outputObjectId : string;
	partnerData : string;
	readonly creationMode : KalturaEntryVendorTaskCreationMode;
	taskJobData : KalturaVendorTaskData;
	readonly expectedFinishTime : Date;
	readonly serviceType : KalturaVendorServiceType;
	readonly serviceFeature : KalturaVendorServiceFeature;
	readonly turnAroundTime : KalturaVendorServiceTurnAroundTime;
	externalTaskId : string;

    constructor(data? : KalturaEntryVendorTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTask' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				vendorPartnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				queueTime : { type : 'd', readOnly : true },
				finishTime : { type : 'd', readOnly : true },
				entryId : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaEntryVendorTaskStatus, subType : 'KalturaEntryVendorTaskStatus' },
				reachProfileId : { type : 'n' },
				catalogItemId : { type : 'n' },
				price : { type : 'n', readOnly : true },
				userId : { type : 's', readOnly : true },
				entryObjectType : { type : 'en', subTypeConstructor : KalturaEntryObjectType, subType : 'KalturaEntryObjectType' },
				unitsUsed : { type : 'n' },
				moderatingUser : { type : 's', readOnly : true },
				errDescription : { type : 's' },
				accessKey : { type : 's', readOnly : true },
				version : { type : 's', readOnly : true },
				notes : { type : 's' },
				dictionary : { type : 's', readOnly : true },
				context : { type : 's' },
				accuracy : { type : 'n' },
				outputObjectId : { type : 's' },
				partnerData : { type : 's' },
				creationMode : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryVendorTaskCreationMode, subType : 'KalturaEntryVendorTaskCreationMode' },
				taskJobData : { type : 'o', subTypeConstructor : KalturaVendorTaskData, subType : 'KalturaVendorTaskData' },
				expectedFinishTime : { type : 'd', readOnly : true },
				serviceType : { type : 'en', readOnly : true, subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				serviceFeature : { type : 'en', readOnly : true, subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				turnAroundTime : { type : 'en', readOnly : true, subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' },
				externalTaskId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryVendorTask',KalturaEntryVendorTask);
