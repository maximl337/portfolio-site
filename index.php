<?php




// load app config (error reporting etc.)
require 'app/config/config.php';

// load app class
require 'app/core/application.php';
require 'app/core/controller.php';

// start the app
$app = new Application();
