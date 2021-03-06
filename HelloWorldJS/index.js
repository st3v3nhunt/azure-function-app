module.exports = (context, req) => {
  context.log('JavaScript HTTP trigger function processed a request.');

  if (req.query.name || (req.body && req.body.name)) {
    const name = req.query.name || req.body.name;
    // eslint-disable-next-line no-param-reassign
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: `Hello ${name}`,
    };
  } else {
    // eslint-disable-next-line no-param-reassign
    context.res = {
      body: 'Please pass a name on the query string or in the request body',
      status: 400,
    };
  }
  context.done();
};
