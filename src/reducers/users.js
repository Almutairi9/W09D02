const initialState = {
    User: null,
    token: "",
  };
  
  const users = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "LOGIN":
        const { User, token } = payload;
        localStorage.setItem("token", token);
        // localStorage.setItem("role", user.role.role);
        return { User, token };
      case "LOGOUT":
        localStorage.removeItem("token");
        // localStorage.removeItem("role");
        return { User: null, token: "" };
      default:
        return state;
    }
  };
  
  export default users;
  
  export const userLogin = (data) => {
    return {
      type: "LOGIN",
      payload: data,
    };
  };
  
  export const userLogout = (data) => {
    return {
      type: "LOGOUT",
      payload: data,
    };
  };