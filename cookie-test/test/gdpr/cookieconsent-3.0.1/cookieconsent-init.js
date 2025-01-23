// cookieconsent-init.js (a bare-bones v3 config)

window.addEventListener("load", function () {
    var cc = CookieConsent;
    cc.run({
      current_lang: 'en',
      
      // No advanced features—nothing that references "language.translations"
      page_scripts: false,
      autoclear_cookies: false,
  
      // Minimal categories (matching toggles below)
      categories: {
        necessary: { readOnly: true },
      },
  
      languages: {
        en: {
          consent_modal: {
            title: "Test Banner",
            description: "Minimal config to avoid old references",
            primary_btn: {
              text: "Accept necessary",
              role: "accept_necessary"
            },
            secondary_btn: {
              text: "Accept all",
              role: "accept_all"
            }
          },
          settings_modal: {
            title: "Preferences",
            blocks: [
              {
                title: "Necessary Cookies",
                toggle: {
                  value: "necessary",
                  enabled: true,
                  readonly: true
                }
              }
            ]
          }
        }
      }
    });
  });