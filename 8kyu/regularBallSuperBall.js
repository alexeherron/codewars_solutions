//REGULAR BALL SUPER BALL
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

//MY SOLUTION
class Ball{
    constructor(ballType){
        this.ballType = ballType || 'regular'
    }
}
let ball1 = new Ball();
let ball2 = new Ball("super");