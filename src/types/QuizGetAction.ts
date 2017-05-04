
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Allows to get a quiz
**/
export class QuizGetAction extends KalturaRequest<KalturaQuiz> {

    entryId : string;

    constructor(data : QuizGetActionArgs)
    {
        super(data, 'o', 'KalturaQuiz');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'quiz_quiz' },
				action : { type : 'c' , default : 'get' },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}

