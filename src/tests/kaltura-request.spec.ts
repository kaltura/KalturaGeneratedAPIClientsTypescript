// import { KalturaHttpClientConfiguration} from "../kaltura-clients/kaltura-http-client-configuration";
// import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
// import {
//     KalturaBaseEntryFilter, KalturaMediaEntry, KalturaPlaylist, KalturaMediaEntryFilterForPlaylist,
//     KalturaSearchOperator, KalturaContentDistributionSearchItem, KalturaDetachedResponseProfile, KalturaAppToken,
//     KalturaBaseEntryListResponse,
//     KalturaEntryReplacementStatus, KalturaSearchOperatorType, KalturaNullableBoolean,
//     KalturaAppTokenHashType, KalturaPlaylistType
// } from "../types";
//
// import { KalturaAPIException } from '../';
//
// import { UserLoginByLoginIdAction, UserGetAction, AppTokenAddAction, PartnerGetAction, BaseEntryListAction } from "../types";
//
// import { KalturaMediaEntry,KalturaMediaListResponse, PartnerGetAction } from 'kaltura-typescript-client/types';
//
// import { KalturaMediaListResponse } from 'kaltura-typescript-client/types/KalturaMediaListResponse';
// import { KalturaMediaEntry } from 'kaltura-typescript-client/types/KalturaMediaEntry';
// import { PartnerGetAction } from 'kaltura-typescript-client/types/PartnerGetAction';
//
// import { TestsConfig } from './tests-config';
//
//
// describe('Kaltura server API request', () =>
// {
//     let client : KalturaBrowserHttpClient = null;
//
//     const httpConfiguration = new KalturaHttpClientConfiguration();
//     httpConfiguration.endpointUrl = TestsConfig.endpoint;
//     httpConfiguration.ks =TestsConfig.ks;
//
//     beforeEach(() => {
//       client = new KalturaBrowserHttpClient(httpConfiguration);
//     });
//
//     afterEach(() => {
//         client = null;
//     });
//
//
//     describe('Building request',() => {
//         // it('expose request configuration properties as part of each action', () => {
//         //     const listAction: BaseEntryListAction = new BaseEntryListAction();
//         //     expect(listAction).toBeDefined();
//         //     expect(listAction instanceof BaseEntryListAction).toBeTruthy();
//         //
//         //     const userLoginByLoginIdAction: UserLoginByLoginIdAction = new UserLoginByLoginIdAction(
//         //         {
//         //             loginId: 'a',
//         //             password: 'a',
//         //             ks: 'valid ks',
//         //             partnerId: 1234,
//         //             responseProfile: new KalturaDetachedResponseProfile().setData(data => {
//         //                 data.fields = 'fields';
//         //             })
//         //         }
//         //     );
//         //     expect(userLoginByLoginIdAction).toBeDefined();
//         //     expect(userLoginByLoginIdAction instanceof UserLoginByLoginIdAction).toBeTruthy();
//         //
//         //     const pojoRequest = userLoginByLoginIdAction.toObject();
//         //     expect(pojoRequest.service).toBe('user');
//         //     expect(pojoRequest.action).toBe('loginByLoginId');
//         //     expect(pojoRequest.ks).toBe('valid ks');
//         //     expect(pojoRequest.partnerId).toBe(1234);
//         //     expect(pojoRequest.responseProfile).toBeDefined();
//         //     expect(pojoRequest.responseProfile.objectType).toBe('KalturaDetachedResponseProfile');
//         //     expect(pojoRequest.responseProfile.fields).toBe('fields');
//         //
//         // });
//
//         // it('create a pojo of the request by and emit "objectType" property', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter().setData(data => {
//         //                 data.advancedSearch = new KalturaSearchOperator()
//         //             })
//         //         }
//         //     );
//         //
//         //     expect(request.filter).toBeDefined();
//         //     expect(request.filter instanceof KalturaBaseEntryFilter).toBeTruthy();
//         //     expect(request.filter.advancedSearch).toBeDefined();
//         //     expect(request.filter.advancedSearch instanceof KalturaSearchOperator).toBeTruthy();
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(pojoRequest.filter.objectType).toBe('KalturaBaseEntryFilter');
//         //     expect(pojoRequest.filter instanceof KalturaBaseEntryFilter).toBeFalsy();
//         //     expect(pojoRequest.filter.advancedSearch).toBeDefined();
//         //     expect(pojoRequest.filter.advancedSearch.objectType).toBe('KalturaSearchOperator');
//         //     expect(pojoRequest.filter.advancedSearch instanceof KalturaSearchOperator).toBeFalsy();
//         // })));
//         //
//         // it('ignore undefined/null/empty array values in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter(),
//         //             responseProfile : new KalturaDetachedResponseProfile()
//         //         });
//         //
//         //     const pojoRequest = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.hasOwnProperty('pager')).toBeFalsy();
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(pojoRequest.filter.hasOwnProperty('statusIn')).toBeFalsy();
//         //     expect(pojoRequest.responseProfile).toBeDefined();
//         //     expect(pojoRequest.responseProfile.hasOwnProperty('mappings')).toBeFalsy();
//         // })));
//         //
//         // it('ignore local action properties properties in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter()
//         //         });
//         //
//         //     const pojoRequest = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(typeof pojoRequest.objectType).toBe('undefined');
//         // })));
//         //
//         //
//         // it('send enum of type int in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter().setData(data => {
//         //                 data.isRoot = KalturaNullableBoolean.TrueValue;
//         //             })
//         //         }
//         //     );
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.filter.isRoot).toBe(1);
//         //     expect(typeof pojoRequest.filter.isRoot === 'number');
//         // })));
//         //
//         // it('send enum of type string in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new AppTokenAddAction(
//         //         {
//         //             appToken : new KalturaAppToken().setData(
//         //                 request =>
//         //                 {
//         //                     request.hashType = KalturaAppTokenHashType.Sha1;
//         //                 }
//         //             )
//         //         }
//         //     );
//         //
//         //     expect(KalturaAppTokenHashType.Sha1).toBe(KalturaAppTokenHashType.Sha1)
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.appToken.hashType).toBe(KalturaAppTokenHashType.Sha1.toString());
//         //     expect(typeof pojoRequest.appToken.hashType === 'string');
//         // })));
//         //
//         // it('send object in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter().setData(data => {
//         //                 data.statusIn = '2';
//         //             })
//         //         }
//         //     );
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(pojoRequest.filter instanceof KalturaBaseEntryFilter).toBeFalsy();
//         //     expect(pojoRequest.filter.objectType).toBe('KalturaBaseEntryFilter');
//         //
//         // })));
//         //
//         // xit('send date in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     pending("waiting to a server support for dates");
//         //     // const request = new BaseEntryListAction(
//         //     // {
//         //     // filter:
//         //     //     new KalturaBaseEntryFilter().setData(data =>
//         //     //     {
//         //     //         data.createdAtGreaterThanOrEqual = new Date('1980-08-11');
//         //     //     })
//         //     //}
//         //     // );
//         //     //
//         //     // const requestData  : any= request.build();
//         //     // expect(requestData).toBeDefined();
//         //     // expect(requestData.filter).toBeDefined();
//         //     // expect(requestData.filter.createdAtGreaterThanOrEqual).toBe(334800000);
//         // })));
//         //
//         // xit('send array of simple types in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // it('send array of objects in request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter().setData(data => {
//         //                 data.statusIn = '2';
//         //                 data.advancedSearch = new KalturaSearchOperator().setData(data => {
//         //                     data.type = KalturaSearchOperatorType.SearchAnd;
//         //                     data.items.push(
//         //                         new KalturaSearchOperator(),
//         //                         new KalturaSearchOperator().setData(searchOperator => {
//         //                             searchOperator.type = KalturaSearchOperatorType.SearchOr;
//         //                             searchOperator.items.push(
//         //                                 new KalturaContentDistributionSearchItem().setData(distribution => {
//         //                                     distribution.distributionProfileId = 1;
//         //                                 }),
//         //                                 new KalturaContentDistributionSearchItem().setData(distribution => {
//         //                                     distribution.distributionProfileId = 2;
//         //                                 })
//         //                             );
//         //                         })
//         //                     );
//         //                 });
//         //             })
//         //         }
//         //     );
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //
//         //     const requestFilter: any = pojoRequest.filter;
//         //     expect(requestFilter).toBeDefined();
//         //     const requestAvancedSearch : any  = requestFilter.advancedSearch;
//         //     expect (requestAvancedSearch.items.length).toBe(2);
//         //     expect (requestAvancedSearch.items[1].items.length).toBe(2);
//         //     expect (requestAvancedSearch.items[1].items[0].distributionProfileId).toBe(1);
//         //     expect (requestAvancedSearch.items[1].items[1].distributionProfileId).toBe(2);
//         // })));
//         //
//         // it('handle default value property of type int correctly', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter()
//         //         }
//         //     );
//         //
//         //     let pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(typeof pojoRequest.filter.partnerIdEqual).toBe("undefined");
//         //
//         //     request.filter.partnerIdEqual = 123;
//         //     pojoRequest = request.toObject();
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(pojoRequest.filter.partnerIdEqual).toBe(123);
//         // })));
//         //
//         // it('handle default value property of type string correctly', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter()
//         //         }
//         //     );
//         //
//         //     let pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(typeof pojoRequest.filter.freeText).toBe("undefined");
//         //
//         //     request.filter.freeText = "free";
//         //     pojoRequest = request.toObject();
//         //     expect(pojoRequest.filter).toBeDefined();
//         //     expect(pojoRequest.filter.freeText).toBe("free");
//         //
//         //     const request2 = new UserLoginByLoginIdAction(
//         //         {
//         //             loginId: 'username',
//         //             password : 'password'
//         //         });
//         //
//         //     const pojoRequest2 : any = request2.toObject();
//         //     expect(pojoRequest2).toBeDefined();
//         //     expect(pojoRequest2.privileges).toBe('*');
//         //
//         // })));
//         //
//         // it('treat string default value "null" as null instead of sending "null" as text ', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new UserGetAction();
//         //
//         //     expect(request.userId).toBeNull();
//         //
//         //     let pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.userId).toBeUndefined();
//         // })));
//         //
//         // it('chain complex request with one statement (nested arrays, inner complex object)', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //
//         //     const request = new BaseEntryListAction(
//         //         {
//         //             filter: new KalturaBaseEntryFilter().setData(data => {
//         //                 data.statusIn = '2';
//         //                 data.advancedSearch = new KalturaSearchOperator().setData(data => {
//         //                     data.type = KalturaSearchOperatorType.SearchAnd;
//         //                     data.items.push(
//         //                         new KalturaSearchOperator().setData(searchOperator => {
//         //                             searchOperator.type = KalturaSearchOperatorType.SearchOr;
//         //                             searchOperator.items.push(
//         //                                 new KalturaContentDistributionSearchItem().setData(distribution => {
//         //                                     distribution.distributionProfileId = 12333;
//         //                                 })
//         //                             );
//         //                         })
//         //                     );
//         //                 });
//         //             })
//         //         }
//         //     );
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //
//         //     const requestFilter: any = pojoRequest.filter;
//         //     expect(requestFilter).toBeDefined();
//         //     expect(requestFilter instanceof KalturaBaseEntryFilter).toBeFalsy();
//         //     expect(requestFilter.statusIn).toBe('2');
//         //     expect(requestFilter.advancedSearch.objectType).toBe('KalturaSearchOperator');
//         //     expect(requestFilter.advancedSearch.type).toBe(KalturaSearchOperatorType.SearchAnd);
//         //     const advancedSearchItem: any = requestFilter.advancedSearch.items['0'];
//         //     expect(advancedSearchItem).toBeDefined();
//         //     expect(advancedSearchItem.type).toBe(KalturaSearchOperatorType.SearchOr);
//         //     expect(advancedSearchItem.items).toBeDefined();
//         //     const distributionSearchItem: any = advancedSearchItem.items['0'];
//         //     expect(distributionSearchItem).toBeDefined();
//         //     expect(distributionSearchItem.objectType).toBe('KalturaContentDistributionSearchItem');
//         //     expect(distributionSearchItem.distributionProfileId).toBe(12333);
//         // })));
//         //
//         // it('force required parameters to be provided by constructor', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new UserLoginByLoginIdAction(
//         //         {
//         //             loginId: 'username',
//         //             password : 'password'
//         //         });
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //
//         //     expect(pojoRequest['loginId']).toBe('username');
//         //     expect(pojoRequest['password']).toBe('password');
//         // })));
//         //
//         //
//         //
//         // it('set optional parameters of action request (only!) directly from the action constructor', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new UserLoginByLoginIdAction( {
//         //         loginId: 'username',
//         //         password : 'password',
//         //         expiry : 1234
//         //     });
//         //
//         //     const pojoRequest : any = request.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.expiry).toBe(1234);
//         //
//         //     const filter = new KalturaBaseEntryFilter();
//         //     filter.statusIn = '2';
//         //     const request2: BaseEntryListAction = new BaseEntryListAction({filter: filter});
//         //
//         //     const pojoRequest2 : any = request2.toObject();
//         //
//         //     expect(pojoRequest2).toBeDefined();
//         //     expect(pojoRequest2.filter).toBeDefined();
//         //     expect(pojoRequest2.filter instanceof KalturaBaseEntryFilter).toBeDefined();
//         //     expect(pojoRequest2.filter['statusIn']).toBe('2');
//         //
//         // })));
//         //
//         //
//         //
//         // it('allow overriding the general request configuration for ks/partnerid for specific request', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     // build request with default ks (not settings ks explicitly)
//         //     const requestWithDefaultKS = new UserLoginByLoginIdAction({
//         //         loginId: 'username',
//         //         password : 'password'
//         //     });
//         //
//         //
//         //     const pojoRequest : any = requestWithDefaultKS.toObject();
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.ks).toBeUndefined();
//         //
//         //     // build request with custom ks
//         //     const requestWithCustomKS  = new UserLoginByLoginIdAction(  {
//         //         loginId: 'username',
//         //         password : 'password',
//         //         ks : 'custom request KS'
//         //     });
//         //
//         //     const pojoRequest2 : any = requestWithCustomKS.toObject();
//         //
//         //     expect(pojoRequest2).toBeDefined();
//         //     expect(pojoRequest2.ks).toBe('custom request KS');
//         //
//         //
//         // })));
//         //
//         // it('support chaining on setCompletion', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request = new UserLoginByLoginIdAction({
//         //         loginId: 'username',
//         //         password : 'password',
//         //         ks : 'custom request KS'
//         //     });
//         //     const setCompletionResult = request.setCompletion(() => {
//         //     });
//         //
//         //     expect(setCompletionResult instanceof UserLoginByLoginIdAction).toBeTruthy();
//         // })));
//         //
//         // it('expose function that allow setting multiple parameters while chaining', async(inject([KalturaClientBase], (executer: KalturaClientBase) => {
//         //     const request: UserLoginByLoginIdAction = new UserLoginByLoginIdAction({
//         //         loginId: 'username',
//         //         password : 'password'
//         //     }).setData(
//         //         (request) => {
//         //             request.expiry = 1;
//         //             request.privileges = 'none';
//         //         }
//         //     );
//         //
//         //     const pojoRequest : any = request.toObject();
//         //
//         //
//         //     expect(pojoRequest).toBeDefined();
//         //     expect(pojoRequest.expiry).toBe(1);
//         //     expect(pojoRequest.privileges).toBe('none');
//         // })));
//     });
//
//     describe('Invoking kaltura response',() =>
//     {
//         // it('parse action response type',async(inject([KalturaClientBase],(executer : KalturaClientBase) =>
//         // {
//         //     // example of assignment by setParameters function (support chaining)
//         //     const listAction : BaseEntryListAction = new BaseEntryListAction(
//         //         {
//         //             filter : new KalturaBaseEntryFilter().setData(filter =>
//         //             {
//         //                 filter.statusIn ='2';
//         //             })
//         //         });
//         //
//         //     executer.request(listAction).then(
//         //         (response) =>
//         //         {
//         //             expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('parse action response type that inherit from expected response type',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         //
//         // xit('throw error when provided action response doesnt inherit from expected action response type',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//
//         // it('parse object response property',(done) => {
//         //     debugger;
//         //     client.request(new BaseEntryListAction()).then(
//         //         (response ) =>
//         //         {
//         //             expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();
//         //
//         //             expect(response.objects).toBeDefined();
//         //             const object1 = response.objects[0];
//         //             expect(object1).toBeDefined();
//         //
//         //             done();
//         //         },
//         //         () =>
//         //         {
//         //             fail(`failed to request service 'BaseEntry' action 'List'`);
//         //             done();
//         //         }
//         //     )
//         // });
//
//         // it('parse object response property that inherit from expected property type',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.objects).toBeDefined();
//         //             const object0 = response.objects[0];
//         //             expect(object0).toBeDefined();
//         //             expect(object0 instanceof KalturaMediaEntry).toBeTruthy();
//         //             expect(object0.objectType).toBe('KalturaMediaEntry');
//         //             const object3 = response.objects[3];
//         //             expect(object3).toBeDefined();
//         //             expect(object3 instanceof KalturaPlaylist).toBeTruthy();
//         //             expect(object3.objectType).toBe('KalturaPlaylist');
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('throw error when provided property value doesnt inherit from expected property type',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // it('parse number response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response  ) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.objects).toBeDefined();
//         //             const object0 = response.objects[0];
//         //             expect(object0).toBeDefined();
//         //             expect(object0.accessControlId).toBe(2031561);
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // it('parse number response property while provided value is boolean',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new PartnerGetAction({id:2052371})).then(
//         //         (response  ) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.allowMultiNotification).toBe(0);
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // it('parse number response property while provided value is valid number as string',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response  ) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.objects).toBeDefined();
//         //             const object1 = response.objects[1];
//         //             expect(object1).toBeDefined();
//         //             expect(object1.version).toBe(100000);
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('throw error when response property of type number and the provided value is not a number',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // it('parse string response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.objects).toBeDefined();
//         //             const object1 = response.objects[1];
//         //             expect(object1).toBeDefined();
//         //             expect(object1.name).toBe('Kaltura Logo Image');
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // it('parse string response property while provided value is of type number',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new PartnerGetAction({id:2052371})).then(
//         //         (response  ) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.defConversionProfileType).toBe("1001");
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // it('parse array response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //
//         //             expect(response).toBeDefined();
//         //             expect(response.totalCount).toBe(24);
//         //             expect(response.objects).toBeDefined();
//         //             expect(response.objects.length).toBe(24);
//         //             const object1 = response.objects[1];
//         //             expect(object1).toBeDefined();
//         //             const object23 = response.objects[23];
//         //             expect(object23).toBeDefined();
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('parse boolean response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         //
//         //
//         // it('parse boolean response property while provided value is valid number as string',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new PartnerGetAction({id:2052371})).then(
//         //         (response  ) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.adultContent).toBe(false);
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('parse file response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // xit('parse void response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // xit('parse date response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("waiting to a server support for dates");
//         //     // executer.request(new BaseEntryListAction()).then(
//         //     //     (response) =>
//         //     //     {
//         //     //         const kalturaMediaEntry : KalturaMediaEntry = <KalturaMediaEntry>response.objects[0];
//         //     //         expect(kalturaMediaEntry.createdAt instanceof Date).toBeTruthy();// known dates are converted by the api
//         //     //         expect(kalturaMediaEntry.createdAt.getTime() ).toBe((new Date(1450013576 * 1000)).getTime()); // TODO [kmc] response.{typed array}.{DATE VALUE}
//         //     //     },
//         //     //     () =>
//         //     //     {
//         //     //         fail('should not reach this part');
//         //     //     }
//         //     // );
//         // })));
//         //
//         // it('parse enum of type int response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //             expect(response).toBeDefined();
//         //             expect(response.objects).toBeDefined();
//         //             const object3 : KalturaPlaylist = <KalturaPlaylist>response.objects[3];
//         //             expect(object3).toBeDefined();
//         //             expect(object3.playlistType).toBe(KalturaPlaylistType.Dynamic);
//         //             expect(object3.objectType).toBe('KalturaPlaylist');
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('parse enum of type string response property when the provided value is of type int',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //             var tempA = KalturaEntryReplacementStatus.None;
//         //
//         //             const kalturaMediaEntry : KalturaMediaEntry = <KalturaMediaEntry>response.objects[0];
//         //             expect(kalturaMediaEntry.replacementStatus).toBe(KalturaEntryReplacementStatus.None);
//         //             expect(kalturaMediaEntry.replacementStatus.equals(KalturaEntryReplacementStatus.None)).toBeTruthy();
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // xit('parse enum of type string response property when the provided value is of type string',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // xit('parse array of simple types response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending("TBD");
//         // })));
//         //
//         // it('parse array of objects response property',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //             expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();
//         //
//         //             // verify length of array and totalCount
//         //             expect(response.totalCount).toBe(24);
//         //             expect(response.objects).toBeDefined();
//         //             expect(response.objects.length).toBe(24);
//         //
//         //             // verify item is of the right type
//         //             const kalturaMediaEntry : KalturaMediaEntry = <KalturaMediaEntry>response.objects[0];
//         //             expect(kalturaMediaEntry).toBeDefined();
//         //             expect(kalturaMediaEntry.objectType).toBe('KalturaMediaEntry');
//         //
//         //             const kalturaPlaylist : KalturaPlaylist = <KalturaPlaylist>response.objects[4];
//         //             expect(kalturaPlaylist).toBeDefined();
//         //             expect(kalturaPlaylist.objectType).toBe('KalturaPlaylist');
//         //
//         //             // verify array inner item properties are exposed correctly
//         //             expect(kalturaMediaEntry.dataUrl).toBe("http://cdnapi.kaltura.com/p/2052371/sp/205237100/playManifest/entryId/1_09rmd49z/format/url/protocol/http"); // simple value
//         //             expect(kalturaMediaEntry.id).toBe('1_09rmd49z'); //simple value OF BASE
//         //
//         //
//         //             // verify nested array is exposed correctly
//         //             const playlistFilterItem : KalturaMediaEntryFilterForPlaylist = kalturaPlaylist.filters[0];
//         //             expect(playlistFilterItem).toBeDefined();
//         //             expect(playlistFilterItem.objectType).toBe('KalturaMediaEntryFilterForPlaylist'); // nested array item type
//         //             expect(playlistFilterItem.limit).toBe(10); // // nested array item value
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//         //
//         // it('parse kaltura api exception response',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     const listAction : BaseEntryListAction = new BaseEntryListAction();
//         //     listAction.ks = 'invalid ks';
//         //
//         //     executer.request(listAction).then(
//         //         (response) =>
//         //         {
//         //             fail('should not reach this part');
//         //         },
//         //         (error) =>
//         //         {
//         //             expect(error instanceof KalturaAPIException).toBeTruthy();
//         //         }
//         //     );
//         //
//         // })));
//         //
//         // xit('reflect network exceptions as kaltura api exception',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending('TBD');
//         // })));
//         //
//         // xit('reflect missing requst argument as kaltura api exception',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     pending('TBD');
//         // })));
//         //
//         // it('process request without setting completion to that request',async(inject([KalturaClientBase],(executer : KalturaClientBase) => {
//         //     executer.request(new BaseEntryListAction()).then(
//         //         (response) =>
//         //         {
//         //             expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();
//         //         },
//         //         () =>
//         //         {
//         //             fail('should not reach this part');
//         //         }
//         //     );
//         // })));
//     });
// });
