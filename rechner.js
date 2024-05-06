document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            bruttogehalt: null,
            arbeitsstelle: null,
            steuerklasse: null,
            kinder: null,
            kinderfreibetraege: null,
            kirchensteuer: null,
            arbeitsweg: null,
            fahrzeug: null,
            carPreis: null,
            carReichweite: null,
            carMonatlicheRate: null,
        },
        methods: {
            grabValues() {
                this.bruttogehalt = document.getElementById("bruttogehalt").value;
                this.arbeitsstelle = document.getElementById("arbeitsstelle").value;
                this.steuerklasse = document.getElementById("steuerklasse").value;
                this.kinder = document.getElementById("kinder").value;
                this.kinderfreibetraege = document.getElementById("kinderfreibetraege").value;
                this.kirchensteuer = document.getElementById("kirchensteuer").value;
                this.arbeitsweg = document.getElementById("arbeitsweg").value;
                this.fahrzeug = document.getElementById("fahrzeug").value;

                this.getCarInfo();

                console.log("bruttogehalt:", this.bruttogehalt);
                console.log("arbeitsstelle:", this.arbeitsstelle);
                console.log("steuerklasse: ", this.steuerklasse);
                console.log("kinder: ", this.kinder);
                console.log("kinderfreibetraege: ", this.kinderfreibetraege);
                console.log("kirchensteuer: ", this.kirchensteuer);
                console.log("arbeitsweg: ", this.arbeitsweg);
                console.log("fahrzeug: ", this.fahrzeug);
                console.log("carPreis: ", this.carPreis);
                console.log("carReichweite: ", this.carReichweite);
                console.log("carMonatlicheRate: ", this.carMonatlicheRate);
            },
            getCarInfo() {
                switch (this.fahrzeug) {
                    case "TModel3-36-10kkm":
                        this.carPreis = 47560;
                        this.carReichweite = 491;
                        this.carMonatlicheRate = 738;
                        return;
                    case "TModel3-36-15kkm":
                        this.carPreis = 47560;
                        this.carReichweite = 491;
                        this.carMonatlicheRate = 748;
                        return;
                    case "TModel3-36-20kkm":
                        this.carPreis = 47560;
                        this.carReichweite = 491;
                        this.carMonatlicheRate = 768;
                        return;
                    case "TModel3-48-10kkm":
                        this.carPreis = 47560;
                        this.carReichweite = 491;
                        this.carMonatlicheRate = 662;
                        return;
                    case "TModel3-48-15kkm":
                        this.carPreis = 47560;
                        this.carReichweite = 491;
                        this.carMonatlicheRate = 676;
                        return;
                    case "TModel3-48-20kkm":
                        this.carPreis = 47560;
                        this.carReichweite = 491;
                        this.carMonatlicheRate = 686;
                        return;
                    case "TModel3LR-36-10kkm":
                        this.carPreis = 57560;
                        this.carReichweite = 602;
                        this.carMonatlicheRate = 874;
                        return;
                    case "TModel3LR-36-15kkm":
                        this.carPreis = 57560;
                        this.carReichweite = 602;
                        this.carMonatlicheRate = 888;
                        return;
                    case "TModel3LR-36-20kkm":
                        this.carPreis = 57560;
                        this.carReichweite = 602;
                        this.carMonatlicheRate = 914;
                        return;
                    case "TModel3LR-48-10kkm":
                        this.carPreis = 57560;
                        this.carReichweite = 602;
                        this.carMonatlicheRate = 786;
                        return;
                    case "TModel3LR-48-15kkm":
                        this.carPreis = 57560;
                        this.carReichweite = 602;
                        this.carMonatlicheRate = 802;
                        return;
                    case "TModel3LR-48-20kkm":
                        this.carPreis = 57560;
                        this.carReichweite = 602;
                        this.carMonatlicheRate = 812;
                        return;
                    case "TModelY-36-10kkm":
                        this.carPreis = 47568;
                        this.carReichweite = 455;
                        this.carMonatlicheRate = 774;
                        return;
                    case "TModelY-36-15kkm":
                        this.carPreis = 47568;
                        this.carReichweite = 455;
                        this.carMonatlicheRate = 788;
                        return;
                    case "TModelY-36-20kkm":
                        this.carPreis = 47568;
                        this.carReichweite = 455;
                        this.carMonatlicheRate = 808;
                        return;
                    case "TModelY-48-10kkm":
                        this.carPreis = 47568;
                        this.carReichweite = 455;
                        this.carMonatlicheRate = 682;
                        return;
                    case "TModelY-48-15kkm":
                        this.carPreis = 47568;
                        this.carReichweite = 455;
                        this.carMonatlicheRate = 696;
                        return;
                    case "TModelY-48-20kkm":
                        this.carPreis = 47568;
                        this.carReichweite = 455;
                        this.carMonatlicheRate = 706;
                        return;
                    case "TModelYLR-36-10kkm":
                        this.carPreis = 57688;
                        this.carReichweite = 533;
                        this.carMonatlicheRate = 908;
                        return;
                    case "TModelYLR-36-15kkm":
                        this.carPreis = 57688;
                        this.carReichweite = 533;
                        this.carMonatlicheRate = 918;
                        return;
                    case "TModelYLR-36-20kkm":
                        this.carPreis = 57688;
                        this.carReichweite = 533;
                        this.carMonatlicheRate = 944;
                        return;
                    case "TModelYLR-48-10kkm":
                        this.carPreis = 57688;
                        this.carReichweite = 533;
                        this.carMonatlicheRate = 806;
                        return;
                    case "TModelYLR-48-15kkm":
                        this.carPreis = 57688;
                        this.carReichweite = 533;
                        this.carMonatlicheRate = 822;
                        return;
                    case "TModelYLR-48-20kkm":
                        this.carPreis = 57688;
                        this.carReichweite = 533;
                        this.carMonatlicheRate = 832;
                        return;
                    case "HyundaiIonic5-36-10kkm":
                        this.carPreis = 58860;
                        this.carReichweite = 507;
                        this.carMonatlicheRate = 799;
                        return;
                    case "HyundaiIonic5-36-15kkm":
                        this.carPreis = 58860;
                        this.carReichweite = 507;
                        this.carMonatlicheRate = 840;
                        return;
                    case "HyundaiIonic5-36-20kkm":
                        this.carPreis = 58860;
                        this.carReichweite = 507;
                        this.carMonatlicheRate = 890;
                        return;
                    case "HyundaiIonic5-48-10kkm":
                        this.carPreis = 58860;
                        this.carReichweite = 507;
                        this.carMonatlicheRate = 739;
                        return;
                    case "HyundaiIonic5-48-15kkm":
                        this.carPreis = 58860;
                        this.carReichweite = 507;
                        this.carMonatlicheRate = 785;
                        return;
                    case "HyundaiIonic5-48-20kkm":
                        this.carPreis = 58860;
                        this.carReichweite = 507;
                        this.carMonatlicheRate = 819;
                        return;
                    case "HyundaiIonic6-36-10kkm":
                        this.carPreis = 59510;
                        this.carReichweite = 614;
                        this.carMonatlicheRate = 899;
                        return;
                    case "HyundaiIonic6-36-15kkm":
                        this.carPreis = 59510;
                        this.carReichweite = 614;
                        this.carMonatlicheRate = 939;
                        return;
                    case "HyundaiIonic6-36-20kkm":
                        this.carPreis = 59510;
                        this.carReichweite = 614;
                        this.carMonatlicheRate = 989;
                        return;
                    case "HyundaiIonic6-48-10kkm":
                        this.carPreis = 59510;
                        this.carReichweite = 614;
                        this.carMonatlicheRate = 815;
                        return;
                    case "HyundaiIonic6-48-15kkm":
                        this.carPreis = 59510;
                        this.carReichweite = 614;
                        this.carMonatlicheRate = 859;
                        return;
                    case "HyundaiIonic6-48-20kkm":
                        this.carPreis = 59510;
                        this.carReichweite = 614;
                        this.carMonatlicheRate = 895;
                        return;
                    case "DaciaSpring-36-10kkm":
                        this.carPreis = 23050;
                        this.carReichweite = 230;
                        this.carMonatlicheRate = 520;
                        return;
                    case "DaciaSpring-36-15kkm":
                        this.carPreis = 23050;
                        this.carReichweite = 230;
                        this.carMonatlicheRate = 530;
                        return;
                    case "DaciaSpring-36-20kkm":
                        this.carPreis = 23050;
                        this.carReichweite = 230;
                        this.carMonatlicheRate = 540;
                        return;
                    case "DaciaSpring-48-10kkm":
                        this.carPreis = 23050;
                        this.carReichweite = 230;
                        this.carMonatlicheRate = 460;
                        return;
                    case "DaciaSpring-48-15kkm":
                        this.carPreis = 23050;
                        this.carReichweite = 230;
                        this.carMonatlicheRate = 470;
                        return;
                    case "DaciaSpring-48-20kkm":
                        this.carPreis = 23050;
                        this.carReichweite = 230;
                        this.carMonatlicheRate = 475;
                        return;
                    default:
                        return "Unbekannt";
                }

            },
            calculate() {
                this.grabValues();
                this.getCarInfo();

            }
        },
    });
});
