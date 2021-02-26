var context = require.context('./source', true, /-spec\.js$/);  // gets files ending with -spec.js for testing

context.keys().forEach(context);