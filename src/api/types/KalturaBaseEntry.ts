
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMultiLingualString } from './KalturaMultiLingualString';
import { KalturaEntryStatus } from './KalturaEntryStatus';
import { KalturaEntryModerationStatus } from './KalturaEntryModerationStatus';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaLicenseType } from './KalturaLicenseType';
import { KalturaEntryReplacementStatus } from './KalturaEntryReplacementStatus';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaEntryDisplayInSearchType } from './KalturaEntryDisplayInSearchType';
import { KalturaEntryApplication } from './KalturaEntryApplication';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseEntryArgs  extends KalturaObjectBaseArgs {
    name? : string;
	multiLingual_name? : KalturaMultiLingualString[];
	description? : string;
	multiLingual_description? : KalturaMultiLingualString[];
	userId? : string;
	creatorId? : string;
	tags? : string;
	multiLingual_tags? : KalturaMultiLingualString[];
	adminTags? : string;
	categories? : string;
	categoriesIds? : string;
	type? : KalturaEntryType;
	groupId? : number;
	partnerData? : string;
	licenseType? : KalturaLicenseType;
	accessControlId? : number;
	startDate? : Date;
	endDate? : Date;
	referenceId? : string;
	partnerSortValue? : number;
	conversionProfileId? : number;
	redirectEntryId? : string;
	parentEntryId? : string;
	operationAttributes? : KalturaOperationAttributes[];
	entitledUsersEdit? : string;
	entitledUsersPublish? : string;
	entitledUsersView? : string;
	templateEntryId? : string;
	displayInSearch? : KalturaEntryDisplayInSearchType;
	application? : KalturaEntryApplication;
	applicationVersion? : string;
	blockAutoTranscript? : boolean;
}


export class KalturaBaseEntry extends KalturaObjectBase {

    readonly id : string;
	name : string;
	multiLingual_name : KalturaMultiLingualString[];
	description : string;
	multiLingual_description : KalturaMultiLingualString[];
	readonly partnerId : number;
	userId : string;
	creatorId : string;
	tags : string;
	multiLingual_tags : KalturaMultiLingualString[];
	adminTags : string;
	categories : string;
	categoriesIds : string;
	readonly status : KalturaEntryStatus;
	readonly moderationStatus : KalturaEntryModerationStatus;
	readonly moderationCount : number;
	type : KalturaEntryType;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly rank : number;
	readonly totalRank : number;
	readonly votes : number;
	groupId : number;
	partnerData : string;
	readonly downloadUrl : string;
	readonly searchText : string;
	licenseType : KalturaLicenseType;
	readonly version : number;
	readonly thumbnailUrl : string;
	accessControlId : number;
	startDate : Date;
	endDate : Date;
	referenceId : string;
	readonly replacingEntryId : string;
	readonly replacedEntryId : string;
	readonly replacementStatus : KalturaEntryReplacementStatus;
	partnerSortValue : number;
	conversionProfileId : number;
	redirectEntryId : string;
	readonly rootEntryId : string;
	parentEntryId : string;
	operationAttributes : KalturaOperationAttributes[];
	entitledUsersEdit : string;
	entitledUsersPublish : string;
	entitledUsersView : string;
	readonly capabilities : string;
	templateEntryId : string;
	displayInSearch : KalturaEntryDisplayInSearchType;
	application : KalturaEntryApplication;
	applicationVersion : string;
	blockAutoTranscript : boolean;
	readonly defaultLanguage : string;
	readonly responseLanguage : string;

    constructor(data? : KalturaBaseEntryArgs)
    {
        super(data);
        if (typeof this.multiLingual_name === 'undefined') this.multiLingual_name = [];
		if (typeof this.multiLingual_description === 'undefined') this.multiLingual_description = [];
		if (typeof this.multiLingual_tags === 'undefined') this.multiLingual_tags = [];
		if (typeof this.operationAttributes === 'undefined') this.operationAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntry' },
				id : { type : 's', readOnly : true },
				name : { type : 's' },
				multiLingual_name : { type : 'a', subTypeConstructor : KalturaMultiLingualString, subType : 'KalturaMultiLingualString' },
				description : { type : 's' },
				multiLingual_description : { type : 'a', subTypeConstructor : KalturaMultiLingualString, subType : 'KalturaMultiLingualString' },
				partnerId : { type : 'n', readOnly : true },
				userId : { type : 's' },
				creatorId : { type : 's' },
				tags : { type : 's' },
				multiLingual_tags : { type : 'a', subTypeConstructor : KalturaMultiLingualString, subType : 'KalturaMultiLingualString' },
				adminTags : { type : 's' },
				categories : { type : 's' },
				categoriesIds : { type : 's' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaEntryStatus, subType : 'KalturaEntryStatus' },
				moderationStatus : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryModerationStatus, subType : 'KalturaEntryModerationStatus' },
				moderationCount : { type : 'n', readOnly : true },
				type : { type : 'es', subTypeConstructor : KalturaEntryType, subType : 'KalturaEntryType' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				rank : { type : 'n', readOnly : true },
				totalRank : { type : 'n', readOnly : true },
				votes : { type : 'n', readOnly : true },
				groupId : { type : 'n' },
				partnerData : { type : 's' },
				downloadUrl : { type : 's', readOnly : true },
				searchText : { type : 's', readOnly : true },
				licenseType : { type : 'en', subTypeConstructor : KalturaLicenseType, subType : 'KalturaLicenseType' },
				version : { type : 'n', readOnly : true },
				thumbnailUrl : { type : 's', readOnly : true },
				accessControlId : { type : 'n' },
				startDate : { type : 'd' },
				endDate : { type : 'd' },
				referenceId : { type : 's' },
				replacingEntryId : { type : 's', readOnly : true },
				replacedEntryId : { type : 's', readOnly : true },
				replacementStatus : { type : 'es', readOnly : true, subTypeConstructor : KalturaEntryReplacementStatus, subType : 'KalturaEntryReplacementStatus' },
				partnerSortValue : { type : 'n' },
				conversionProfileId : { type : 'n' },
				redirectEntryId : { type : 's' },
				rootEntryId : { type : 's', readOnly : true },
				parentEntryId : { type : 's' },
				operationAttributes : { type : 'a', subTypeConstructor : KalturaOperationAttributes, subType : 'KalturaOperationAttributes' },
				entitledUsersEdit : { type : 's' },
				entitledUsersPublish : { type : 's' },
				entitledUsersView : { type : 's' },
				capabilities : { type : 's', readOnly : true },
				templateEntryId : { type : 's' },
				displayInSearch : { type : 'en', subTypeConstructor : KalturaEntryDisplayInSearchType, subType : 'KalturaEntryDisplayInSearchType' },
				application : { type : 'es', subTypeConstructor : KalturaEntryApplication, subType : 'KalturaEntryApplication' },
				applicationVersion : { type : 's' },
				blockAutoTranscript : { type : 'b' },
				defaultLanguage : { type : 's', readOnly : true },
				responseLanguage : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntry',KalturaBaseEntry);
