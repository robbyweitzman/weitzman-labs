import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dictionary Support - Weitzman Labs",
  description:
    "Help with Dictionary — the offline English dictionary for iPhone. Looking up words, history and favorites, where the definitions come from, and how to reach us.",
};

export default function DictionarySupportPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Dictionary Support
          </h1>
          <p className="text-lg text-gray-500">
            Stuck on something, or found a bug? Here&apos;s how the app works
            and how to reach us.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Get in Touch
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:robby@weitzmanlabs.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  robby@weitzmanlabs.com
                </a>
              </p>
              <p className="text-gray-600 text-base mt-2">
                Bug reports are welcome and genuinely useful. The word you
                searched for, what you expected, and what you got instead is
                enough — a screenshot helps too.
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Getting Started */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Getting Started
            </h2>
            <p className="text-gray-700 mb-4">
              Dictionary is a free offline English dictionary for iPhone. There
              is nothing to set up:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>No account, no sign-in</strong> — open the app and
                search.
              </li>
              <li>
                <strong>No internet needed, ever</strong> — the whole dictionary
                is bundled inside the app and read from disk. It works in
                airplane mode, on a plane, or with no signal at all.
              </li>
              <li>
                <strong>Free</strong> — no subscriptions, no in-app purchases,
                no ads.
              </li>
              <li>
                <strong>Currently a TestFlight beta</strong> — see the note at
                the bottom of this page.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* History and Favorites */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              History and Favorites
            </h2>
            <p className="text-gray-700 mb-4">
              The app keeps two lists, both stored only on your iPhone:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>History</strong> — the words you look up, capped at the{" "}
                <strong>200 most recent</strong>. Once you pass 200, the oldest
                entries drop off automatically. That is expected, not a bug.
              </li>
              <li>
                <strong>Favorites</strong> — a list you control, with no cap.
                Anything you want to keep permanently belongs here rather than
                in History.
              </li>
            </ul>
            <p className="text-gray-700 mt-4 mb-4">
              To remove things:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>A single word</strong> — swipe it away in History or
                Favorites.
              </li>
              <li>
                <strong>Your entire history</strong> — tap{" "}
                <strong>Clear</strong> in the History tab.
              </li>
              <li>
                <strong>Everything</strong> — delete the app. Nothing of yours
                is stored anywhere else, so that is the whole cleanup.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Where Definitions Come From */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Where the Definitions Come From
            </h2>
            <p className="text-gray-700 mb-4">
              Definitions, examples, and synonyms are extracted from{" "}
              <a
                href="https://en.wiktionary.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                English Wiktionary
              </a>{" "}
              and compiled into a file that ships inside the app. Two things
              follow from that, and they explain most surprises:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>Wiktionary is community-edited</strong>, and the app
                selects and orders senses automatically. Entries can be
                incomplete, out of date, or simply wrong.
              </li>
              <li>
                <strong>The dictionary is a snapshot</strong>, frozen at the
                moment the app was built. A word added or corrected on
                Wiktionary since then won&apos;t appear until the next release.
              </li>
            </ul>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
              <p className="text-gray-700">
                Dictionary is a reading aid. Please don&apos;t rely on it for
                medical, legal, financial, or other professional decisions.
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Adult Language */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              A Note for Parents
            </h2>
            <p className="text-gray-700">
              Dictionary is a <em>complete</em> dictionary of English drawn from
              Wiktionary, which means it defines vulgar, sexual, and otherwise
              adult words alongside everything else. There is no filtered or
              kid-safe mode. It collects no information from anyone, children
              included, but the content itself is unfiltered — worth knowing
              before handing it to a young reader.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Privacy, Briefly
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                The app collects <strong>nothing</strong>. It makes no network
                requests at all — there is no server to send anything to, no
                account, no analytics, no crash reporting, and no trackers. The
                words you look up and favorite never leave your iPhone. Full
                detail in the{" "}
                <a
                  href="/dictionary/privacy-policy"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Troubleshooting
            </h2>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              A word isn&apos;t in the dictionary
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                Check the spelling, and try the base form — the entry may live
                under the singular or the infinitive rather than the form you
                typed.
              </li>
              <li>
                Very new slang, proper nouns, and specialist jargon are often
                missing, because they are missing from Wiktionary too.
              </li>
              <li>
                If it is a common word that genuinely should be there, email us
                — that is a useful report.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              A definition looks wrong, or the senses are in an odd order
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                Sense ordering is automatic, so the sense you wanted may sit
                below a rarer one. Scroll the full entry before concluding it is
                missing.
              </li>
              <li>
                If the definition itself is wrong, the fix belongs upstream at{" "}
                <a
                  href="https://en.wiktionary.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Wiktionary
                </a>
                , which anyone can edit. It will reach the app in a later build.
              </li>
              <li>
                If the entry is garbled or formatted strangely, that is likely
                ours rather than Wiktionary&apos;s — please send it over.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              The app takes up a lot of storage
            </h3>
            <p className="text-gray-700">
              That is the tradeoff for working offline: the entire dictionary
              ships inside the app rather than being fetched as you go. There is
              no way to shrink it, and it does not grow meaningfully as you use
              the app — your history is capped at 200 words.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              The app won&apos;t open, or TestFlight says the build expired
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                TestFlight builds expire after 90 days. Open TestFlight and
                install the latest build — your history and favorites survive
                the update.
              </li>
              <li>
                If a fresh build still misbehaves, email us with your iPhone
                model and iOS version.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Beta */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              This Is a Beta
            </h2>
            <p className="text-gray-700">
              Dictionary is distributed through Apple TestFlight. Beta builds
              expire, may contain defects, and may change or be withdrawn at any
              time without notice.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Legal Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Policies</h2>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <a
                  href="/dictionary/privacy-policy"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Privacy Policy
                </a>{" "}
                — what the app stores on your device, and what it never
                collects.
              </li>
              <li>
                <a
                  href="/dictionary/terms-of-service"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Terms of Service
                </a>{" "}
                — the rules for using the app, and the licensing of the
                dictionary text.
              </li>
            </ul>
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
