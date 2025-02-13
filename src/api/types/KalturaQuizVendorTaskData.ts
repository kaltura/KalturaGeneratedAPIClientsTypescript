
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaQuizVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    numberOfQuestions? : number;
	questionsType? : string;
	context? : string;
	formalStyle? : string;
	createQuiz? : boolean;
	quizOutput? : string;
}


export class KalturaQuizVendorTaskData extends KalturaVendorTaskData {

    numberOfQuestions : number;
	questionsType : string;
	context : string;
	formalStyle : string;
	createQuiz : boolean;
	quizOutput : string;

    constructor(data? : KalturaQuizVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizVendorTaskData' },
				numberOfQuestions : { type : 'n' },
				questionsType : { type : 's' },
				context : { type : 's' },
				formalStyle : { type : 's' },
				createQuiz : { type : 'b' },
				quizOutput : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizVendorTaskData',KalturaQuizVendorTaskData);
