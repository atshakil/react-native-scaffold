import Status from 'http-status';

export default url => {
  const
    defaultOptions = {
      authenticate: true
    },
    interpolateOptions = options => Object.assign({}, defaultOptions, options),
    handleUnauthenticated = () => {
      // TODO: Provide unauthorized request handler
    };

  const init = (method, args) => Object.assign({
    method,
    mode: 'cors',
    headers: Object.assign({"Content-Type": "application/json"}, args.headers),
    body: JSON.stringify(args.data)
  }, args.init);

  const request = (method, args) => {
    if(args.raw) {
      if (args.success && args.error) {
        fetch(url, init(method, args))
          .then(response =>
            args.authenticate && response.status == Status.UNAUTHORIZED ?
              handleUnauthenticated()
              :
              args.success(response)
          )
          .catch(args.error);
      } else if (args.success) {
        fetch(url, init(method, args))
          .then(response =>
            args.authenticate && response.status == Status.UNAUTHORIZED ?
              handleUnauthenticated()
              :
              args.success(response)
          );
      } else if (args.error) {
        fetch(url, init(method, args))
          .catch(args.error);
      } else {
        fetch(url, init(method, args));
      }
    } else {
      if (args.success && args.error) {
        fetch(url, init(method, args))
          .then((response) =>
            args.authenticate && response.status == Status.UNAUTHORIZED ?
              handleUnauthenticated()
              :
              response.json().then(args.success)
          )
          .catch(args.error);
      } else if (args.success) {
        fetch(url, init(method, args))
          .then((response) =>
            args.authenticate && response.status == Status.UNAUTHORIZED ?
              handleUnauthenticated()
              :
              response.json().then(args.success)
          );
      } else if (args.error) {
        fetch(url, init(method, args))
          .catch(args.error);
      } else {
        fetch(url, init(method, args));
      }
    }
  };

  return {
    get: args => request('GET', interpolateOptions(args)),
    post: args => request('POST', interpolateOptions(args)),
    put: args => request('PUT', interpolateOptions(args)),
    delete: args => request('DELETE', interpolateOptions(args)),
    patch: args => request('PATCH', interpolateOptions(args))
  };
};
