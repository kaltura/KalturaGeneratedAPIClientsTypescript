
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEffect } from './KalturaEffect';
import { KalturaCaptionAttributes } from './KalturaCaptionAttributes';
import { KalturaMediaCompositionAttributes } from './KalturaMediaCompositionAttributes';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';

export interface KalturaClipAttributesArgs  extends KalturaOperationAttributesArgs {
    offset? : number;
	duration? : number;
	globalOffsetInDestination? : number;
	effectArray? : KalturaEffect[];
	cropAlignment? : number;
	captionAttributes? : KalturaCaptionAttributes[];
	mediaCompositionAttributesArray? : KalturaMediaCompositionAttributes[];
}


export class KalturaClipAttributes extends KalturaOperationAttributes {

    offset : number;
	duration : number;
	globalOffsetInDestination : number;
	effectArray : KalturaEffect[];
	cropAlignment : number;
	captionAttributes : KalturaCaptionAttributes[];
	mediaCompositionAttributesArray : KalturaMediaCompositionAttributes[];

    constructor(data? : KalturaClipAttributesArgs)
    {
        super(data);
        if (typeof this.effectArray === 'undefined') this.effectArray = [];
		if (typeof this.captionAttributes === 'undefined') this.captionAttributes = [];
		if (typeof this.mediaCompositionAttributesArray === 'undefined') this.mediaCompositionAttributesArray = [];
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
				captionAttributes : { type : 'a', subTypeConstructor : KalturaCaptionAttributes, subType : 'KalturaCaptionAttributes' },
				mediaCompositionAttributesArray : { type : 'a', subTypeConstructor : KalturaMediaCompositionAttributes, subType : 'KalturaMediaCompositionAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClipAttributes',KalturaClipAttributes);
