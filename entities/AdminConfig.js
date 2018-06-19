const config = {
    title: "Fiona Le Masson",
    slug: "votre notaire à Vertou",
    video: "https://www.youtube.com/embed/yfUcvMnNst0",
    contact: {
        email: "fxxxx.sxxxxxx@live.fr",
        phone: "01.02.03.04.05",
        mobile: "06.01.02.03.04",
        fax: "09.01.02.03.04",
        opening: "du lundi au vendredi de 08 heures à 12 heures"
    },
    address: {
        name: "Office Notarial de Vertou",
        number: "1",
        street: "rue de la garenne",
        complement: "",
        zip: "44120",
        city: "Vertou"
    },
    presentation: {
        content: `Nous sommes une Entreprise Notariale, pluridisciplinaire, de plus de soixante collaborateurs développant nos compétences
                            à travers cinq services dédiés spécialisés.
                            <br>Notre action quotidienne : Être à l’écoute pour comprendre et répondre à la demande de nos clients
                            Développer et exploiter nos compétences pour assurer le service de prestations de qualité
                            <br>Innover pour apporter une valeur ajoutée aux solutions préconisées. Rester attaché au bien être
                            des collaborateurs afin de leur permettre de s’épanouir dans leur métier
                            <br>Notre mission : Sécuriser (réducteur d’incertitudes) Simplifier (accompagner dans la complexité)
                            Assumer notre rôle social
                            <br>SERVIR ET AIMER SERVIR
                            <br>Nos quatre départements spécialisés FAMILIA pour le droit de la famille et du patrimoine
                            <br>ECONOMICA
                            <br>pour le droit commercial et de l’entreprise ainsi que le droit rural, le droit social et le droit
                            fiscal
                            <br>PUBLICA
                            <br>pour le droit administratif, l’urbanisme, l’environnement et les collectivités territoriales
                            <br>AEDIFICA et IMMOBILIA pour le Droit de la construction et le droit immobilier Notre service "plus"
                            Un service de conseil en organisation du patrimoine Un service d’expertise Un service de négociation
                            immobilière
                            <br>Un service qualité Un service documentation Nos moyens Nous mettons notre savoir faire, notre
                            méthode de travail qualifiée et normalisée, notre ingénierie juridique, un réseau de partenaires,
                            la documentation, la veille juridique et la base de données internes de l’office, à votre service
                            pour vous informer, trouver des solutions sûres et innovantes et vous permettre de réaliser vos
                            projets.`.replace(/<br>/g, "\n"),
                            slug: `J'ai un super slogan, mais je ne vous dirai pas lequel !`,
                            autor: "Fiona Le Masson"
    },
    environment: `La commune de Vertou se trouve dans le 44`
}


class Config {
    constructor() {
        return config;
    }
}

module.exports = new Config;