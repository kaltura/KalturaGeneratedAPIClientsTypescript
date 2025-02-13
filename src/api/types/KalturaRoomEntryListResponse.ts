
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRoomEntry } from './KalturaRoomEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRoomEntryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaRoomEntryListResponse extends KalturaListResponse {

    readonly objects : KalturaRoomEntry[];

    constructor(data? : KalturaRoomEntryListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRoomEntryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaRoomEntry, subType : 'KalturaRoomEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRoomEntryListResponse',KalturaRoomEntryListResponse);
