/* this is my first function */

exports.handler = async (event) => {

    const num=Math.random()
    return {
        statusCode:200,
        body:JSON.stringify(`random number generate ::(local) ${num}`),
    };
  };


// https://0dr86uy5b6.execute-api.us-east-2.amazonaws.com/dev1/nodejsVinok 
// "errorMessage": "exports is not defined in ES module scope", lambda node function




