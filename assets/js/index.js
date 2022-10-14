let debug = false;

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
    /* Modèle de caméra 
     -- Début
        Nom de la Caméra: {
            ip: "",
            port: ,
            preset: ,
        },
     -- Fin
    */

    /* Exemple pour la caméra Backup
        Backup: {
            ip: "Doe",
            prenom: "John",
        }, <-- virgule obligatoire
    */
    cameras: {
        CameraExemple: {
            ip: "192.168.0.1",
            port: 80,
            preset: 0,
        }
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
            if(debug) console.log(Database.activeMembers);
            for (const member in Database.activeMembers) {
                if (!$(`#camera_table tbody #${Database.activeMembers[member].nom,Database.activeMembers[member].prenom}`).length) {
                    $('#camera_table tbody')
                        .append(`<tr id="${Database.activeMembers[member].nom,Database.activeMembers[member].prenom}">
                                    <td>
                                    <div class="rec"></div>
                                    </td>
                                    <td class="first_name">
                                        ${Database.activeMembers[member].nom}
                                    </td>
                                    <td>${Database.activeMembers[member].prenom}</td>
                                    <td>Caméra 1</td>
                                    <td class="preset"><p>38</p></td>
                                    <td>true / false</td>
                                    <td><button class="edit-button"><i class="icon-edit"></i></button></td>
                                </tr>`);
                }
            }
        };

        this.removeActiveMember = function () {
            delete Database.activeMembers[this.getFullName()];
            if(debug) console.log(Database.activeMembers);
            $(`#camera_table tbody #${this.getName(),this.getFirstName()}`).remove();
        };
    }
}

class Cameras {
    constructor(name, ip, port, preset) {
        // getters
        this.getName = function () {
            return name;
        };
        this.getIp = function () {
            return ip;
        };
        this.getPort = function () {
            return port;
        };
        this.getPreset = function () {
            return preset;
        };
        // setters
        this.setIp = function (newIp) {
            ip = newIp;
        };
        this.setPort = function (newPort) {
            port = newPort;
        };
        this.setPreset = function (newPreset) {
            preset = newPreset;
        };
        // methods
        this.addCamera = function () {
            Database.cameras[this.getName()] = {
                ip: this.getIp(),
                port: this.getPort(),
                preset: this.getPreset(),
            };
            if(debug) console.log(Database.cameras);    
        }
        this.getCameraInfos = function () {
            return `${this.getName()} => ${this.getIp()}:${this.getPort()} with preset ${this.getPreset()}`;
        }
        this.getCameraList = function () {
            return Database.cameras;
        }
    }
}

const member1 = new Members("Foulon", "Damien");
const member2 = new Members("Vavasseur", "Clarisse");
const member3 = new Members("Bascop", "Valentin");

const camera1 = new Cameras("Caméra 1","192.168.0.41", "5500", 9);
const camera2 = new Cameras("Caméra 2","192.18.0.42", "5501", 65);
const camera3 = new Cameras("Caméra 3","192.168.0.43", "5502", 99);

camera1.addCamera();    
camera2.addCamera();
camera3.addCamera();

member1.addActiveMember();
member2.addActiveMember();
member3.addActiveMember();
member2.removeActiveMember();