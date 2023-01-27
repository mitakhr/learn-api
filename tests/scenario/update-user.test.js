import { assert } from "chai";
import reqresApi from "$root/page/reqres.api";
import * as data from "$root/data/user.data";

describe("Update Data", function () {
  it("Should successfully update data (put)", async () => {
    const response = await reqresApi.update_user(data.UPDATE_USER);
    assert.equal(response.status, 200);
  });

  it("Should successfully update data (patch)", async () => {
    const response = await reqresApi.update_user(data.UPDATE_USER);
    assert.equal(response.status, 200);
  });
});
