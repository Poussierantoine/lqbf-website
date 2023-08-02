<?php

$folder = 'images/';
$images = glob($folder . 'photos/' . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$imagesHtml = '';
foreach ($images as $image) {
    $imagesHtml .= '<div><img src="' . $image . '"/></div>';
}

$mainImage = glob($folder . 'main-photo/' . '*.{jpg,jpeg,png,gif}', GLOB_BRACE)[0];

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
        }
    </style>
</head>

<body>
    <header>
        <h2>LQBF</h2>
    </header>
    <main>

        <section id="landing">
            <div id="title">
                <h1>LQBF</h1>
            </div>

            <div id="arrow-bottom">-></div>
        </section>

        <section id="description">
            <h3>Qui sommes nous</h3>
            <p>Nous sommes un groupe grenoblois .... nous sommes 4 musiciens ... nous proposons des morceaux allans de ... à ... ainsi que nos propres compositions. nous pouvons aussi faire des morceaux sur demande si c'est possible pour nous n'hesitez pas a demander....
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis suscipit reiciendis nemo vero, totam deleniti aliquam, delectus, maiores dolor iste animi saepe tempora nam recusandae distinctio ad tenetur aspernatur!</p>

            <div id="inspirations">
                <h4>Voici nos principales inspirations:</h4>
                <div class="extrait">
                    <div id="mp3player"></div>
                    extrait de 10 seconde d'un morceau ...
                </div>
                <div class="extrait">
                    <div id="mp3player"></div>
                    extrait de 10 seconde d'un autre morceau ...
                </div>
            </div>
        </section>

        <section id="photos">
            <h3>Voicis quelques images de notre groupe</h3>
            <p>Vous pouvez aussi regardez nos prestations: <a>voir les prestations</a></p>
            <div id="carousel">
                <?= $imagesHtml ?>
            </div>
        </section>

        <section id="videos">
            <h3>Voici quelques extraits de nos prestations</h3>
            <div id="videoContainer">

                <div id="video">VIDEOS lien vers youtube</div>
                <div id="video">VIDEOS lien vers youtube</div>
                <div id="video">VIDEOS lien vers youtube</div>
            </div>
        </section>

        <section id="contacts-tarifs">
            <h3>Comment pouvons nous vous servir?</h3>
            <div>nous faisons les concerts, mariages, soirées privées ... blablabla ... nos tarifs sont d'environ 5000 pesos pour 10 minutes mais nous adaptons nos tarifs à la localisation et à la demande, n'hesitez pas à nous contacter nous serons ravis de voir ca avec vous t'as capté</div>
            <div>nous fournissons ..... mais nous aurons besoins de .... qui devrons soit être loués ... soit fournis par les organisateurs ou la structure d'acceuil</div>
            <p>suivez nous sur les reseaux pour voir nos actualitées et dates de concert</p>
            <ul id="contacts">
                <li><img src="images/icons/facebook.svg">
                    <p>LQBF</p>
                </li>
                <li><img src="images/icons/instagram.svg">
                    <p>@LQBF</p>
                </li>
                <li><img src="images/icons/enveloppe.svg">
                    <p>lqbf.contact@gmail.com</p>
                </li>
                <li><img src="images/icons/appel-telephonique.svg">
                    <p>06 81 95 16 55</p>
                </li>
            </ul>

            <div><br>see you, space cowboy...</br></div>
        </section>

    </main>
    <footer></footer>
</body>

</html>