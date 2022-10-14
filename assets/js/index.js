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

class Members {
    constructor(nom, prenom) {
        // getters
        this.getName = function () {
            return nom;
        };
        this.getFirstName = function () {
            return prenom;
        };
        // setters
        this.setName = function (newNom) {
            nom = nom;
        };
        this.setFirstName = function (newPrenom) {
            prenom = prenom; S;
        };

        // methods
        this.getFullName = function () {
            return `${this.getFirstName()} ${this.getName()}`;
        };

        this.addActiveMember = function () {
            Database.activeMembers[this.getFullName()] = {
                nom: this.getName(),
                prenom: this.getFirstName(),
            };
            console.log(Database.activeMembers);
            for (const member in Database.activeMembers) {
                if (!$(`#camera_table tbody #${Database.activeMembers[member].nom,Database.activeMembers[member].prenom}`).length) {
                    $('#camera_table tbody')
                        .append(`<tr id="${Database.activeMembers[member].nom,Database.activeMembers[member].prenom}">
                                    <td class="first_name">
                                        <div class="rec"></div>
                                        ${Database.activeMembers[member].nom}
                                    </td>
                                    <td>${Database.activeMembers[member].prenom}</td>
                                    <td>Caméra 1</td>
                                    <td>38</td>
                                    <td>true / false</td>
                                    <td><button class="edit-button"><i class="icon-edit"></i></button></td>
                                </tr>`);
                }
            }
        };

        this.removeActiveMember = function () {
            delete Database.activeMembers[this.getFullName()];
            console.log(Database.activeMembers);
            $(`#camera_table tbody #${this.getName(),this.getFirstName()}`).remove();
        };
    }
}

const member1 = new Members("Foulon", "Damien");
const member2 = new Members("Vavasseur", "Clarisse");
const member3 = new Members("Bascop", "Valentin");

member1.addActiveMember();
member2.addActiveMember();
member3.addActiveMember();
member2.removeActiveMember();