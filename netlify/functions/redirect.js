exports.handler = async function (event, context) {
  return {
    statusCode: 301,
    headers: {
      Location: "https://fantastic-manatee-096881.netlify.app/",
    },
    body: "Redirecting...",
  };
};
