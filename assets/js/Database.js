let Database = {
    /* Modèle d'utilisateur 
     -- Début
        Nom: {
            nom: "",
            prenom: "",
        },
     -- Fin
    */

    /* Exemple pour Monsieur John Doe
        Doe: {
            nom: "Doe",
            prenom: "John",
        }, <-- virgule obligatoire
    */
    defaultMembers: {
        Vavasseur: {
            nom: 'Vavasseur',
            prenom: 'Clarisse',
        },
        Bascop: {
            nom: 'Bascop',
            prenom: 'Valentin',
        },
        Foulon: {
            nom: 'Foulon',
            prenom: 'Damien',
        },
    },

    activeMembers: {},
}

export default Database;