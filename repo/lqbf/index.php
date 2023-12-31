<?php

$source_folder = './';
$folder = 'images/';
$images = glob($folder . 'photos/' . '*.{jpg,jpeg,png,gif,JPG}', GLOB_BRACE);
$imagesHtml = '';
for ($i = 0; $i < count($images); $i++) {
    $image = $images[$i];
    $loading = $i > 8 ? 'loading="lazy"' : "";
    $imagesHtml .= '<img src="' . $source_folder . $image . '" ' . $loading . ' alt="photo du groupe LQBF"/>';
}

$mainImage = glob($folder . 'main_image/' . '*.{jpg,jpeg,png,gif,JPG}', GLOB_BRACE)[0];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LQBF</title>
    <link href="<?= $source_folder ?>style.css" rel="stylesheet">
    <!-- imports GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
    <!-- appli js -->
    <script src="<?= $source_folder ?>app.js" type="module"></script>
</head>

<body>

    <div id="loader">
        <img src="<?= $source_folder . $folder ?>loaderGif.gif" alt="loading gif" loading="eager">
    </div>

    <div id="background">
        <div id="desc"></div>
        <div id="asc"></div>
    </div>

    <header>
        <h2>LQBF</h2>
        <button class="dark-theme" id="theme-switch-container">
            <div id="theme-switch">
                <img id="sun-icon" src="<?= $source_folder . $folder ?>/icons/sun.svg" width="30px" alt="" />
                <img id="moon-icon" src="<?= $source_folder . $folder ?>/icons/moon.svg" width="30px" alt="" />
            </div>
        </button>
    </header>

    <section id="landing">
        <img id="main-image" src="<?= $source_folder . $mainImage ?>" alt="photo du groupe entier">
        <div id="title">
            <h1>LQBF</h1>
        </div>

        <button id="arrow-bottom">
            <img src="<?= $source_folder . $folder ?>icons/arrow-down-circle.svg" width="50px" alt="" />
        </button>
    </section>

    <main class="dark">

        <section id="description">
            <div class="description-line image-on-right" id="first-line">
                <p class="theme-colored">
                    <span class="text-line">LQBF, c'est un ensemble de</span>
                    <span class="text-line">quatre musiciens passionnés.</span>
                    <span class="text-line">Chanteuse, clavériste, batteur,</span>
                    <span class="text-line">trombonistes, bassiste...</span>
                </p>
                <img src="<?= $source_folder . $folder ?>description_images/TT9B0090.jpg" alt="photo du groupe entier">
            </div>
            <div class="description-line image-on-left" id="second-line">
                <img src="<?= $source_folder . $folder ?>description_images/1X7A5704.jpg" alt="photo de la chanteuse et du batteur">
                <p class="theme-colored">
                    <span class="text-line">Nos influences sont multiples </span>
                    <span class="text-line">et colorées, allant de la soul </span>
                    <span class="text-line">au funk,en passant par le jazz </span>
                    <span class="text-line">et la pop. Ceux qui nous font </span>
                    <span class="text-line">vibrer ? Jamiroquaï, Stevie </span>
                    <span class="text-line">Wonder, Amy Winehouse...</span>
                </p>
            </div>
            <div class="description-line image-on-right" id="third-line">
                <p class="theme-colored">
                    <span class="text-line">Reprises, arrangements, </span>
                    <span class="text-line">compositions: nous sommes </span>
                    <span class="text-line">ouverts aux propositions de </span>
                    <span class="text-line">représentations.</span>
                    <span class="text-line">Votre scène sera la nôtre!</span>
                </p>
                <img src="<?= $source_folder . $folder ?>description_images/TT9B0006.jpg" alt="photo du groupe entier">
            </div>
        </section>

        <section id="photos">

            <div id="carousel">
                <?= $imagesHtml ?>
            </div>
        </section>

        <p style="color:white">les vidéos sont en cours de publication, cette section est vide pour le moment</p>
        <section id="videos">
            <div id="video-container">
            </div>
        </section>

        <section id="contacts">
            <p class="finalPhrase theme-colored">N'hesitez pas à nous contacter quel que soit votre projet !</p>
            <ul id="contacts-list">
                <li id="first-contact">
                    <img class="theme-colored" src="<?= $source_folder . $folder ?>icons/enveloppe.svg" alt="addresse mail">
                    <p class="theme-colored">lqbf.contact@gmail.com</p>
                </li>
                <li id="second-contact">
                    <img class="theme-colored" src="<?= $source_folder . $folder ?>icons/appel-telephonique.svg" alt="telephone">
                    <p class="theme-colored">06 81 95 16 55</p>
                </li>
            </ul>

        </section>

    </main>
</body>

</html>