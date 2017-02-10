Accounts.onCreateUser( function( options, user ) {
  if ( options.profile && options.profile.user ) {
     var optionsUser        = options.profile.user;

    optionsUser.userId = user._id;
    //delete options.profile;

    //Users.insert( optionsUser );
    user.profile = options.profile;
  }

  if ( options.profile ) {
    user.profile = options.profile;
  }

  return user;
});