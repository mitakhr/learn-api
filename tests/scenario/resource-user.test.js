import { assert } from "chai";
import reqresApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

describe('User Resource', function () {
    it('Should successful get list <Resource>', async() => {
        const response = await reqresApi.resource_user();

        assert.equal(response.status, 200); //cek http response

    });

    it('Should successful get single <resource>',  async() => {
        const response = await reqresApi.resource_user(data.SINGLE_RESOURCE);

        
        assert.equal(response.status, 200); 
        
    });
    
    it('Should unsuccessful get single <resource>', async() => {
        const response = await reqresApi.invalid_resource_user();

        assert.equal(response.status, 404);
    });
})