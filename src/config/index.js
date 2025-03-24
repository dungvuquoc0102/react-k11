const config = {
  routes: {
    home: "/",

    // Products
    products: "/products",
    productDetail: "/products/:slug",

    // Users
    users: "/users",

    // Auth
    login: "/login",
    register: "/register",

    // Not Found
    notFound: "*",
  },
};

export default config;
