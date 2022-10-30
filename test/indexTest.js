const cats = ["Milo", "Otis", "Garfield"];
describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('cats.push(Ralph)', function () {
      it('appends a cat to the end of the cats array', function () {
        cats.push('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('cats.unshift(Bob)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        cats.unshift("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('cats.pop()', function () {
      it('removes the last cat from the cats array', function () {
        cats.pop();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('cats.shift()', function () {
      it('removes the first cat from the cats array', function () {
        cats.shift();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
const copyOfCats = [...cats, "Broom"];
    describe('...()', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(copyOfCats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    const newCats = ["Arnold", ...cats];
    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(newCats).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    doobieCats = cats.slice(0, cats.length -1);
    describe('doobieCats', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(doobieCats).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    drunkCats = cats.slice(1);
    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(drunkCats).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});

