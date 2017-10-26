import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { BaseEntryListAction } from "../types/BaseEntryListAction";
import { UserLoginByLoginIdAction } from "../types/UserLoginByLoginIdAction";
import { KalturaDetachedResponseProfile } from "../types/KalturaDetachedResponseProfile";
import { KalturaBaseEntryFilter } from "../types/KalturaBaseEntryFilter";
import { KalturaSearchOperator } from "../types/KalturaSearchOperator";
import { KalturaNullableBoolean } from "../types/KalturaNullableBoolean";
import { AppTokenAddAction } from "../types/AppTokenAddAction";
import { KalturaAppToken } from "../types/KalturaAppToken";
import { KalturaSearchOperatorType } from "../types/KalturaSearchOperatorType";
import { KalturaContentDistributionSearchItem } from "../types/KalturaContentDistributionSearchItem";
import { UserGetAction } from "../types/UserGetAction";
import { KalturaBaseEntryListResponse } from "../types/KalturaBaseEntryListResponse";
import { KalturaPlaylist } from "../types/KalturaPlaylist";
import { PartnerGetAction } from "../types/PartnerGetAction";
import { KalturaPlaylistType } from "../types/KalturaPlaylistType";
import { KalturaEntryReplacementStatus } from "../types/KalturaEntryReplacementStatus";
import { KalturaMediaEntryFilterForPlaylist } from "../types/KalturaMediaEntryFilterForPlaylist";
import { KalturaAPIException } from "../kaltura-api-exception";
import { KalturaAppTokenHashType } from "../types/KalturaAppTokenHashType";
import { KalturaMediaEntry } from "../types/KalturaMediaEntry";


