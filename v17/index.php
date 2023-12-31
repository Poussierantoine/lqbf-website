<?php

$source_folder = '../';
$folder = 'images/';
$images = glob($source_folder . $folder . 'photos/' . '*.{jpg,jpeg,png,gif,JPG}', GLOB_BRACE);
$imagesHtml = '';
for ($i = 0; $i < count($images); $i++) {
    $image = $images[$i];
    $loading = $i > 8 ? 'loading="lazy"' : "";
    $imagesHtml .= '<img src="' . $image . '" ' . $loading . ' alt="photo du groupe LQBF"/>';
}

$mainImage = glob($source_folder . $folder . 'main_image/' . '*.{jpg,jpeg,png,gif,JPG}', GLOB_BRACE)[0];

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
    </header>

    <section id="landing">
        <img id="main-image" src="<?= $mainImage ?>" alt="photo du groupe entier">
        <div id="title">
            <h1>LQBF</h1>
        </div>

        <button id="arrow-bottom">
            <img src="<?= $source_folder . $folder ?>icons/arrow-down-circle.svg" width="50px" alt="" />
        </button>
    </section>

    <main class="dark">

        <section id="description">
                <p>
                    Chanteuse, claviériste, batteur, bassiste et trombonistes réunis avec passions.
                </p>
                <p>
                    Nos ingrédients : soul, funk, jazz et pop.
                    <br>
                    <br>
                    Ceux qui nous font vibrer ? Jamiroquaï, Stevie Wonder, Amy Winehouse, Incognito...
                </p>
                <p>
                    Reprises, arrangements, compositions: votre scène sera la nôtre!
                </p>
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
            <p class="finalPhrase">N'hesitez pas à nous contacter quel que soit votre projet !</p>
            <ul id="contacts-list">
                <li id="first-contact">
                    <img src="<?= $source_folder . $folder ?>icons/enveloppe.svg" alt="addresse mail">
                    <p>lqbf.contact@gmail.com</p>
                </li>
                <li id="second-contact">
                    <img src="<?= $source_folder . $folder ?>icons/appel-telephonique.svg" alt="telephone">
                    <p>06 81 95 16 55</p>
                </li>
            </ul>

        </section>

    </main>
</body>

</html>