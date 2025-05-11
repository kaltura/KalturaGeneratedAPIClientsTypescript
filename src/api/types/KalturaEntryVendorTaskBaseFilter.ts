
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryVendorTaskStatus } from './KalturaEntryVendorTaskStatus';
import { KalturaEntryObjectType } from './KalturaEntryObjectType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaEntryVendorTaskBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	vendorPartnerIdEqual? : number;
	vendorPartnerIdIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	queueTimeGreaterThanOrEqual? : Date;
	queueTimeLessThanOrEqual? : Date;
	finishTimeGreaterThanOrEqual? : Date;
	finishTimeLessThanOrEqual? : Date;
	entryIdEqual? : string;
	statusEqual? : KalturaEntryVendorTaskStatus;
	statusIn? : string;
	reachProfileIdEqual? : number;
	reachProfileIdIn? : string;
	catalogItemIdEqual? : number;
	catalogItemIdIn? : string;
	userIdEqual? : string;
	contextEqual? : string;
	expectedFinishTimeGreaterThanOrEqual? : Date;
	expectedFinishTimeLessThanOrEqual? : Date;
	entryObjectTypeEqual? : KalturaEntryObjectType;
	entryObjectTypeIn? : string;
	entryObjectTypeNotIn? : string;
}


export class KalturaEntryVendorTaskBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	vendorPartnerIdEqual : number;
	vendorPartnerIdIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	queueTimeGreaterThanOrEqual : Date;
	queueTimeLessThanOrEqual : Date;
	finishTimeGreaterThanOrEqual : Date;
	finishTimeLessThanOrEqual : Date;
	entryIdEqual : string;
	statusEqual : KalturaEntryVendorTaskStatus;
	statusIn : string;
	reachProfileIdEqual : number;
	reachProfileIdIn : string;
	catalogItemIdEqual : number;
	catalogItemIdIn : string;
	userIdEqual : string;
	contextEqual : string;
	expectedFinishTimeGreaterThanOrEqual : Date;
	expectedFinishTimeLessThanOrEqual : Date;
	entryObjectTypeEqual : KalturaEntryObjectType;
	entryObjectTypeIn : string;
	entryObjectTypeNotIn : string;

    constructor(data? : KalturaEntryVendorTaskBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTaskBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				vendorPartnerIdEqual : { type : 'n' },
				vendorPartnerIdIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				queueTimeGreaterThanOrEqual : { type : 'd' },
				queueTimeLessThanOrEqual : { type : 'd' },
				finishTimeGreaterThanOrEqual : { type : 'd' },
				finishTimeLessThanOrEqual : { type : 'd' },
				entryIdEqual : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaEntryVendorTaskStatus, subType : 'KalturaEntryVendorTaskStatus' },
				statusIn : { type : 's' },
				reachProfileIdEqual : { type : 'n' },
				reachProfileIdIn : { type : 's' },
				catalogItemIdEqual : { type : 'n' },
				catalogItemIdIn : { type : 's' },
				userIdEqual : { type : 's' },
				contextEqual : { type : 's' },
				expectedFinishTimeGreaterThanOrEqual : { type : 'd' },
				expectedFinishTimeLessThanOrEqual : { type : 'd' },
				entryObjectTypeEqual : { type : 'en', subTypeConstructor : KalturaEntryObjectType, subType : 'KalturaEntryObjectType' },
				entryObjectTypeIn : { type : 's' },
				entryObjectTypeNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryVendorTaskBaseFilter',KalturaEntryVendorTaskBaseFilter);