describe("Kaltura server API request", () => {
  let kalturaClient: KalturaBrowserHttpClient = null;

  const httpConfiguration = {
    endpointUrl: TestsConfig.endpoint,
    clientTag: TestsConfig.clientTag
  };

  beforeEach(() => {
    kalturaClient = new KalturaBrowserHttpClient(httpConfiguration);
    kalturaClient.ks = TestsConfig.ks;
  });

  afterEach(() => {
    kalturaClient = null;
  });


  describe("Building request", () => {
    test("expose request configuration properties as part of each action", () => {
      const listAction: BaseEntryListAction = new BaseEntryListAction();
      expect(listAction).toBeDefined();
      expect(listAction instanceof BaseEntryListAction).toBeTruthy();

      const userLoginByLoginIdAction: UserLoginByLoginIdAction = new UserLoginByLoginIdAction(
        {
          loginId: "a",
          password: "a",
          ks: "valid ks",
          partnerId: 1234,
          responseProfile: new KalturaDetachedResponseProfile().setData(data => {
            data.fields = "fields";
          })
        }
      );
      expect(userLoginByLoginIdAction).toBeDefined();
      expect(userLoginByLoginIdAction instanceof UserLoginByLoginIdAction).toBeTruthy();

      const pojoRequest = <any>userLoginByLoginIdAction.toRequestObject();
      expect(pojoRequest.service).toBe("user");
      expect(pojoRequest.action).toBe("loginByLoginId");
      expect(pojoRequest.ks).toBe("valid ks");
      expect(pojoRequest.partnerId).toBe(1234);
      expect(pojoRequest.responseProfile).toBeDefined();
      expect(pojoRequest.responseProfile.objectType).toBe("KalturaDetachedResponseProfile");
      expect(pojoRequest.responseProfile.fields).toBe("fields");

    });

    test("create a pojo of the request by and emit ", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter().setData(data => {
            data.advancedSearch = new KalturaSearchOperator();
          })
        }
      );

      expect(request.filter).toBeDefined();
      expect(request.filter instanceof KalturaBaseEntryFilter).toBeTruthy();
      expect(request.filter.advancedSearch).toBeDefined();
      expect(request.filter.advancedSearch instanceof KalturaSearchOperator).toBeTruthy();

      const pojoRequest: any = <any>request.toRequestObject();
      expect(pojoRequest).toBeDefined();

      expect(pojoRequest.filter).toBeDefined();
      expect(pojoRequest.filter.objectType).toBe("KalturaBaseEntryFilter");
      expect(pojoRequest.filter instanceof KalturaBaseEntryFilter).toBeFalsy();
      expect(pojoRequest.filter.advancedSearch).toBeDefined();
      expect(pojoRequest.filter.advancedSearch.objectType).toBe("KalturaSearchOperator");
      expect(pojoRequest.filter.advancedSearch instanceof KalturaSearchOperator).toBeFalsy();
    });

    test("ignore undefined/null/empty array values in request", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter(),
          responseProfile: new KalturaDetachedResponseProfile()
        });

      const pojoRequest = <any>request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.hasOwnProperty("pager")).toBeFalsy();
      expect(pojoRequest.filter).toBeDefined();
      expect(pojoRequest.filter.hasOwnProperty("statusIn")).toBeFalsy();
      expect(pojoRequest.responseProfile).toBeDefined();
      expect(pojoRequest.responseProfile.hasOwnProperty("mappings")).toBeFalsy();
    });

    test("ignore local action properties properties in request", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter()
        });

      const pojoRequest = <any>request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(typeof pojoRequest.objectType).toBe("undefined");
    });


    test("send enum of type int in request", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter().setData(data => {
            data.isRoot = KalturaNullableBoolean.trueValue;
          })
        }
      );

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.filter.isRoot).toBe(1);
      expect(typeof pojoRequest.filter.isRoot === "number");
    });

    test("send enum of type string in request", () => {
      const request = new AppTokenAddAction(
        {
          appToken: new KalturaAppToken().setData(
            request => {
              request.hashType = KalturaAppTokenHashType.sha1;
            }
          )
        }
      );

      expect(KalturaAppTokenHashType.sha1).toBe(KalturaAppTokenHashType.sha1);

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.appToken.hashType).toBe(KalturaAppTokenHashType.sha1.toString());
      expect(typeof pojoRequest.appToken.hashType === "string");
    });

    test("send object in request", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter().setData(data => {
            data.statusIn = "2";
          })
        }
      );

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.filter).toBeDefined();
      expect(pojoRequest.filter instanceof KalturaBaseEntryFilter).toBeFalsy();
      expect(pojoRequest.filter.objectType).toBe("KalturaBaseEntryFilter");

    });

    xtest("send date in request", () => {
      pending("waiting to a server support for dates");
      // const request = new BaseEntryListAction(
      // {
      // filter:
      //     new KalturaBaseEntryFilter().setData(data =>
      //     {
      //         data.createdAtGreaterThanOrEqual = new Date("1980-08-11");
      //     })
      // }
      // );
      //
      // const requestData  : any= request.build();
      // expect(requestData).toBeDefined();
      // expect(requestData.filter).toBeDefined();
      // expect(requestData.filter.createdAtGreaterThanOrEqual).toBe(334800000);
    });

    xtest("send array of simple types in request", () => {
      pending("TBD");
    });

    test("send array of objects in request", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter().setData(data => {
            data.statusIn = "2";
            data.advancedSearch = new KalturaSearchOperator().setData(data => {
              data.type = KalturaSearchOperatorType.searchAnd;
              data.items.push(
                new KalturaSearchOperator(),
                new KalturaSearchOperator().setData(searchOperator => {
                  searchOperator.type = KalturaSearchOperatorType.searchOr;
                  searchOperator.items.push(
                    new KalturaContentDistributionSearchItem().setData(distribution => {
                      distribution.distributionProfileId = 1;
                    }),
                    new KalturaContentDistributionSearchItem().setData(distribution => {
                      distribution.distributionProfileId = 2;
                    })
                  );
                })
              );
            });
          })
        }
      );

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();

      const requestFilter: any = pojoRequest.filter;
      expect(requestFilter).toBeDefined();
      const requestAvancedSearch: any = requestFilter.advancedSearch;
      expect(requestAvancedSearch.items.length).toBe(2);
      expect(requestAvancedSearch.items[1].items.length).toBe(2);
      expect(requestAvancedSearch.items[1].items[0].distributionProfileId).toBe(1);
      expect(requestAvancedSearch.items[1].items[1].distributionProfileId).toBe(2);
    });

    test("handle default value property of type int correctly", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter()
        }
      );

      let pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.filter).toBeDefined();
      expect(typeof pojoRequest.filter.partnerIdEqual).toBe("undefined");

      request.filter.partnerIdEqual = 123;
      pojoRequest = request.toRequestObject();
      expect(pojoRequest.filter).toBeDefined();
      expect(pojoRequest.filter.partnerIdEqual).toBe(123);
    });

    test("handle default value property of type string correctly", () => {
      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter()
        }
      );

      let pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.filter).toBeDefined();
      expect(typeof pojoRequest.filter.freeText).toBe("undefined");

      request.filter.freeText = "free";
      pojoRequest = request.toRequestObject();
      expect(pojoRequest.filter).toBeDefined();
      expect(pojoRequest.filter.freeText).toBe("free");

      const request2 = new UserLoginByLoginIdAction(
        {
          loginId: "username",
          password: "password"
        });

      const pojoRequest2: any = request2.toRequestObject();
      expect(pojoRequest2).toBeDefined();
      expect(pojoRequest2.privileges).toBe("*");

    });

    test("treat string default value ", () => {
      const request = new UserGetAction();

      expect(request.userId).toBeUndefined();

      let pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.userId).toBeUndefined();
    });

    test("chain complex request with one statement (nested arrays, inner complex object)", () => {

      const request = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter().setData(data => {
            data.statusIn = "2";
            data.advancedSearch = new KalturaSearchOperator().setData(data => {
              data.type = KalturaSearchOperatorType.searchAnd;
              data.items.push(
                new KalturaSearchOperator().setData(searchOperator => {
                  searchOperator.type = KalturaSearchOperatorType.searchOr;
                  searchOperator.items.push(
                    new KalturaContentDistributionSearchItem().setData(distribution => {
                      distribution.distributionProfileId = 12333;
                    })
                  );
                })
              );
            });
          })
        }
      );

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();

      const requestFilter: any = pojoRequest.filter;
      expect(requestFilter).toBeDefined();
      expect(requestFilter instanceof KalturaBaseEntryFilter).toBeFalsy();
      expect(requestFilter.statusIn).toBe("2");
      expect(requestFilter.advancedSearch.objectType).toBe("KalturaSearchOperator");
      expect(requestFilter.advancedSearch.type).toBe(KalturaSearchOperatorType.searchAnd);
      const advancedSearchItem: any = requestFilter.advancedSearch.items["0"];
      expect(advancedSearchItem).toBeDefined();
      expect(advancedSearchItem.type).toBe(KalturaSearchOperatorType.searchOr);
      expect(advancedSearchItem.items).toBeDefined();
      const distributionSearchItem: any = advancedSearchItem.items["0"];
      expect(distributionSearchItem).toBeDefined();
      expect(distributionSearchItem.objectType).toBe("KalturaContentDistributionSearchItem");
      expect(distributionSearchItem.distributionProfileId).toBe(12333);
    });

    test("force required parameters to be provided by constructor", () => {
      const request = new UserLoginByLoginIdAction(
        {
          loginId: "username",
          password: "password"
        });

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();

      expect(pojoRequest["loginId"]).toBe("username");
      expect(pojoRequest["password"]).toBe("password");
    });


    test("set optional parameters of action request (only!) directly from the action constructor", () => {
      const request = new UserLoginByLoginIdAction({
        loginId: "username",
        password: "password",
        expiry: 1234
      });

      const pojoRequest: any = request.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.expiry).toBe(1234);

      const filter = new KalturaBaseEntryFilter();
      filter.statusIn = "2";
      const request2: BaseEntryListAction = new BaseEntryListAction({ filter: filter });

      const pojoRequest2: any = request2.toRequestObject();

      expect(pojoRequest2).toBeDefined();
      expect(pojoRequest2.filter).toBeDefined();
      expect(pojoRequest2.filter instanceof KalturaBaseEntryFilter).toBeDefined();
      expect(pojoRequest2.filter["statusIn"]).toBe("2");

    });


    test("allow overriding the general request configuration for ks/partnerid for specific request", () => {
      // build request with default ks (not settings ks explicitly)
      const requestWithDefaultKS = new UserLoginByLoginIdAction({
        loginId: "username",
        password: "password"
      });


      const pojoRequest: any = requestWithDefaultKS.toRequestObject();
      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.ks).toBeUndefined();

      // build request with custom ks
      const requestWithCustomKS = new UserLoginByLoginIdAction({
        loginId: "username",
        password: "password",
        ks: "custom request KS"
      });

      const pojoRequest2: any = requestWithCustomKS.toRequestObject();

      expect(pojoRequest2).toBeDefined();
      expect(pojoRequest2.ks).toBe("custom request KS");


    });

    test("support chaining on setCompletion", () => {
      const request = new UserLoginByLoginIdAction({
        loginId: "username",
        password: "password",
        ks: "custom request KS"
      });
      const setCompletionResult = request.setCompletion(() => {
      });

      expect(setCompletionResult instanceof UserLoginByLoginIdAction).toBeTruthy();
    });

    test("expose function that allow setting multiple parameters while chaining", () => {
      const request: UserLoginByLoginIdAction = new UserLoginByLoginIdAction({
        loginId: "username",
        password: "password"
      }).setData(
        (request) => {
          request.expiry = 1;
          request.privileges = "none";
        }
      );

      const pojoRequest: any = request.toRequestObject();


      expect(pojoRequest).toBeDefined();
      expect(pojoRequest.expiry).toBe(1);
      expect(pojoRequest.privileges).toBe("none");
    });
  });

  describe("Invoking kaltura response", () => {
    test("parse action response type", () => {
      // example of assignment by setParameters function (support chaining)
      const listAction: BaseEntryListAction = new BaseEntryListAction(
        {
          filter: new KalturaBaseEntryFilter().setData(filter => {
            filter.statusIn = "2";
          })
        });

      kalturaClient.request(listAction).then(
        (response) => {
          expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("parse action response type that inherit from expected response type", () => {
      pending("TBD");
    });


    xtest("throw error when provided action response doesnt inherit from expected action response type", () => {
      pending("TBD");
    });

    test("parse object response property", (done) => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();

          expect(response.objects).toBeDefined();
          const object1 = response.objects[0];
          expect(object1).toBeDefined();

          done();
        },
        () => {
          fail(`failed to request service "BaseEntry" action "List"`);
          done();
        }
      );
    });

    test("parse object response property that inherit from expected property type", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.objects).toBeDefined();
          const object0 = response.objects[0];
          expect(object0).toBeDefined();
          expect(object0 instanceof KalturaMediaEntry).toBeTruthy();
          expect(object0.objectType).toBe("KalturaMediaEntry");
          const object3 = response.objects[3];
          expect(object3).toBeDefined();
          expect(object3 instanceof KalturaPlaylist).toBeTruthy();
          expect(object3.objectType).toBe("KalturaPlaylist");
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("throw error when provided property value doesnt inherit from expected property type", () => {
      pending("TBD");
    });

    test("parse number response property", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.objects).toBeDefined();
          const object0 = response.objects[0];
          expect(object0).toBeDefined();
          expect(object0.accessControlId).toBe(2031561);
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    test("parse number response property while provided value is boolean", () => {
      kalturaClient.request(new PartnerGetAction({ id: 2052371 })).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.allowMultiNotification).toBe(0);
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    test("parse number response property while provided value is valid number as string", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.objects).toBeDefined();
          const object1 = response.objects[1];
          expect(object1).toBeDefined();
          expect(object1.version).toBe(100000);
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("throw error when response property of type number and the provided value is not a number", () => {
      pending("TBD");
    });

    test("parse string response property", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.objects).toBeDefined();
          const object1 = response.objects[1];
          expect(object1).toBeDefined();
          expect(object1.name).toBe("Kaltura Logo Image");
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    test("parse string response property while provided value is of type number", () => {
      kalturaClient.request(new PartnerGetAction({ id: 2052371 })).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.defConversionProfileType).toBe("1001");
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    test("parse array response property", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {

          expect(response).toBeDefined();
          expect(response.totalCount).toBe(24);
          expect(response.objects).toBeDefined();
          expect(response.objects.length).toBe(24);
          const object1 = response.objects[1];
          expect(object1).toBeDefined();
          const object23 = response.objects[23];
          expect(object23).toBeDefined();
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("parse boolean response property", () => {
      pending("TBD");
    });


    test("parse boolean response property while provided value is valid number as string", () => {
      kalturaClient.request(new PartnerGetAction({ id: 2052371 })).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.adultContent).toBe(false);
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("parse file response property", () => {
      pending("TBD");
    });

    xtest("parse void response property", () => {
      pending("TBD");
    });

    xtest("parse date response property", () => {
      pending("waiting to a server support for dates");
      // kalturaClient.request(new BaseEntryListAction()).then(
      //     (response) =>
      //     {
      //         const kalturaMediaEntry : KalturaMediaEntry = <KalturaMediaEntry>response.objects[0];
      //         expect(kalturaMediaEntry.createdAt instanceof Date).toBeTruthy();// known dates are converted by the api
      //         expect(kalturaMediaEntry.createdAt.getTime() ).toBe((new Date(1450013576 * 1000)).getTime()); // TODO [kmc] response.{typed array}.{DATE VALUE}
      //     },
      //     () =>
      //     {
      //         fail("should not reach this part");
      //     }
      // );
    });

    test("parse enum of type int response property", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response).toBeDefined();
          expect(response.objects).toBeDefined();
          const object3: KalturaPlaylist = <KalturaPlaylist>response.objects[3];
          expect(object3).toBeDefined();
          expect(object3.playlistType).toBe(KalturaPlaylistType.dynamic);
          expect(object3.objectType).toBe("KalturaPlaylist");
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("parse enum of type string response property when the provided value is of type int", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          const kalturaMediaEntry: KalturaMediaEntry = <KalturaMediaEntry>response.objects[0];
          expect(kalturaMediaEntry.replacementStatus).toBe(KalturaEntryReplacementStatus.none);
          expect(kalturaMediaEntry.replacementStatus.equals(KalturaEntryReplacementStatus.none)).toBeTruthy();
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    xtest("parse enum of type string response property when the provided value is of type string", () => {
      pending("TBD");
    });

    xtest("parse array of simple types response property", () => {
      pending("TBD");
    });

    test("parse array of objects response property", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();

          // verify length of array and totalCount
          expect(response.totalCount).toBe(24);
          expect(response.objects).toBeDefined();
          expect(response.objects.length).toBe(24);

          // verify item is of the right type
          const kalturaMediaEntry: KalturaMediaEntry = <KalturaMediaEntry>response.objects[0];
          expect(kalturaMediaEntry).toBeDefined();
          expect(kalturaMediaEntry.objectType).toBe("KalturaMediaEntry");

          const kalturaPlaylist: KalturaPlaylist = <KalturaPlaylist>response.objects[4];
          expect(kalturaPlaylist).toBeDefined();
          expect(kalturaPlaylist.objectType).toBe("KalturaPlaylist");

          // verify array inner item properties are exposed correctly
          expect(kalturaMediaEntry.dataUrl).toBe("http://cdnapi.kaltura.com/p/2052371/sp/205237100/playManifest/entryId/1_09rmd49z/format/url/protocol/http"); // simple value
          expect(kalturaMediaEntry.id).toBe("1_09rmd49z"); // simple value OF BASE


          // verify nested array is exposed correctly
          const playlistFilterItem: KalturaMediaEntryFilterForPlaylist = kalturaPlaylist.filters[0];
          expect(playlistFilterItem).toBeDefined();
          expect(playlistFilterItem.objectType).toBe("KalturaMediaEntryFilterForPlaylist"); // nested array item type
          expect(playlistFilterItem.limit).toBe(10); // // nested array item value
        },
        () => {
          fail("should not reach this part");
        }
      );
    });

    test("parse kaltura api exception response", () => {
      const listAction: BaseEntryListAction = new BaseEntryListAction();
      listAction.ks = "invalid ks";

      kalturaClient.request(listAction).then(
        (response) => {
          fail("should not reach this part");
        },
        (error) => {
          expect(error instanceof KalturaAPIException).toBeTruthy();
        }
      );

    });

    xtest("reflect network exceptions as kaltura api exception", () => {
      pending("TBD");
    });

    xtest("reflect missing requst argument as kaltura api exception", () => {
      pending("TBD");
    });

    test("process request without setting completion to that request", () => {
      kalturaClient.request(new BaseEntryListAction()).then(
        (response) => {
          expect(response instanceof KalturaBaseEntryListResponse).toBeTruthy();
        },
        () => {
          fail("should not reach this part");
        }
      );
    });
  });
});