<?php

$folder = '../images/';
$images = glob($folder . 'photos/' . '*.{jpg,jpeg,png,gif,JPG}', GLOB_BRACE);
$imagesHtml = '';
foreach ($images as $image) {
    $imagesHtml .= '<img src="' . $image . '"/>';
}

$mainImage = glob($folder . 'main-photo/' . '*.{jpg,jpeg,png,gif,JPG}', GLOB_BRACE)[0];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LQBF</title>
    <link href="style.css" rel="stylesheet">
    <!-- imports GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
    <!-- appli js -->
    <script src="app.js" type="module"></script>
    <style>
        section#landing {
            background-image: url(<?= $mainImage ?>);
            background-size: cover;
            background-position: center;
        }
    </style>
</head>

<body>

<div id="background"></div>

    <header>
        <h2>LQBF</h2>
        <button id="theme-toggle">
            <img src="<?= $folder ?>/icons/sun.svg" width="30px" />
        </button>
    </header>

    <section id="landing">
        <div id="title">
            <h1>LQBF</h1>
        </div>

        <button id="arrow-bottom">
            <img src="<?= $folder ?>/icons/arrow-down-circle" width="50px" />
        </button>
    </section>

    <main class="dark">

        <section id="description">
            <div class="description-line image-on-right" id="first-line">
                <p class="theme-colored">
                    <span class="text-line">LQBF, c'est un ensemble de </span>
                    <span class="text-line"> quatre musiciens passionnés. </span>
                    <span class="text-line">Chanteuse, clavériste, batteur, </span>
                    <span class="text-line">trombonistes, bassiste...</span>
                </p>
                <img src="<?= $folder ?>images_description/TT9B0090.JPG" alt="photo du groupe entier">
            </div>
            <div class="description-line image-on-left" id="second-line">
                <img src="<?= $folder ?>images_description/1X7A5704.JPG" alt="photo du groupe entier">
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
                <img src="<?= $folder ?>images_description/TT9B0006.JPG" alt="photo du groupe entier">
            </div>
        </section>
        
        <section id="photos">
            <h3 class="theme-colored">Voici quelques images de notre groupe</h3>

            <div id="carousel">
                <?= $imagesHtml ?>
            </div>
        </section>

        <section id="videos">
            <h3 class="theme-colored">Voici quelques extraits de nos prestations</h3>

            <div id="videoContainer">

                <div id="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SwcNkCY1dmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>

        <section id="contacts">
            <p class="finalPhrase theme-colored">N'hesitez pas à nous contacter quel que soit votre projet !</p>
            <ul id="contacts-list">
                <li id="first-contact">
                    <img class="theme-colored" src="<?= $folder ?>icons/enveloppe.svg" alt="addresse mail">
                    <p class="theme-colored">lqbf.contact@gmail.com</p>
                </li>
                <li id="second-contact">
                    <img class="theme-colored" src="<?= $folder ?>icons/appel-telephonique.svg" alt="telephone">
                    <p class="theme-colored">06 81 95 16 55</p>
                </li>
            </ul>

        </section>

    </main>
</body>

</html>