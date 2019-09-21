# React Yelp Clone

See the [demo](http://ahmed-belhadj.github.io/react-yelp-clone).

## Quickstart

First, clone the repository:

```bash
git clone https://github.com/ahmed-belhadj/react-yelp-clone.git react-yelp-clone
cd react-yelp-clone

# install the dependencies
yarn install

# copy configuration (see below)
cp .env.example .env

# start the server
yarn start
```

## Configuring the Application

This app uses [dotenv](https://github.com/bkeepers/dotenv) for configuration. In order to configure the application for your own api access, [grab an api token from Google here](https://developers.google.com/maps/documentation/javascript/) and set it in a file called `.env` at the root for a key called `__GAPI_KEY__`.
For instance, say that your gapi key is: `abc123`. Your `.env` file should look like:

```bash
GAPI_KEY=abc123
```

You can also create this file by copying the `.env.example` file at the root:

```bash
cp .env.example .env
```

## Starting the Application

```bash
yarn install
yarn start
```

## Libraries Used

This app uses the following technologies:

- [webpack](https://webpack.github.io)
- [postcss](http://postcss.org)
- [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack)
- [react.js](http://facebook.github.io/react/)
- [react-router](https://github.com/reactjs/react-router)
- [Google Maps API](https://developers.google.com/maps/)
- [google-maps-react npm](https://github.com/fullstackreact/google-maps-react)
- [enzyme](https://github.com/airbnb/enzyme)
- [chai](http://chaijs.com)

## Running the Tests

The application is built using tests, including the fantastic [enzyme](https://github.com/airbnb/enzyme) and [chai](http://chaijs.com) libraries. To run the tests, use the `yarn` test script:

```shell
yarn test
```

---

## License

[MIT](/LICENSE)
