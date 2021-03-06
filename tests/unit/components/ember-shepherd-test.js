import Ember from 'ember';
import $ from 'jquery';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('ember-shepherd', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('tour starts', function(assert) {
  assert.expect(3);
  var component = this.subject({
    template: Ember.Handlebars.compile('<div class="test-element"></div>')
  });

  this.render();
  var show = false;
  var steps = [
    {
      id: 'intro',
      options: {
        attachTo: '.test-element bottom',
        builtInButtons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
        ],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        copyStyles: false,
        title: 'Welcome to Ember-Shepherd!',
        text: ['Test text'],
        when: {
          show: function() {
            show = true;
          }.bind(this)
        }
      }
    }
  ];

  Ember.run(function() {
    component.set('steps', steps);
    component.set('start', true);
  });

  assert.equal($('body').hasClass('shepherd-active'), true, 'Body has correct class');
  assert.equal(this.$().children().hasClass('shepherd-enabled'), true, 'Element has correct class');
  assert.equal(show, true, 'Popup is shown');
});

test('attachTo works with object when element is string', function(assert) {
  assert.expect(3);

  var component = this.subject({
    template: Ember.Handlebars.compile('<div class="test-element"></div>')
  });

  this.render();
  var show = false;
  var steps = [
    {
      id: 'intro',
      options: {
        attachTo: {
          element: '.test-element',
          on: 'bottom'
        },
        builtInButtons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
        ],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        copyStyles: false,
        title: 'Welcome to Ember-Shepherd!',
        text: ['Test text'],
        when: {
          show: function() {
            show = true;
          }.bind(this)
        }
      }
    }
  ];

  Ember.run(function() {
    component.set('steps', steps);
    component.set('start', true);
  });

  assert.equal($('body').hasClass('shepherd-active'), true, 'Body has correct class');
  assert.equal(this.$().children().hasClass('shepherd-enabled'), true, 'Element has correct class');
  assert.equal(show, true, 'Popup is shown');
});

test('attachTo works with object when element is jQuery object', function(assert) {
  assert.expect(3);

  var component = this.subject({
    template: Ember.Handlebars.compile('<div class="test-element"></div>')
  });

  this.render();
  const element = $('.test-element');
  var show = false;
  var steps = [
    {
      id: 'intro',
      options: {
        attachTo: {
          element: element,
          on: 'bottom'
        },
        builtInButtons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
        ],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        copyStyles: false,
        title: 'Welcome to Ember-Shepherd!',
        text: ['Test text'],
        when: {
          show: function() {
            show = true;
          }.bind(this)
        }
      }
    }
  ];

  Ember.run(function() {
    component.set('steps', steps);
    component.set('start', true);
  });

  assert.equal($('body').hasClass('shepherd-active'), true, 'Body has correct class');
  assert.equal(this.$().children().hasClass('shepherd-enabled'), true, 'Element has correct class');
  assert.equal(show, true, 'Popup is shown');
});

