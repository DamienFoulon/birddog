import Members from "./Members.js";
import Database from "./Database.js";

const member1 = new Members("Foulon", "Damien");
const member2 = new Members("Vavasseur", "Clarisse");
const member3 = new Members("Bascop", "Valentin");

member1.addActiveMember();
member2.addActiveMember();
member3.addActiveMember();
member2.removeActiveMember();