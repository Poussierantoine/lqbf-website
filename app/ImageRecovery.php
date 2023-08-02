<?php

namespace App;

class ImageRecovery {





    public static function getImages () {
            $dir = "images/";
            $images = scandir($dir);
            var_dump($images);
    }


}



?>