class Caine {
    constructor(nume, rasa, culoare, anul, pasaport) {
      this.nume = nume;
      this.rasa = rasa;
      this.culoare = culoare;
      this.anul = anul;
      this.pasaport = pasaport;
      this.vaccinuri = [];
    }
  
    descriere() {
      const virsta = 2023 - this.anul;
      const descriereCatel = `Catelul cu numele ${this.nume} este de rasa ${this.rasa}, are culoarea ${this.culoare}, are ${virsta} ani, 
      ${this.pasaport ? "are voie sa iasa din tara" : "nu are sa iasa din tara"} și are ${this.vaccinuri.length} vaccinuri.`;
      console.log(descriereCatel);
    }
  
    adaugaVaccin(vaccin) {
      this.vaccinuri.push(vaccin);
      console.log(`S-a adaugat vaccina ${vaccin.nume} la istoricul medical lui ${this.nume}.`);
    }
  
    istoricVaccinare() {
      if (this.vaccinuri.length === 0) {
        console.log(`Lui ${this.nume} nu s-a facut nici o vaccina.`);
      } else {
        console.log(`Istoricul de vaccine pentru ${this.nume}:`);
        this.vaccinuri.forEach((vaccin) => {
          console.log(`${vaccin.nume}, administrat la data de ${vaccin.data}.`);
        });
      }
    }
  }
  
  class Vaccin {
    constructor(nume, data) {
      this.nume = nume;
      this.data = data;
    }
  }
  
  const rudy = new Caine("Rudy", "Spitz Finlandez", "alb", 2018, true);
  const antirabie = new Vaccin("antirabie", "12.10.2019");
  const hepatita = new Vaccin("hepatita", "15.12.2020");
  rudy.adaugaVaccin(antirabie);
  rudy.adaugaVaccin(hepatita);
  rudy.descriere();
  rudy.istoricVaccinare();
  
  
  const bruno = new Caine("Bruno", "pitbull", "brun", 2020, true);
  const antiViroza = new Vaccin("antiViroza", "10.10.2022");
  bruno.adaugaVaccin(antiViroza);
  bruno.descriere();
  bruno.istoricVaccinare();
  
  
  const beju = new Caine("Beju", "ciao-ciao", "gold", 2016, false);
  const vaccinLeptospiroza = new Vaccin("leptospiroză", "2022-02-25");
  
  beju.descriere();
  beju.istoricVaccinare();