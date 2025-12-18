const viaggi = [
    {
        id: 1,
        destinazione: "Roma",
        partenza: "Milano",
        dataInizio: "2026-01-15",
        dataFine: "2026-01-20",
        immagine: "https://www.storiavivaviaggi.it/wp-content/uploads/roma-in-3-giorni.jpg",
        accompagnatori: [
            { id: 1, nome: "Luca", cognome: "Bianchi", telefono: "3331234567", mail: "luca.bianchi@email.com" },
            { id: 2, nome: "Giulia", cognome: "Rossi", telefono: "3339876543", mail: "giulia.rossi@email.com" }
        ],
        viaggiatori: [
            { id: 1, nome: "Marco", cognome: "Verdi", telefono: "3201112233", mail: "marco.verdi@email.com", codiceFiscale: "VRDMRC85A01H501X" },
            { id: 2, nome: "Sara", cognome: "Neri", telefono: "3209988776", mail: "sara.neri@email.com", codiceFiscale: "NRS SRA 90B12L219Y" },
            { id: 3, nome: "Elena", cognome: "Moretti", telefono: "3295566778", mail: "elena.moretti@email.com", codiceFiscale: "MRETNL92C45F205Z" },
            { id: 4, nome: "Davide", cognome: "Conti", telefono: "3296655443", mail: "davide.conti@email.com", codiceFiscale: "CNTDVD88D21L219X" },
            { id: 5, nome: "Francesca", cognome: "Galli", telefono: "3293344556", mail: "francesca.galli@email.com", codiceFiscale: "GLLFNC94E41H501W" },
            { id: 6, nome: "Matteo", cognome: "Ricci", telefono: "3204433221", mail: "matteo.ricci@email.com", codiceFiscale: "RCCMTT87C12H501Y" },
            { id: 7, nome: "Chiara", cognome: "Ferrari", telefono: "3205566778", mail: "chiara.ferrari@email.com", codiceFiscale: "FRRCHR91D45H219X" },
            { id: 8, nome: "Lorenzo", cognome: "Costa", telefono: "3291122334", mail: "lorenzo.costa@email.com", codiceFiscale: "CSTLRN93F21L219Z" },
            { id: 9, nome: "Valentina", cognome: "Bruni", telefono: "3299988776", mail: "valentina.bruni@email.com", codiceFiscale: "BRNVLT95G12H501X" },
            { id: 10, nome: "Giovanni", cognome: "De Luca", telefono: "3207766554", mail: "giovanni.deluca@email.com", codiceFiscale: "DLCGVN89H21L219Y" }
        ]
    },
    {
        id: 2,
        destinazione: "Parigi",
        partenza: "Torino",
        dataInizio: "2026-02-05",
        dataFine: "2026-02-12",
        immagine: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYp3n1HRVupXPxz1v9mZLMKd91eAK6a3aWRXOmD8itQLQ36_FIkAMc-h_j0RDj68nINoMkGK5VBc6Mf02fwDloIjs&s=19",
        accompagnatori: [
            { id: 1, nome: "Alessandro", cognome: "Ferri", telefono: "3341122334", mail: "alessandro.ferri@email.com" },
            { id: 2, nome: "Giulia", cognome: "Rossi", telefono: "3339876543", mail: "giulia.rossi@email.com" }
        ],
        viaggiatori: [
            { id: 1, nome: "Alice", cognome: "Marini", telefono: "3291112233", mail: "alice.marini@email.com", codiceFiscale: "MRNALS92A01H501X" },
            { id: 2, nome: "Fabio", cognome: "Lombardi", telefono: "3292223344", mail: "fabio.lombardi@email.com", codiceFiscale: "LMBFAB88B12H219Y" },
            { id: 3, nome: "Martina", cognome: "Silvestri", telefono: "3293334455", mail: "martina.silvestri@email.com", codiceFiscale: "SLVMRT91C45H501Z" },
            { id: 4, nome: "Riccardo", cognome: "Esposito", telefono: "3294445566", mail: "riccardo.esposito@email.com", codiceFiscale: "ESPRCD89D21L219X" },
            { id: 5, nome: "Giada", cognome: "Romano", telefono: "3295556677", mail: "giada.romano@email.com", codiceFiscale: "RMNGJD94E41H501Y" },
            { id: 6, nome: "Simone", cognome: "Greco", telefono: "3296667788", mail: "simone.greco@email.com", codiceFiscale: "GRCSMN87F12H501Z" },
            { id: 7, nome: "Federica", cognome: "Vitale", telefono: "3297778899", mail: "federica.vitale@email.com", codiceFiscale: "VTLFDR90G21L219X" },
            { id: 8, nome: "Nicola", cognome: "De Santis", telefono: "3298889900", mail: "nicola.desantis@email.com", codiceFiscale: "DSNNCL85H12H501Y" },
            { id: 9, nome: "Elisa", cognome: "Corsi", telefono: "3299990011", mail: "elisa.corsi@email.com", codiceFiscale: "CRSELS92I45H501Z" },
            { id: 10, nome: "Paolo", cognome: "Rinaldi", telefono: "3201112233", mail: "paolo.rinaldi@email.com", codiceFiscale: "RNLPLO89L21L219X" }
        ]
    }
];

export default viaggi;