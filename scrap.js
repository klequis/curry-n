function x() {
  if (isPlaceholder(a) && isPlaceholder(b)) {
    return f2
  } else if (isPlaceholder(a)) {
    return _curry1(function (_a) {
      return fn(_a, b)
    })
  } else if (isPlacholder(b)) {
    return _curry1(function (_b) {
      return fn(a, _b)
    })
  } else {
    return fn(a, b)
  }
}

function _curry2(fn) {
  return function f2(a, b) {
    //
    // arguments.length === 0
    if (arguments.length === 0) {
      return f2
    }

    // arguments.length === 1
    if (arguments.length === 1) {
      return _isPlaceholder(a)
        ? f2
        : _curry1(function (_b) {
            return fn(a, _b)
          })
    }
    //
    // arguments.length >= 2
    if (_isPlaceholder(a) && _isPlaceholder(b)) {
      return f2
    }
    if (_isPlaceholder(a)) {
      return _curr1(function (_a) {
        return fn(_a, b)
      })
    }
    if (_isPlaceholder(b)) {
      return _curry1(function (_b) {
        return fn(a, _b)
      })
    }
    // neither a or b are placeholders
    return fn(a, b)
  }
}

/*
    I expect a function that takes two arguments.
    If you send me fewer, here is what I'll do:

    arguments.length === 0
    - -> f2
    
    arguments.length === 1
      && the first is a placeholder
      - -> f2
      Else
      - -> A fn, wrapped in _curry1() that takes 1 argument `_b` and
        - -> fn(a, _b)
    
    arguments.length >== 2
      && both args are placeholders
      -> f2
      && `a` is placeholder







*/
