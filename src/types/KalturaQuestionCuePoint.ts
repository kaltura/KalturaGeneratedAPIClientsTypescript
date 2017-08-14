
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOptionalAnswer } from './KalturaOptionalAnswer';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaQuestionCuePointArgs  extends KalturaCuePointArgs {
    optionalAnswers? : { [key : string] : KalturaOptionalAnswer};
	hint? : string;
	question? : string;
	explanation? : string;
}


export class KalturaQuestionCuePoint extends KalturaCuePoint {

    optionalAnswers : { [key : string] : KalturaOptionalAnswer};
	hint : string;
	question : string;
	explanation : string;

    constructor(data? : KalturaQuestionCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuestionCuePoint' },
				optionalAnswers : { type : 'm', subTypeConstructor : KalturaOptionalAnswer, subType : 'KalturaOptionalAnswer' },
				hint : { type : 's' },
				question : { type : 's' },
				explanation : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuestionCuePoint',KalturaQuestionCuePoint);
