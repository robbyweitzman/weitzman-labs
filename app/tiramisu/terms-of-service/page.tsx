import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiramisu Terms of Service - Weitzman Labs",
  description:
    "Tiramisu Terms of Service - the rules for using the app, published by Weitzman Labs LLC.",
};

export default function TiramisuTermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Tiramisu Terms of Service
          </h1>
          <p className="text-gray-500">
            <strong>Last Updated:</strong> August 9, 2026
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              These terms govern your use of Tiramisu, an app developed and
              published by Weitzman Labs LLC. By downloading or using the app,
              you agree to them. If you do not agree, please do not use the app.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* The App */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">The App</h2>
            <p className="text-gray-700">
              Tiramisu lets you log the tiramisu you eat, rank each slice
              against the ones you have already had, see them on a map, and
              follow other people doing the same. The app is free, contains no
              purchases or ads, and is currently distributed as a TestFlight
              beta.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Eligibility
            </h2>
            <p className="text-gray-700">
              You must be at least 13 years old to use Tiramisu. If you are
              under the age of majority where you live, you may use the app only
              with the involvement of a parent or guardian. You need an Apple
              account, because signing in is handled entirely by Sign in with
              Apple.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Your Account */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Your Account
            </h2>
            <p className="text-gray-700">
              You are responsible for your account and for everything posted
              from it. Usernames are first come, first served; we may reclaim a
              username that impersonates someone else, or that is used to abuse
              or mislead other people. One person, one account.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Everything You Post Is Public */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Everything You Post Is Public
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                Tiramisu has no private mode. Your profile, entries, notes,
                rankings, reactions, and photos are visible to everyone using
                the app, and photos are served from public web addresses that
                work outside it. Please post accordingly — and see the{" "}
                <a
                  href="/tiramisu/privacy-policy"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  privacy policy
                </a>{" "}
                for the specifics.
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Your Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Your Content
            </h2>
            <p className="text-gray-700">
              You keep ownership of the photos, notes, and ratings you post. By
              posting them, you grant Weitzman Labs LLC a non-exclusive,
              worldwide, royalty-free license to store, display, and distribute
              that content within the app and on its share pages, for the sole
              purpose of operating Tiramisu. That license ends when you delete
              the content or your account. You confirm you have the right to
              post what you post.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Acceptable Use
            </h2>
            <p className="text-gray-700 mb-4">
              Use the app for its purpose and leave room for everyone else. Do
              not:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                Post content that is illegal, hateful, harassing, threatening,
                sexually explicit, or that infringes anyone&apos;s rights.
              </li>
              <li>Impersonate another person, or misrepresent who you are.</li>
              <li>
                Post spam, advertising, or ratings written to promote or damage
                a business rather than to describe a slice you actually ate.
              </li>
              <li>
                Scrape, crawl, or access the app or its backend by automated
                means.
              </li>
              <li>
                Attempt to reverse engineer, probe, overload, or otherwise
                disrupt the app or the servers behind it.
              </li>
              <li>
                Upload malware, or anything designed to interfere with other
                people&apos;s use of the app.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Reporting and Enforcement */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Reporting and Enforcement
            </h2>
            <p className="text-gray-700">
              If you see content or behavior that breaks these rules, email us
              at{" "}
              <a
                href="mailto:robby@weitzmanlabs.com"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                robby@weitzmanlabs.com
              </a>{" "}
              and we will review it. We may remove content, or suspend or
              terminate an account, when these terms are violated — with notice
              where practical, and without it where the situation calls for
              that.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Beta Software */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Beta Software
            </h2>
            <p className="text-gray-700">
              Tiramisu is in active development. Features may change or
              disappear, bugs are expected, and the service may be interrupted.
              Keep your own copies of any photos that matter to you.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Termination
            </h2>
            <p className="text-gray-700">
              You can stop using Tiramisu at any time, and you can delete your
              account and all of its content yourself from Settings in the
              Profile tab. We may suspend or terminate accounts that violate
              these terms, or discontinue the app entirely, at our discretion.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Disclaimer of Warranties */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700">
              Tiramisu is provided &quot;as is,&quot; without warranties of any
              kind, express or implied. We do not guarantee that the app will be
              available, accurate, or error free. Restaurant information comes
              from Apple Maps and may be wrong or out of date, and entries,
              rankings, and notes are the opinions of the people who wrote them
              — not ours.
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
              liable for any indirect, incidental, special, or consequential
              damages, or for any loss of data, arising from your use of the
              app. Because Tiramisu is free, our total liability to you is
              limited to the amount you have paid for it.
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
                  href="mailto:robby@weitzmanlabs.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  robby@weitzmanlabs.com
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
