app.controller('UserListController', function($location, $rootScope, $scope,UserService) {
  

  if (!$rootScope.user.get('name')) {
    $scope.message = {};
    $scope.message.body_text = "您的会员信息还没完善，请点击按钮去完善！";
    $scope.message.btn_text = "去完善";
    $scope.message.type = 'go_to_profile';
  }

  

  var init_user = function(){
    $scope.user_page = 1;
    $scope.load_more_end = false;
    $scope.users = [];
  
    var users = UserService.getUsers($scope.user_page);
    users.then(function(users){
      $scope.users = users;
      if (!users || !users[19]) {
        $scope.load_more_end = true;
      }
    })
  }

  init_user();

  $scope.msgAction = function(msg){
    $scope.message = false;
    if (msg.type == 'go_to_profile') {
      $location.path("/myprofile" );
    }
  }


  $scope.user_load_more = function(user){
    $scope.user_page ++;
    var users = UserService.getUsers($scope.user_page);
    users.then(function(users){
      for (i = 0; i <= users.length - 1; i++) {
        $scope.users.push(users[i]);
      }

      $scope.load_more_end = false;
      if (!users || !users[19]) {
        $scope.load_more_end = true;
      }
    })
  }

  $scope.triggerProfile = function(user){
    user.show = !user.show;
  }

  $scope.search = function(){
    if ($scope.search_word) {
      var search_users = UserService.searchUsers($scope.search_word);
      search_users.then(function(users){
        $scope.users = users;
      })

    }else{
      init_user()
    }
  }

});

app.controller('UserProfileController', function($routeParams, $rootScope, $scope,UserService) {
  var user_id = $routeParams.id;
  var user = UserService.getUserById(user_id);
  user.then(function(user){
    $scope.profile_user = user;
    if (user) {
      $scope.user_data = {};
      $scope.user_data.name = user.get('name') ? user.get('name') : '';
      $scope.user_data.sex = user.get('sex') ? user.get('sex') : '';
      $scope.user_data.school = user.get('school') ? user.get('school') : '';
      $scope.user_data.company = user.get('company') ? user.get('company') : '';
      $scope.user_data.industry = user.get('industry') ? user.get('industry') : '';
    }
  })

 // console.log(user_id);
 // console.log('user_id');

});

app.controller('MyProfileController', function($location,$rootScope, $scope,UserService) {
  UserService.removeCache();

  $scope.user_data = {};
  $scope.show_edit = false;
  var user = AV.User.current();
  $scope.user = user;

  $scope.graduate_year = [];

  for (var i = 0 ; i <= 80; i++) {
    var year = 2017 - i;
    $scope.graduate_year.push(year);
  }
  
  $scope.show_profile = false;
  $scope.show_edit_form = true;

  if (user) {
    $scope.user_data.name = user.get('name') ? user.get('name') : '';
    $scope.user_data.sex = user.get('sex') ? user.get('sex') : '';
    $scope.user_data.school = user.get('school') ? user.get('school') : '';
    $scope.user_data.company = user.get('company') ? user.get('company') : '';
    $scope.user_data.industry = user.get('industry') ? user.get('industry') : '';
    $scope.user_data.mobile = user.get('mobilePhoneNumber') ? user.get('mobilePhoneNumber') : '';
    $scope.user_data.graduate_year = user.get('graduate_year') ? user.get('graduate_year') : '';
    $scope.user_data.graduate_type = user.get('graduate_type') ? user.get('graduate_type') : '高中';


    $scope.user_data.home_town = user.get('home_town') ? user.get('home_town') : '';

    $scope.user_data.country = user.get('country') ? user.get('country') : '';
    $scope.user_data.city = user.get('city') ? user.get('city') : '';
  }

  $scope.logOut = function(){
    AV.User.logOut();
    $location.path("/login" );

  }

  $scope.cancel = function(){
    $scope.show_import = false;
    user.set('import',true);
    user.save();
  }
  

  $scope.importProfile = function(){
    user.set('name',$scope.profile.get('name'));
    user.set('sex',$scope.profile.get('sex'));
    user.set('school',$scope.profile.get('school'));
    user.set('company',$scope.profile.get('company'));
    user.set('mobilePhoneNumber',$scope.profile.get('number'));

    user.save();

    $scope.user_data.name = user.get('name') ? user.get('name') : '';
    $scope.user_data.sex = user.get('sex') ? user.get('sex') : '';
    $scope.user_data.school = user.get('school') ? user.get('school') : '';
    $scope.user_data.company = user.get('company') ? user.get('company') : '';
    $scope.user_data.industry = user.get('industry') ? user.get('industry') : '';
    $scope.user_data.mobile = user.get('mobilePhoneNumber') ? user.get('mobilePhoneNumber') : '';

    $scope.show_import = false;
    $scope.show_edit_form = true;
    $scope.show_profile = false;
  }

  $scope.showEditProfile = function(){
    $scope.show_edit_form = !$scope.show_edit_form;
  }

  $scope.saveProfile = function(){
    if ($scope.user_data.name) {
      user.set('name',$scope.user_data.name);
    }

    if ($scope.user_data.sex) {
      user.set('sex',$scope.user_data.sex);
    }

    if ($scope.user_data.school) {
      user.set('school',$scope.user_data.school);
    }

    if ($scope.user_data.company) {
      user.set('company',$scope.user_data.company);
    }

    if ($scope.user_data.mobile) {
      user.set('mobilePhoneNumber',$scope.user_data.mobile);
    }

    if ($scope.user_data.graduate_year) {
      user.set('graduate_year',$scope.user_data.graduate_year);
    }

    if ($scope.user_data.home_town) {
      user.set('home_town',$scope.user_data.home_town);
    }

    if ($scope.user_data.industry) {
      user.set('industry',$scope.user_data.industry);
    }

    if ($scope.user_data.graduate_type) {
      user.set('graduate_type',$scope.user_data.graduate_type);
    }


    user.set('country',$scope.user_data.country);
    user.set('city',$scope.user_data.city);

    user.save();
  }

  

  $scope.goHome = function(){
    $location.path("/" );

  }

  

});





