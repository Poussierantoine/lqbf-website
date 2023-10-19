<?php

$folder = 'images/';
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
    <script src="app.js" type="module"></script>
    <style>
        section#landing {
            background-image: url(<?= $mainImage ?>);
            background-size: cover;
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
            <img src="images/icons/arrow-down-circle" width="50px" />
        </button>
    </section>

    <main>

        <section id="description">
            <div class="sectionTitle">
                <h3>Qui sommes nous</h3>
            </div>
            <p class="paragraph">
                LQBF, c'est un ensemble de quatre musiciens passionnés. Chanteuse, clavériste, batteur, trombonistes, bassiste...
                Nos influences sont multiples et colorées, allant de la soul au funk, en passant par le jazz et la pop.
                Ceux qui nous font vibrer ? Jamiroquaï, Stevie Wonder, Amy Winehouse... 
                Reprises, arrangements, compositions: nous sommes ouverts aux propositions de représentations.
                Votre scène sera la nôtre!
            </p>
        </section>

        <section id="photos">
            <h3>Voicis quelques images de notre groupe</h3>

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

        <section id="contact-prices">
            <div class="sectionTitle">
                <h3>Comment pouvons nous vous servir?</h3>
            </div>
            <div>
                <p class="paragraph">nous faisons les concerts, mariages, soirées privées ... blablabla ... nos tarifs sont d'environ 5000 pesos pour 10 minutes mais nous adaptons nos tarifs à la localisation et à la demande, n'hesitez pas à nous contacter nous serons ravis de voir ca avec vous t'as capté</p>
                <p class="paragraph">nous fournissons ..... mais nous aurons besoins de .... qui devrons soit être loués ... soit fournis par les organisateurs ou la structure d'acceuil</p>
                <p class="paragraph">suivez nous sur les reseaux pour voir nos actualitées et dates de concert</p>
            </div>
            <ul id="contacts">
                <li>
                    <img src="images/icons/facebook.svg" alt="facebook">
                    <p>LQBF</p>
                </li>
                <li>
                    <img src="images/icons/instagram.svg" alt="instagram">
                    <p>@LQBF</p>
                </li>
                <li>
                    <img src="images/icons/enveloppe.svg" alt="addresse mail">
                    <p>lqbf.contact@gmail.com</p>
                </li>
                <li>
                    <img src="images/icons/appel-telephonique.svg" alt="telephone">
                    <p>06 81 95 16 55</p>
                </li>
            </ul>

            <p class="finalPhrase">see you, space cowboy...</p>
        </section>

    </main>
</body>

</html>