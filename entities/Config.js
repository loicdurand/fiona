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
    }
}


class Config {
    constructor() {
        return config;
    }
}

module.exports = new Config;