app.controller('LoginController', function($location, $rootScope, $scope) {
  $scope.enable_login = true;
  $scope.input = {};

  $scope.enableCheck = function(){
    $scope.lock_get_phone_code = false;
    $scope.number_message = false;
  }

  $scope.sendPhoneCode = function(){
    $scope.lock_get_phone_code = true;
    
    var phone = $scope.input.phone.toString();
    AV.Cloud.requestSmsCode(phone).then(function (success) {
      

      $scope.$apply(function() {
        $scope.show_login_btn = true;
        $scope.number_message = '验证码已发送';
      });

    }, function (error) {
      $scope.$apply(function() {
        $scope.number_message = '无效的手机号码';
      });
    });
  }

  $scope.login = function(){

    var phone_code = $scope.input.phone_code.toString();
    var phone = $scope.input.phone.toString();

    AV.User.signUpOrlogInWithMobilePhone(phone, phone_code).then(function (user) {
      $rootScope.user = user;
      

      $scope.$apply(function() {
        $location.path("/" );
      });

    }, function (error) {
      $scope.$apply(function() {
        $scope.code_message = '无效的短信验证码';
      });
    });
  }
});


app.controller('LogoutController', function($location, $rootScope, $scope,UserService) {
  $scope.logOut = function(){
    AV.User.logOut();
    $location.path("/login" );

  }
  

});

app.controller('YearContactController', function($location, $rootScope, $scope,UserService) {
  $scope.logOut = function(){
    AV.User.logOut();
    $location.path("/login" );

  }
  

});

app.controller('ListKeyWordsController', function($location, $rootScope, $scope,UserService) {

  var query = new AV.Query('User');
      query.exists('industry');
      query.exists('name');
      query.descending('industry');
      query.limit(300);
      query.find().then(function (users) {
        var key_word_arr = [];
        var key_word_objs = [];

        for (var i = users.length - 1; i >= 0; i--) {
          var key = users[i].get('industry');
          var index = key_word_arr.indexOf(key);
          if (index < 0) {
            key_word_arr.push(key);
            var obj = {};
            obj.key = key;
            obj.users = [];
            obj.users.push(users[i]);
            key_word_objs.push(obj);
          }else{
            for (var j = key_word_objs.length - 1; j >= 0; j--) {
              var obj = key_word_objs[j];
              if (obj.key == key) {
                obj.users.push(users[i]);
              }
            }
          }
        }

        var user_obj = key_word_objs[0];
        for (var i = key_word_objs.length - 1; i >= 0; i--) {
          if (key_word_objs[i].users.length > user_obj.users.length) {
            user_obj = key_word_objs[i];
          }
        }

        $scope.$apply(function() {
          user_obj.in_show = true;
          $scope.key_word_objs = key_word_objs;
          $scope.obj = user_obj;
          $scope.users = user_obj.users;
        });

        

        

      }).catch(function(error) {
      // alert(JSON.stringify(error));
      });
  

  $scope.showUsers = function(obj){
    for (var i = $scope.key_word_objs.length - 1; i >= 0; i--) {
      $scope.key_word_objs[i].in_show = false;
      obj.in_show = true;
    }

    $scope.obj = obj;
    $scope.users = obj.users;
  }

  $scope.keyWordClass = function(obj){
    if (obj.in_show) {
      return "active";
    }
  }

  $scope.triggerProfile = function(user){
    user.show = !user.show;
  }

});
app.controller('DataWordsController', function($location, $rootScope, $scope,UserService) {
  console.log('DataWordsController..');
    
  var users = UserService.getUsers(1);
  users.then(function(users){
    console.log(users);  
  })

});









