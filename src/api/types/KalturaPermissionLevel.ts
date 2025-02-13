
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryPermissionLevel } from './KalturaUserEntryPermissionLevel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionLevelArgs  extends KalturaObjectBaseArgs {
    permissionLevel? : KalturaUserEntryPermissionLevel;
}


export class KalturaPermissionLevel extends KalturaObjectBase {

    permissionLevel : KalturaUserEntryPermissionLevel;

    constructor(data? : KalturaPermissionLevelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionLevel' },
				permissionLevel : { type : 'en', subTypeConstructor : KalturaUserEntryPermissionLevel, subType : 'KalturaUserEntryPermissionLevel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionLevel',KalturaPermissionLevel);
