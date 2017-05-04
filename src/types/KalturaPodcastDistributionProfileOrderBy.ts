

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPodcastDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaPodcastDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaPodcastDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaPodcastDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaPodcastDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaPodcastDistributionProfileOrderBy',KalturaPodcastDistributionProfileOrderBy);