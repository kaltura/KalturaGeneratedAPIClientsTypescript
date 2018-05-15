import { KalturaClient } from "../kaltura-client-service";
import { WidgetListAction } from "../api/types/WidgetListAction";
import { KalturaWidgetListResponse } from "../api/types/KalturaWidgetListResponse";
import { getClient } from "./utils";
import { LoggerSettings, LogLevels } from "../api/kaltura-logger";

describe(`service "Widget" tests`, () => {
  let kalturaClient: KalturaClient = null;

  beforeAll(async () => {
    LoggerSettings.logLevel = LogLevels.error; // suspend warnings

    return getClient()
      .then(client => {
        kalturaClient = client;
      }).catch(error => {
        // can do nothing since jasmine will ignore any exceptions thrown from before all
      });
  });

  afterAll(() => {
    kalturaClient = null;
  });

  test("widgets list", (done) => {
    kalturaClient.request(new WidgetListAction())
      .then(
        response => {
          expect(response instanceof KalturaWidgetListResponse).toBeTruthy();
          done();
        },
        (error) => {
          fail(error);
          done();
        }
      );
  });
});
