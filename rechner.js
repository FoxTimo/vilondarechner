document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            bruttogehalt: null,
            arbeitsstelle: null,
            steuerklasse: null,
            zusatzbeitrag: null,
            kinder: false,
            kinderfreibetraege: null,
            kirchensteuer: null,
            arbeitsweg: null,
            stromzuschussAG: null,
            fahrzeug: null,
            carPreis: null,
            carReichweite: null,
            carMonatlicheRate: null,
            abzuege: null,
        },
        methods: {
            grabValues() {
                this.bruttogehalt = document.getElementById("bruttogehalt").value;
                this.arbeitsstelle = document.getElementById("arbeitsstelle").value;
                this.steuerklasse = document.getElementById("steuerklasse").value;
                this.zusatzbeitrag = document.getElementById("zusatzbeitrag").value;
                this.kinder = document.getElementById("kinder").checked;
                this.kinderfreibetraege = document.getElementById("kinderfreibetraege").value;
                this.kirchensteuer = document.getElementById("kirchensteuer").value;
                this.arbeitsweg = document.getElementById("arbeitsweg").value;
                this.fahrzeug = document.getElementById("fahrzeug").value;
                this.stromzuschussAG = document.getElementById("stromzuschussAG").value;

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
                console.log("stromzuschussAG: ", this.stromzuschussAG);
            },
            berechneNetto() {
                const grundfreibetrag = 10182;
                let kinderfreibetrag = 0;
          
                let faktor = this.steuerklasse <= 2 ? 1 : 0.5;
          
                let zuVersteuerndesEinkommen = this.bruttogehalt * 12 - grundfreibetrag;
                
                if (this.kinder) {
                    kinderfreibetrag = this.kinderfreibetraege * 0.5 * 235;
                }
          
                let gesamtSteuer = (zuVersteuerndesEinkommen - kinderfreibetrag) * faktor;
          
                let steuer;
                if (this.steuerklasse === 5 || this.steuerklasse === 6) {
                  steuer = gesamtSteuer / 12;
                } else {
                  steuer = gesamtSteuer;
                }
          
                const krankenkasse = this.bruttogehalt * this.zusatzbeitrag / 100;
          
                const kirchensteuerBetrag = this.bruttogehalt * this.kirchensteuer / 100;
    
                this.abzuege = steuer + krankenkasse + kirchensteuerBetrag;

                return this.bruttogehalt - this.abzuege;
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
                let nettoOhneVilonda = this.berechneNetto();

                let vorteilKFZ = this.carPreis/100 * 0.25;
                let vorteilArbeitsweg = vorteilKFZ * this.arbeitsweg * 0.03;
                let vorteilMonat = vorteilKFZ + vorteilArbeitsweg;
                let steuerpflichtigerLohnMitWagen = this.bruttogehalt - this.carMonatlicheRate - vorteilMonat;
                let nettolohnMitVilonda = steuerpflichtigerLohnMitWagen - this.abzuege + this.stromzuschussAG;

                let kostenArbeitnehmer = nettoOhneVilonda - nettolohnMitVilonda;

                console.log("kostenArbeitnehmer: ", kostenArbeitnehmer);
                return kostenArbeitnehmer;
                
            }
        },
    });
});
