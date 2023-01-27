import BaseAPI from "./base.api";

const reqresApi = {
  register: (data) => BaseAPI.post("/register", data),

  list_users: (param) => BaseAPI.get(`/users?page=${param}`),

  single_user: (data) => BaseAPI.get("/users/", data),
  not_user: () => BaseAPI.get("/users/23"),

  resource_user: (data) => BaseAPI.get("/unknown/", data),
  invalid_resource_user: () => BaseAPI.get("/unknown/23"),

  update_user: (data) => BaseAPI.put("/users/2", data),
  update_user: (data) => BaseAPI.patch("/users/2", data),

  delete_user: () => BaseAPI.delete("/users/2"),
};

export default reqresApi;
