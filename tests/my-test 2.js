class Visitor{
    constructor(visitorId, visitorName, phoneNumber) {
        this.visitorId = visitorId,
        this.visitorName = visitorName,
        this.phoneNumber = phoneNumber
    }
    setVisitor() {
        let book = {
            visitorId: this.visitorId,
            visitorName : this.visitorName,
            phoneNumber : this.phoneNumber
        }
    }
}
var kelley = new Visitor(1, "Collette Kelley", '044-233-22-55');
kelley.setVisitor();
var lennon = new Visitor(2, "Rubby-Rose Lennon", '044-892-45-73');
lennon.setVisitor();
var gibbons = new Visitor(3, "Leanne Gibbons", '044-789-26-43');
gibbons.setVisitor();
var peel = new Visitor(4, "Rumaisa Peel", '044-289-41-56');
peel.setVisitor();
var medrano = new Visitor(5, "Gene Medrano", '044-281-45-27');
medrano.setVisitor();
var tucker = new Visitor(6, "Sheridan Tucker", '044-172-18-94');
tucker.setVisitor();
var mack = new Visitor(7, "Christina Mack", '044-168-45-13');
mack.setVisitor();
var moses = new Visitor(8, "Everley Moses", '044-467-34-38');
moses.setVisitor();
var feeney = new Visitor(9, "Kara Feeney", '044-765-13-45');
feeney.setVisitor();
var rennie = new Visitor(10, "Cameron Rennie", '044-468-35-98');
rennie.setVisitor();
var newVisitor;


var visitorsStart = [kelley, lennon, gibbons, peel, medrano, tucker, mack, moses, feeney, rennie];

module.exports = visitorsStart;