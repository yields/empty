
describe('empty()', function(){

  var empty = require('empty');

  it('should empty an element', function(){
    var el = create('div');
    var ul = create('ul');
    el.appendChild(create('div'));
    ul.appendChild(create('li'));
    el.appendChild(ul);
    assert(el.innerHTML);
    assert('' == empty(el).innerHTML);
  })

  function create(name){
    return document.createElement(name);
  }

  function assert(expr, ms){
    if (expr) return;
    throw new Error(ms || 'broken');
  }
})
