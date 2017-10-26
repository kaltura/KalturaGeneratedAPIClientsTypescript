import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { UiConfListAction } from "../types/UiConfListAction";
import { KalturaUiConfListResponse } from "../types/KalturaUiConfListResponse";
import { KalturaUiConf } from "../types/KalturaUiConf";
import { KalturaUiConfFilter } from "../types/KalturaUiConfFilter";
import { KalturaUiConfObjType } from "../types/KalturaUiConfObjType";
import { UiConfListTemplatesAction } from "../types/UiConfListTemplatesAction";

describe(`service "UIConf" tests`, () => {
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

  test("uiconf list", (done) => {
    kalturaClient.request(new UiConfListAction())
      .then(
        response => {
          expect(response instanceof KalturaUiConfListResponse).toBeTruthy();
          expect(Array.isArray(response.objects)).toBeTruthy();
          expect(response.objects.every(obj => obj instanceof KalturaUiConf)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        }
      );
  });


  // TODO [kmc] investigate response
  xtest("get players", (done) => {
    const players = [KalturaUiConfObjType.player, KalturaUiConfObjType.playerV3, KalturaUiConfObjType.playerSl];
    const filter = new KalturaUiConfFilter({ objTypeIn: players.join(",") });

    kalturaClient.request(new UiConfListAction(filter))
      .then(
        response => {
          expect(response.objects.every(obj => players.indexOf(Number(obj.objType)) !== -1)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        }
      );
  });

  test("get video players", (done) => {
    const players = [KalturaUiConfObjType.player, KalturaUiConfObjType.playerV3, KalturaUiConfObjType.playerSl];
    const filter = new KalturaUiConfFilter({
      objTypeIn: players.join(","),
      tagsMultiLikeOr: "player"
    });

    kalturaClient.request(new UiConfListAction(filter))
      .then(
        response => {
          response.objects.forEach(obj => {
            // TODO [kmc] blocked by previous test-case
            // expect(players.indexOf(Number(obj.objType)) !== -1).toBeTruthy();
            const match = /isPlaylist="(.*?)"/g.exec(obj.confFile);
            console.log(match);
            if (match) {
              expect(["true", "multi"].indexOf(match[1]) !== -1).toBeTruthy();
            }
          });


          done();
        },
        () => {
          fail("should not reach this part");
          done();
        }
      );
  });

  test("uiconf list templates", (done) => {
    kalturaClient.request(new UiConfListTemplatesAction())
      .then(
        response => {
          expect(response instanceof KalturaUiConfListResponse).toBeTruthy();
          expect(Array.isArray(response.objects)).toBeTruthy();
          expect(response.objects.every(obj => obj instanceof KalturaUiConf)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        }
      );
  });
});
