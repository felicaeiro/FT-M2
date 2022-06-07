var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === 'undefined') {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (var i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(
      matchFunc,
      startEl.children[i]
    );
    resultSet = [...resultSet, ...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (/[.]/.test(selector)) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === 'id') {
    matchFunction = function (el) {
      return el.id && '#' + el.id === selector;
    };
  } else if (selectorType === 'class') {
    matchFunction = function (el) {
      if (el.className) {
        for (let i = 0; i < el.classList.length; i++) {
          if ('.' + el.classList[i] === selector) return true;
        }
        return false;
      }
    };
  } else if (selectorType === 'tag.class') {
    matchFunction = function (el) {
      var [tag, clase] = selector.split('.');
      return matchFunctionMaker(tag)(el) && matchFunctionMaker(`.${clase}`)(el);
    };
  } else if (selectorType === 'tag') {
    matchFunction = function (el) {
      return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
