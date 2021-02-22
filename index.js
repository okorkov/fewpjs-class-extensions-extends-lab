class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    if (this.sides.length === 3) {
      return this.sides[0] + this.sides[1] + this.sides[2];
    } else { 
      return this.sides[0] + this.sides[1] + this.sides[2] + this.sides[3];
    }
  }
}

class Triangle extends Polygon {

  get isValid() {
    let case1 = this.sides[0] + this.sides[1] > this.sides[2];
    let case2 = this.sides[1] + this.sides[2] > this.sides[0];
    let case3 = this.sides[2] + this.sides[0] > this.sides[1];
    if (case1 && case2 && case3) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let case1 = this.sides[0] === this.sides[1];
    let case2 = this.sides[1] === this.sides[2];
    let case3 = this.sides[2] === this.sides[3];
    let case4 = this.sides[3] === this.sides[0];
    if (case1 && case2 && case3 && case4) {
      return true; 
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}