$(document).ready(function () {
  $('#but').click(function(){
     $.ajax({
     url: 'https://reqres.in/api/users/10',
     async: true,
     datatype: 'json',
     beforeSend: function () {
     },
     type: 'GET',
     cache: false,
     success: function (jsonObject) {
       var data = jsonObject.data;
       $('#num').text('the id is ' + data.id);
       $('#first_name').text('First Name is ' + data.first_name);
       $('#last_name').text('Last Name is ' + data.last_name);
       $('#avatar').attr('src' ,'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg');
     },
     error: function (err) {
       console.error(err);
     },
    });
  });




});