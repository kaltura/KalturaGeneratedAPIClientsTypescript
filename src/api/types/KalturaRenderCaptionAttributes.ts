
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBorderStyle } from './KalturaBorderStyle';
import { KalturaCaptionsAlignment } from './KalturaCaptionsAlignment';
import { KalturaCaptionAttributes, KalturaCaptionAttributesArgs } from './KalturaCaptionAttributes';

export interface KalturaRenderCaptionAttributesArgs  extends KalturaCaptionAttributesArgs {
    fontName? : string;
	fontSize? : number;
	primaryColour? : string;
	borderStyle? : KalturaBorderStyle;
	backColour? : string;
	outlineColour? : string;
	shadow? : number;
	bold? : boolean;
	italic? : boolean;
	underline? : boolean;
	alignment? : KalturaCaptionsAlignment;
	captionAssetId? : string;
}


export class KalturaRenderCaptionAttributes extends KalturaCaptionAttributes {

    fontName : string;
	fontSize : number;
	primaryColour : string;
	borderStyle : KalturaBorderStyle;
	backColour : string;
	outlineColour : string;
	shadow : number;
	bold : boolean;
	italic : boolean;
	underline : boolean;
	alignment : KalturaCaptionsAlignment;
	captionAssetId : string;

    constructor(data? : KalturaRenderCaptionAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRenderCaptionAttributes' },
				fontName : { type : 's' },
				fontSize : { type : 'n' },
				primaryColour : { type : 's' },
				borderStyle : { type : 'en', subTypeConstructor : KalturaBorderStyle, subType : 'KalturaBorderStyle' },
				backColour : { type : 's' },
				outlineColour : { type : 's' },
				shadow : { type : 'n' },
				bold : { type : 'b' },
				italic : { type : 'b' },
				underline : { type : 'b' },
				alignment : { type : 'en', subTypeConstructor : KalturaCaptionsAlignment, subType : 'KalturaCaptionsAlignment' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRenderCaptionAttributes',KalturaRenderCaptionAttributes);
