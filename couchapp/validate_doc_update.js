function(newDoc, oldDoc, userCtx, secObj) {
  var ddoc = this,
      IS_DB_ADMIN = false;

  secObj.admins = secObj.admins || {};
  secObj.admins.names = secObj.admins.names || [];
  secObj.admins.roles = secObj.admins.roles || [];

  if (userCtx.roles.indexOf('_admin') >= 0) {
    IS_DB_ADMIN = true;
  }
  if (secObj.admins.names.indexOf(userCtx.name) >= 0) {
    IS_DB_ADMIN = true;
  }
  for (var i = 0; i < userCtx.roles.length; i++) {
    if (secObj.admins.roles.indexOf(userCtx.roles[i]) >= 0) {
      IS_DB_ADMIN = true;
    }
  }

  if (IS_DB_ADMIN) {
    log('Admin change on read-only db: ' + newDoc._id);
  } else {
    throw {'forbidden':'This database is read-only'};
  }
}
