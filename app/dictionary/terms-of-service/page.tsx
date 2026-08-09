import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dictionary Terms of Service - Weitzman Labs",
  description:
    "Dictionary Terms of Service - the rules for using the app, published by Weitzman Labs LLC.",
};

export default function DictionaryTermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Dictionary Terms of Service
          </h1>
          <p className="text-gray-500">
            <strong>Last Updated:</strong> August 9, 2026
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              These terms govern your use of Dictionary, an app developed and
              published by Weitzman Labs LLC. By downloading or using the app,
              you agree to them. If you do not agree, please do not use the app.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* The App */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">The App</h2>
            <p className="text-gray-700">
              Dictionary is a free offline English dictionary for iPhone. There
              are no accounts, no subscriptions, and no in-app purchases. You
              may use it for any lawful purpose.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Where the Definitions Come From */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Where the Definitions Come From
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                Definitions, examples, and synonyms are extracted from{" "}
                <a
                  href="https://en.wiktionary.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  English Wiktionary
                </a>{" "}
                using{" "}
                <a
                  href="https://github.com/tatuylonen/wiktextract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  wiktextract
                </a>{" "}
                by Tatu Ylönen, and are licensed{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  CC BY-SA 4.0
                </a>
                . Word-frequency data comes from{" "}
                <a
                  href="https://github.com/hermitdave/FrequencyWords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  hermitdave/FrequencyWords
                </a>
                . That text stays under CC BY-SA 4.0 wherever it appears,
                including inside this app.
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Accuracy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Accuracy</h2>
            <p className="text-gray-700">
              Wiktionary is community-edited, and the app selects and orders
              senses automatically. Entries may be incomplete, out of date, or
              wrong. Dictionary is a reading aid — do not rely on it for
              medical, legal, financial, or other professional decisions.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Acceptable Use
            </h2>
            <p className="text-gray-700">
              Do not use the app in any way that breaks the law, and do not
              attempt to disrupt it or repackage it as your own product. The
              bundled dictionary text is a separate matter: it is derived from
              Wiktionary and remains yours to use under CC BY-SA 4.0.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Beta Software */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Beta Software
            </h2>
            <p className="text-gray-700">
              Dictionary is currently distributed through Apple TestFlight. Beta
              builds expire, may contain defects, and may change or be withdrawn
              at any time without notice.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Disclaimer of Warranties */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700">
              The app is provided <strong>as is</strong> and{" "}
              <strong>as available</strong>, without warranty of any kind,
              express or implied, including any warranty of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, Weitzman Labs LLC is not
              liable for any indirect, incidental, or consequential damages
              arising from your use of the app. Because nothing is stored on our
              servers, we cannot recover a history or favorites list lost from
              your device.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Termination
            </h2>
            <p className="text-gray-700">
              You may stop using Dictionary at any time by deleting it. We may
              discontinue the app or any of its features at any time.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Governing Law
            </h2>
            <p className="text-gray-700">
              These terms are governed by the laws of the State of New York,
              without regard to its conflict-of-law rules. Any dispute arising
              from them will be brought in the state or federal courts located
              in New York County, New York.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Changes to These Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Changes to These Terms
            </h2>
            <p className="text-gray-700">
              We may update these terms. Changes will be posted on this page
              with an updated date, and continuing to use the app means you
              accept them.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Contact</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Questions about these terms:</strong>{" "}
                <a
                  href="mailto:support@weitzmanlabs.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  support@weitzmanlabs.com
                </a>
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
