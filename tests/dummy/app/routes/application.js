import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var steps = [
      {
        id: 'intro',
        options: {
          attachTo: '.first-element bottom',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary next-button',
              text: 'Next',
              type: 'next'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          title: 'Welcome to Ember-Shepherd!',
          text: ['Ember-Shepherd is a javascript library for guiding users through your Ember app. ' +
          'It is an Ember addon that wraps <a href="https://github.com/HubSpot/shepherd">Shepherd</a> and ' +
          'extends its functionality. ' +
          'Shepherd uses <a href="http://github.hubspot.com/tether/">Tether</a>, another open source library, to ' +
          'position all of its steps.', 'Tether makes sure your steps never end up off screen or cropped by an ' +
          'overflow. Try resizing your browser to see what we mean.'],
          when: {
            show: function() {
              console.log('show step');
            }.bind(this),
            hide: function() {
              console.log('hide step');
            }.bind(this)
          }
        }
      },
      {
        id: 'installation',
        options: {
          attachTo: '.install-element bottom',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary back-button',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary next-button',
              text: 'Next',
              type: 'next'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          text: ['Installation is simple, if you are using Ember-CLI, just install like any other addon.'],
          when: {
            show: function() {
              console.log('install');
            }.bind(this)
          }
        }
      },
      {
        id: 'usage',
        options: {
          attachTo: '.usage-element bottom',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary back-button',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary next-button',
              text: 'Next',
              type: 'next'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          text: ['To instantiate the tour, just put this code in your application template, wherever you would like.'],
        }
      },
      {
        id: 'modal',
        options: {
          attachTo: '.modal-element top',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary back-button',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary next-button',
              text: 'Next',
              type: 'next'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          text: ['We implemented true modal functionality by disabling clicking of the rest of the page. ' +
          'If you would like to enable modal, simply set modal=true.']
        }
      },
      {
        id: 'copyStyle',
        options: {
          attachTo: '.style-copy-element top',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary back-button',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary next-button',
              text: 'Next',
              type: 'next'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          text: ['When using a modal, most times just setting the z-index of your element to something high will ' +
          'make it highlight. For complicated cases, where this does not work, we implemented a copyStyles option ' +
          'that clones the element and copies its computed styles.']
        }
      },
      {
        id: 'builtInButtons',
        options: {
          attachTo: '.built-in-buttons-element top',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary back-button',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary next-button',
              text: 'Next',
              type: 'next'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          text: ['For the common button types, next, back, cancel, etc, we implemented Ember actions that perform ' +
          'these actions on your tour automatically. To use them, simply include in the builtInButtons array in ' +
          'each step.']
        }
      },
      {
        id: 'disableScroll',
        options: {
          attachTo: '.disable-scroll-element top',
          builtInButtons: [
            {
              classes: 'shepherd-button-secondary cancel-button',
              text: 'Exit',
              type: 'cancel'
            },
            {
              classes: 'shepherd-button-primary back-button',
              text: 'Back',
              type: 'back'
            }
          ],
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          copyStyles: false,
          text: ['When navigating the user through a tour, you may want to disable scrolling, so they cannot mess up ' +
          'your carefully planned out, amazing tour. This is now easily achieved with disableScroll=true. Try ' +
          'scrolling right now, then exit the tour and see that you can again!']
        }
      }
    ];

    controller.set('requiredElements', [
      {
        selector: '.first-element',
        message: 'First element not found',
        title: 'Error'
      },
      {
        selector: '.install-element',
        message: 'Install element not found',
        title: 'Error'
      }
    ]);

    controller.set('steps', steps);

    controller.set('usage', '{{ember-shepherd ' + '\n' +
    'currentPath=currentPath ' + '\n' +
    'defaults=shepherdDefaults ' + '\n' +
    'disableScroll=true ' + '\n' +
    'modal=isModal ' + '\n' +
    'requiredElements=requiredElements ' + '\n' +
    'start=showHelp ' + '\n' +
    'steps=steps}}');

    controller.set('shepherdDefaults', {
      classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
      scrollTo: false,
      showCancelLink: true
    });
  }
});
