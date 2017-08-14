

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDistributionProviderType extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static attUverse = new KalturaDistributionProviderType('attUverseDistribution.ATT_UVERSE');
	static avn = new KalturaDistributionProviderType('avnDistribution.AVN');
	static comcastMrss = new KalturaDistributionProviderType('comcastMrssDistribution.COMCAST_MRSS');
	static crossKaltura = new KalturaDistributionProviderType('crossKalturaDistribution.CROSS_KALTURA');
	static dailymotion = new KalturaDistributionProviderType('dailymotionDistribution.DAILYMOTION');
	static doubleclick = new KalturaDistributionProviderType('doubleClickDistribution.DOUBLECLICK');
	static facebook = new KalturaDistributionProviderType('facebookDistribution.FACEBOOK');
	static freewheel = new KalturaDistributionProviderType('freewheelDistribution.FREEWHEEL');
	static freewheelGeneric = new KalturaDistributionProviderType('freewheelGenericDistribution.FREEWHEEL_GENERIC');
	static ftp = new KalturaDistributionProviderType('ftpDistribution.FTP');
	static ftpScheduled = new KalturaDistributionProviderType('ftpDistribution.FTP_SCHEDULED');
	static generic = new KalturaDistributionProviderType('1');
	static hulu = new KalturaDistributionProviderType('huluDistribution.HULU');
	static idetic = new KalturaDistributionProviderType('ideticDistribution.IDETIC');
	static metroPcs = new KalturaDistributionProviderType('metroPcsDistribution.METRO_PCS');
	static msn = new KalturaDistributionProviderType('msnDistribution.MSN');
	static ndn = new KalturaDistributionProviderType('ndnDistribution.NDN');
	static podcast = new KalturaDistributionProviderType('podcastDistribution.PODCAST');
	static pushToNews = new KalturaDistributionProviderType('pushToNewsDistribution.PUSH_TO_NEWS');
	static quickplay = new KalturaDistributionProviderType('quickPlayDistribution.QUICKPLAY');
	static synacorHbo = new KalturaDistributionProviderType('synacorHboDistribution.SYNACOR_HBO');
	static syndication = new KalturaDistributionProviderType('2');
	static timeWarner = new KalturaDistributionProviderType('timeWarnerDistribution.TIME_WARNER');
	static tvcom = new KalturaDistributionProviderType('tvComDistribution.TVCOM');
	static tvinci = new KalturaDistributionProviderType('tvinciDistribution.TVINCI');
	static unicorn = new KalturaDistributionProviderType('unicornDistribution.UNICORN');
	static uverse = new KalturaDistributionProviderType('uverseDistribution.UVERSE');
	static uverseClickToOrder = new KalturaDistributionProviderType('uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER');
	static verizonVcast = new KalturaDistributionProviderType('verizonVcastDistribution.VERIZON_VCAST');
	static yahoo = new KalturaDistributionProviderType('yahooDistribution.YAHOO');
	static youtube = new KalturaDistributionProviderType('youTubeDistribution.YOUTUBE');
	static youtubeApi = new KalturaDistributionProviderType('youtubeApiDistribution.YOUTUBE_API');
}
KalturaTypesFactory.registerType('KalturaDistributionProviderType',KalturaDistributionProviderType);