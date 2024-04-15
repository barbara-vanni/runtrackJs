function jourTravaille(jour, mois, annee) {
    let date = new Date(annee, mois - 1, jour);
    let options = { weekday: 'long' };
    let jourSemaine = new Intl.DateTimeFormat('fr-FR', options).format(date);

    let joursFeries = [
        "1-1", "1-5", "8-5", "14-7", "15-8", "1-11", "11-11", "25-12"
    ];

    let jourFerie = joursFeries.find(jourFerie => jourFerie === jour + "-" + mois);

    if (jourFerie) {
        console.log("Non, " + jourSemaine + " " + jour + " " + mois + " " + annee +  " n'est pas un jour travaillé. C'est un jour férié.");
    } else
        if (jourSemaine === "samedi" || jourSemaine === "dimanche") {
            console.log("Non, " + jourSemaine + " " + jour + " " + mois + " " + annee + " n'est pas un jour travaillé. C'est le week-end.");
        } else {
            console.log("Oui, " + jourSemaine + " " + jour + " " + mois + " " + annee +  " est un jour travaillé");
        }
}

jourTravaille(10, 1, 2024);
jourTravaille(25, 12, 2024);
jourTravaille(5, 5, 2024);
jourTravaille(14, 7, 2024);
jourTravaille(16, 8, 2024);