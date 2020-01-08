import { expect } from "chai";
import { BrowserUtils } from "../../src/utils/BrowserUtils"
import { TEST_URIS } from "./StringConstants";

describe("BrowserUtils.ts Function Unit Tests", () => {

    it("navigateWindow returns not implemented error", () => {
        expect(() => BrowserUtils.navigateWindow("urlNavigate")).to.throw("Method not implemented.");
        expect(() => BrowserUtils.navigateWindow("urlNavigate")).to.throw(Error);
    });
    
    it("getDefaultRedirectUri returns current location uri of browser", () => {
        expect(BrowserUtils.getDefaultRedirectUri()).to.be.eq(TEST_URIS.TEST_REDIR_URI);
    });

});