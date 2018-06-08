app.factory('UserService', ['$rootScope','$q',function($rootScope,$q){
    var user = AV.User.current();
    var users_list = {};

    var service = {
        
        test: function() {
            console.log('UserService service..');
        },

        removeCache: function() {
            users_list = {};
        },

        getProfileUserById:function(number){
            var q = $q.defer();
            var query = new AV.Query('Profile');
                query.equalTo('number',number);
                query.first().then(function (user) {
                    q.resolve(user);
                }).catch(function(error) {
                // alert(JSON.stringify(error));
                });
             return q.promise;
        },

        searchUsers:function(str){
            var q = $q.defer();
            var query1 = new AV.Query('User');
                query1.matches("name", ".*"+str+".*");

            var query2 = new AV.Query('User');
                query2.matches("company", ".*"+str+".*");

            var query3 = new AV.Query('User');
            query3.matches("graduate_year", ".*"+str+".*");

            var query4 = new AV.Query('User');
            query4.matches("home_town", ".*"+str+".*");

            var query5 = new AV.Query('User');
            query5.matches("country", ".*"+str+".*");

            var query6 = new AV.Query('User');
            query6.matches("city", ".*"+str+".*");

            var query7 = new AV.Query('User');
            query7.matches("industry", ".*"+str+".*");


            var mainQuery = AV.Query.or(query1, query2,query3, query4, query5, query6, query7);

            mainQuery.limit(20);
            mainQuery.find().then(function (users) {

                q.resolve(users);
            }).catch(function(error) {
            // alert(JSON.stringify(error));
            });

            return q.promise;
        },


        getUsers:function(page){
            var q = $q.defer();

            if (users_list[page]) {
                q.resolve(users_list[page]);
            }else{
                var limit = 20;

                var skip = limit * (page - 1);
                var query = new AV.Query('User');
                    query.descending('updatedAt');
                    query.limit(limit);
                    query.skip(skip);
                    query.find().then(function (users) {
                        users_list[page] = [];
                        for (var i = users.length - 1; i >= 0; i--) {
                            users_list[page].unshift(users[i]);
                        }

                        q.resolve(users);
                    }).catch(function(error) {
                    // alert(JSON.stringify(error));
                    });
            }

            
			 return q.promise;
        },

        getUserById:function(id){
            var self = this;
            var q = $q.defer();
            var query = new AV.Query('User');
            query.equalTo('objectId',id)
                query.first().then(function (user) {
                    if (user) {
                        q.resolve(user);
                    }else{
                        var bak_user = self.getBackUpUserById(id);
                        bak_user.then(function(user){
                            q.resolve(user);
                        })
                    }

                    
                }).catch(function(error) {
                // alert(JSON.stringify(error));
                });
             return q.promise;
        },


        getuserByPhone:function(phone){
            var q = $q.defer();
            var query = new AV.Query('Profile');
                query.equalTo('number',phone)
                query.first().then(function (profile) {
                    q.resolve(profile);
                }).catch(function(error) {
                // alert(JSON.stringify(error));
                });
             return q.promise;
        },

    };

    return service;

}]);