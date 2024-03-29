
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaCaptionPlaybackPluginData } from './KalturaCaptionPlaybackPluginData';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaObject } from './KalturaObject';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackContextArgs  extends KalturaObjectBaseArgs {
    sources? : KalturaPlaybackSource[];
	playbackCaptions? : KalturaCaptionPlaybackPluginData[];
	flavorAssets? : KalturaFlavorAsset[];
	actions? : KalturaRuleAction[];
	messages? : KalturaAccessControlMessage[];
	bumperData? : KalturaObject[];
}


export class KalturaPlaybackContext extends KalturaObjectBase {

    sources : KalturaPlaybackSource[];
	playbackCaptions : KalturaCaptionPlaybackPluginData[];
	flavorAssets : KalturaFlavorAsset[];
	actions : KalturaRuleAction[];
	messages : KalturaAccessControlMessage[];
	bumperData : KalturaObject[];

    constructor(data? : KalturaPlaybackContextArgs)
    {
        super(data);
        if (typeof this.sources === 'undefined') this.sources = [];
		if (typeof this.playbackCaptions === 'undefined') this.playbackCaptions = [];
		if (typeof this.flavorAssets === 'undefined') this.flavorAssets = [];
		if (typeof this.actions === 'undefined') this.actions = [];
		if (typeof this.messages === 'undefined') this.messages = [];
		if (typeof this.bumperData === 'undefined') this.bumperData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackContext' },
				sources : { type : 'a', subTypeConstructor : KalturaPlaybackSource, subType : 'KalturaPlaybackSource' },
				playbackCaptions : { type : 'a', subTypeConstructor : KalturaCaptionPlaybackPluginData, subType : 'KalturaCaptionPlaybackPluginData' },
				flavorAssets : { type : 'a', subTypeConstructor : KalturaFlavorAsset, subType : 'KalturaFlavorAsset' },
				actions : { type : 'a', subTypeConstructor : KalturaRuleAction, subType : 'KalturaRuleAction' },
				messages : { type : 'a', subTypeConstructor : KalturaAccessControlMessage, subType : 'KalturaAccessControlMessage' },
				bumperData : { type : 'a', subTypeConstructor : KalturaObject, subType : 'KalturaObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackContext',KalturaPlaybackContext);
