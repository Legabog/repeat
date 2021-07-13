// Arrow vs classic methodds
class Test {
  methodFunction() {
    return this;
  }
  arrowFunction = () => {
    return this;
  };
}

const instance = new Test();

console.log(instance.methodFunction() instanceof Test); // True
console.log(instance.arrowFunction() instanceof Test); // True

const someObject = {
  arrowProperty: instance.arrowFunction,
  methodProperty: instance.methodFunction,
};

console.log(someObject.arrowProperty() instanceof Test); // True
console.log(someObject.methodProperty() instanceof Test); // False

// after Babel
// "use strict";

// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

// function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// var Test =
// /*#__PURE__*/
// function () {
//   function Test() {
//     var _this = this;

//     _classCallCheck(this, Test);

//     _defineProperty(this, "arrowFunction", function () {
//       return _this;
//     });
//   }

//   _createClass(Test, [{
//     key: "methodFunction",
//     value: function methodFunction() {
//       return this;
//     }
//   }]);

//   return Test;
// }();

function Test() {
  var _this = this;
  this.arrowFunction = function () {
    return _this;
  };
}

Test.prototype.methodFunction = function() {
  return this // This context is lost
}


