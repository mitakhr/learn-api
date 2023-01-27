import { assert } from "chai";
import reqresApi from "$root/page/reqres.api";
import * as data from "$root/data/user.data";
import { getParams } from "../helper/lib.api";

describe("Single User", function () {
  it("Should successfull get single user", async () => {
    const response = await reqresApi.single_user(data.SINGLE_USER);

    assert.equal(response.status, 200);
  });

  it("Should unsuccessfull get single user", async () => {
    const response = await reqresApi.not_user();

    assert.equal(response.status, 404); //cek http response
  });
});
