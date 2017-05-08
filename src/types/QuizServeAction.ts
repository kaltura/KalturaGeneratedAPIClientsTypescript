
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaQuizOutputType } from './KalturaQuizOutputType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizServeActionArgs  extends KalturaRequestArgs {
    entryId : string;
	quizOutputType : KalturaQuizOutputType;
}

/** 
* creates a pdf from quiz object   The Output type defines the file format in
* which the quiz will be generated   Currently only PDF files are supported
**/
export class QuizServeAction extends KalturaRequest<string> {

    entryId : string;
	quizOutputType : KalturaQuizOutputType;

    constructor(data : QuizServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'quiz_quiz'  },
				action : { type : 'c' , default : 'serve'  },
				entryId : { type : 's'   },
				quizOutputType : { type : 'en'   , subType : 'KalturaQuizOutputType'}
            }
        );
        return result;
    }
}

