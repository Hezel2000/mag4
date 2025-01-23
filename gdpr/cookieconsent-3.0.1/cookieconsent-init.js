// cookieconsent-init.js

// Wait until the page is fully loaded.
window.addEventListener("load", function () {
  
    // Obtain the Cookie Consent plugin object.
    var cc = initCookieConsent();
  
    // Run the plugin with your configuration.
    cc.run({
      current_lang: 'en',
      autoclear_cookies: true,   // automatically delete cookies of disabled categories
      page_scripts: true,        // automatically enable/disable scripts based on consent
      
      // Optional overrides:
      // mode: 'opt-in',          // 'opt-in' (default) or 'opt-out'
      // delay: 0,                
      // auto_language: null,     
      // autorun: true,
      // force_consent: false,
      // hide_from_bots: true,
      // remove_cookie_tables: false,
      // cookie_name: 'cc_cookie',
      // cookie_expiration: 182,  // in days (default is 182)
      // cookie_necessary_only_expiration: 182,
      // cookie_domain: location.hostname,
      // cookie_path: '/',
      // cookie_same_site: 'Lax',
      // use_rfc_cookie: false,
      // revision: 0,             // increment this if you want to force re-consent
  
      // These lifecycle callbacks are optional:
      onFirstAction: function (user_preferences, cookie) {
        // Called only once, the first time the banner is dismissed.
      },
  
      onAccept: function (cookie) {
        // Called every time a user clicks on "Accept" (or "Save settings" in the preferences modal).
      },
  
      onChange: function (cookie, changed_preferences) {
        // Called when a user changes their preferences via the settings modal.
      },
  
      // Define text and structure for each language.
      languages: {
        'en': {
          consent_modal: {
            title: 'We use cookies!',
            description: 'This website contains third-party content that uses cookies, such as Youtube videos. Some of the cookies are necessary to ensure these elements work properly, while others are used for analytics and tracking—these will only be set with your consent. By interacting, your IP address and browsing data may be shared with providers. <br> <a href="/about.html#privacy">Read the Privacy Policy</a>',
            primary_btn: {
              text: 'Accept necessary',
              role: 'accept_necessary'  // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: 'Accept all',
              role: 'accept_all'        // 'settings' or 'accept_necessary'
            }
          },
          settings_modal: {
            title: 'Cookie preferences',
            save_settings_btn: 'Save settings',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all',
            close_btn_label: 'Close',
            cookie_table_headers: [
              { col1: 'Name' },
              { col2: 'Domain' },
              { col3: 'Expiration' },
              { col4: 'Description' }
            ],
            blocks: [
              {
                title: 'Cookie usage',
                description: 'This site contains third-party content that uses cookies, such as Youtube videos. You can choose for each category to opt in or out. For more details, please read our full <a href="/about.html#privacy" class="cc-link">privacy policy</a>.'
              },
              {
                title: 'Strictly necessary cookies',
                description: 'These cookies are essential for proper functioning of third-party content. Without them, some features would not work properly.',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true // "necessary" cookies cannot be turned off
                }
              },
              {
                title: 'Performance and Analytics cookies',
                description: 'These cookies allow providers of third-party content to remember your preferences for analytics and performance improvements.',
                toggle: {
                  value: 'analytics',  // your custom category name
                  enabled: false,
                  readonly: false
                },
                // cookie_table: [
                //   {
                //     col1: '^_ga',      // match all cookies starting with "_ga"
                //     col2: 'google.com',
                //     col3: '2 years',
                //     col4: 'Used for Google Analytics',
                //     is_regex: true
                //   },
                //   {
                //     col1: '_gid',
                //     col2: 'google.com',
                //     col3: '1 day',
                //     col4: 'Used for Google Analytics',
                //   }
                // ]
              },
              {
                title: 'Advertisement and Targeting cookies',
                description: 'These cookies allow providers to remember how you use this site—pages visited and links clicked. Data is anonymized and cannot identify you personally.',
                toggle: {
                  value: 'targeting',
                  enabled: false,
                  readonly: false
                }
              },
              {
                title: 'More information',
                description: 'For questions related to our cookie policy and your choices, please <a class="cc-link" href="about.html#privacy">contact us</a>.'
              }
            ]
          }
        }
      }
  
    }); // end cc.run
  
  });