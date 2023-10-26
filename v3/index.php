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
    <header>
        <h2>LQBF</h2>
    </header>

    <section id="landing">
        <div id="title">
            <h1>LQBF</h1>
        </div>

        <button id="arrow-bottom">
            <img src="<?= $folder ?>/icons/arrow-down-circle" width="50px" />
        </button>
    </section>

    <main>

        <section id="description">
            <div class="description-line image-on-right" id="first-line">
                <p>
                    <span class="text-line">LQBF, c'est un ensemble de </span>
                    <span class="text-line"> quatre musiciens passionnés. </span>
                    <span class="text-line">Chanteuse, clavériste, batteur, </span>
                    <span class="text-line">trombonistes, bassiste...</span>
                </p>
                <img src="<?= $folder ?>images_description/TT9B0090.JPG" alt="photo du groupe entier">
            </div>
            <div class="description-line image-on-left" id="second-line">
                <img src="<?= $folder ?>images_description/1X7A5704.JPG" alt="photo du groupe entier">
                <p>
                <span class="text-line">Nos influences sont multiples </span>
                <span class="text-line">et colorées, allant de la soul </span>
                <span class="text-line">au funk,en passant par le jazz </span>
                <span class="text-line">et la pop. Ceux qui nous font </span>
                <span class="text-line">vibrer ? Jamiroquaï, Stevie </span>
                <span class="text-line">Wonder, Amy Winehouse...</span>
                </p>
            </div>
            <div class="description-line image-on-right" id="third-line">
                <p>
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
            <h3>Voici quelques images de notre groupe</h3>

            <div id="carousel">
                <?= $imagesHtml ?>
            </div>
        </section>

        <section id="videos">
            <h3>Voici quelques extraits de nos prestations</h3>

            <div id="videoContainer">

                <div id="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SwcNkCY1dmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div id="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/g6NBHcBieL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div id="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d3GlXEZJsRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>

        <section id="contacts">
            <p class="finalPhrase">N'hesitez pas à nous contacter quelle que soit votre projet !</p>
            <ul id="contacts-list">
                <li id="third-contact">
                    <img src="<?= $folder ?>/icons/enveloppe.svg" alt="addresse mail">
                    <p>lqbf.contact@gmail.com</p>
                </li>
                <li id="fourth-contact">
                    <img src="<?= $folder ?>/icons/appel-telephonique.svg" alt="telephone">
                    <p>06 81 95 16 55</p>
                </li>
            </ul>

        </section>

    </main>
</body>

</html>