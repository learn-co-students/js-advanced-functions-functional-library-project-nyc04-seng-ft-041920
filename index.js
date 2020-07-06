const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let item of collection) {
          callback(item, collection.indexOf(item), collection)
        }
      } else {
        for (let item in collection) {
          callback(collection[item], item, collection)
        }
      }
    return collection
    },

    map: function(collection, callback) {
      let arr = []
      if (Array.isArray(collection)) {
        for (let item of collection) {
          arr.push(callback(item))
        }
      } else {
        for (let item in collection) {
         arr.push(callback(collection[item], item))
        }
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      // initValue — an optionally supplied initial value. If this value is not supplied, the 0th element is used as the initial value.
      if (acc) {
        let total = acc
        for (let item of collection) {
          total += callback(0, item, collection)
        }
      return total
      } else {
        let total = collection[0]
        for (let item of collection.slice(1)) {
          total += callback(0, item, collection.slice(1))
        }
        return total
      }
    },

    find: function(collection, predicate) {
      for (let item of collection) {
        if (predicate(item)) {
          return item
        }
      }
    },

    filter: function(collection, predicate) {
      let filteredArr = []
      for (let item of collection) {
        if (predicate(item)) {
          filteredArr.push(item)
        }
      }
      return filteredArr
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(arr, num) {
      if (num) {
        return arr.slice(0, num)
      } else {
        return arr[0]
      }
    },

    last: function(arr, num) {
      if (num) {
        return arr.slice(arr.length-num)
      } else {
        return arr[arr.length-1]
      }
    },
    compact: function(arr) {
      let newArr = []
      for (let item of arr) {
        if (!!item) {
          newArr.push(item)
        }
      }
      return newArr
    },

    sortBy: function(arr, callback) {
      let newArr = [...arr]
      return newArr.sort((a, b) => {
        return callback(a) - callback(b)
      })
    },

    flatten: function(arr, deep) {
      if(!deep) {
        return arr.flat(Infinity)
      } else {
        return arr.flat(1)
      }
    },
    uniq: function(arr, isSorted, callback) {
      if (!callback) {
        let newArr = [...new Set(arr)]
        return newArr
      } else {
        let iterated = new Set()
        let mostUnique = new Set()
        for (let item of arr) {
          let uniqueNum = callback(item)
          if (!iterated.has(uniqueNum)) {
            iterated.add(uniqueNum)
            mostUnique.add(item)
          }
        }
        return Array.from(mostUnique)
      }
    },

    keys: function(object) {
      let arr = []
      for (let item in object) {
        arr.push(item)
      }
      return arr
    },
    values: function(object) {
      let arr = []
      for (let item in object) {
        arr.push(object[item])
      }
      return arr
    },

    functions: function(object) {
      let arr = new Set()
      for (let item in object) {
        if (typeof object[item] === 'function') {
          arr.add(item)
        }
      }
      return Array.from(arr)
    },
  }
})()

fi.libraryMethod()
// fi.each([1, 2, 3], alert);
