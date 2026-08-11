import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dictionary Privacy Policy - Weitzman Labs",
  description:
    "Dictionary Privacy Policy - Dictionary collects nothing. No network requests, no accounts, no analytics. The words you look up never leave your iPhone.",
};

export default function DictionaryPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Dictionary Privacy Policy
          </h1>
          <p className="text-gray-500">
            <strong>Last Updated:</strong> August 9, 2026
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Dictionary (&quot;we,&quot; &quot;our,&quot; or &quot;the
              app&quot;), developed and published by Weitzman Labs LLC, is
              committed to protecting your privacy. This policy explains what
              information the app handles and how.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              None. Dictionary makes no network requests of any kind — the
              entire dictionary is bundled inside the app — so there is no
              server to send anything to and no account to create. Two things
              are stored locally on your iPhone, for the app&apos;s own use:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>Words you look up</strong> — kept as a history list,
                capped at the 200 most recent, so you can find them again.
              </li>
              <li>
                <strong>Words you favorite</strong> — kept as a list you
                control.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Information We DO NOT Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Information We DO NOT Collect
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
                <li>
                  We do <strong>not</strong> make network requests. The app
                  works fully in airplane mode.
                </li>
                <li>
                  We do <strong>not</strong> have accounts, sign-in, or
                  profiles.
                </li>
                <li>
                  We do <strong>not</strong> collect your name, email address,
                  or phone number.
                </li>
                <li>
                  We do <strong>not</strong> collect your location.
                </li>
                <li>
                  We do <strong>not</strong> use analytics, advertising SDKs,
                  crash reporting, or trackers of any kind.
                </li>
                <li>
                  We do <strong>not</strong> access your contacts, photos,
                  microphone, or camera.
                </li>
                <li>
                  We do <strong>not</strong> sell, rent, or share your
                  information — we never receive any.
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* How Your Information Is Used */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              How Your Information Is Used
            </h2>
            <p className="text-gray-700">
              Your history and favorites are used only to draw those two screens
              on your own device. Nothing else.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Third-Party Services
            </h2>
            <p className="text-gray-700">
              None. Dictionary has no backend and no third-party SDKs — no
              package manager is used in the project at all. The definitions
              come from{" "}
              <a
                href="https://en.wiktionary.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                English Wiktionary
              </a>
              , but they are compiled into a file that ships inside the app at
              build time and are read from disk, never fetched.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Data Storage and Security
            </h2>
            <p className="text-gray-700">
              History and favorites live in the app&apos;s private container on
              your iPhone, protected by iOS app sandboxing and device
              encryption. If you have iPhone backups turned on, that container
              is included in your Apple device backup, encrypted under your
              Apple account — we have no access to it and receive no copy.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Data Deletion */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Data Deletion
            </h2>
            <p className="text-gray-700 mb-4">
              You can remove anything at any time, in the app, without
              contacting anyone:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>A single word</strong> — swipe it away in History or
                Favorites.
              </li>
              <li>
                <strong>Your entire history</strong> — tap Clear in the History
                tab.
              </li>
              <li>
                <strong>Everything</strong> — delete the app. Nothing of yours
                is stored anywhere else.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Children&apos;s Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700">
              Dictionary collects no information from anyone, including children
              under 13. Be aware that it is a complete dictionary of English
              drawn from Wiktionary, so it defines vulgar and adult words
              alongside everything else.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy from time to time. Changes will be
              posted on this page with an updated date.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Contact Us
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Questions about this policy or your data:</strong>{" "}
                <a
                  href="mailto:robby@weitzmanlabs.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  robby@weitzmanlabs.com
                </a>
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Summary</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700">
                <strong>In short:</strong> the app collects nothing. It makes no
                network requests at all, there is no account to create, and the
                words you look up and favorite never leave your iPhone.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2026 Weitzman Labs LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
