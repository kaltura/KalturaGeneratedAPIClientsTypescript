
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEffect } from './KalturaEffect';
import { KalturaCaptionAttributes } from './KalturaCaptionAttributes';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';

export interface KalturaClipAttributesArgs  extends KalturaOperationAttributesArgs {
    offset? : number;
	duration? : number;
	globalOffsetInDestination? : number;
	effectArray? : KalturaEffect[];
	cropAlignment? : number;
	captionAttributes? : KalturaCaptionAttributes[];
}


export class KalturaClipAttributes extends KalturaOperationAttributes {

    offset : number;
	duration : number;
	globalOffsetInDestination : number;
	effectArray : KalturaEffect[];
	cropAlignment : number;
	captionAttributes : KalturaCaptionAttributes[];

    constructor(data? : KalturaClipAttributesArgs)
    {
        super(data);
        if (typeof this.effectArray === 'undefined') this.effectArray = [];
		if (typeof this.captionAttributes === 'undefined') this.captionAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipAttributes' },
				offset : { type : 'n' },
				duration : { type : 'n' },
				globalOffsetInDestination : { type : 'n' },
				effectArray : { type : 'a', subTypeConstructor : KalturaEffect, subType : 'KalturaEffect' },
				cropAlignment : { type : 'n' },
				captionAttributes : { type : 'a', subTypeConstructor : KalturaCaptionAttributes, subType : 'KalturaCaptionAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClipAttributes',KalturaClipAttributes);
