import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap-social/bootstrap-social.css';

import '../css/styles.scss';

import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import  menuplanner from './menuplanner.js';

$(document).ready(function(){
  $('#loginButton').click(function(){
    $('#loginModal').modal();
  });

  $(function () {
    menuplanner.initModule($('#menuplanner'));
  });

});
