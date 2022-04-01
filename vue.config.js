module.exports = {
  devServer: {
    // proxy: "http://comic.freeoda.com/",
    //proxy : 'https://xkcd.com/',
  },
  publicPath: process.env.NODE_ENV === "production" ? "/my-comics/" : "/",
};
