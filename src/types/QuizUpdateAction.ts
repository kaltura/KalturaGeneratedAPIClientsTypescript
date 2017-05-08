
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	quiz : KalturaQuiz;
}

/** 
* Allows to update a quiz
**/
export class QuizUpdateAction extends KalturaRequest<KalturaQuiz> {

    entryId : string;
	quiz : KalturaQuiz;

    constructor(data : QuizUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaQuiz', responseConstructor : KalturaQuiz  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'quiz_quiz' },
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				quiz : { type : 'o', subTypeConstructor : KalturaQuiz, subType : 'KalturaQuiz' }
            }
        );
        return result;
    }
}

