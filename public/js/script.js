$(document).ready(function ($) {
  var $userForm = $('.new-user')

  $userForm.on('submit', function (e) {
    e.preventDefault()
    var formdata = $(this).serializeArray()

    var user_name = $('#user-name').val()
    var user_password = $('#user-password').val()
    var user_email = $('#user-email').val()

    $.ajax({
      type: 'POST',
      url: '/api/users',
      data: formdata
    }).done(doSomething)
  })

  function doSomething (data) {
    alert('Form submitted, new user created')
    alert(data)
    $('#all-user-list').append('<li>' + data.name + data.email + data.password + '</li>')
  }
})
