import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hug Privacy Policy - Weitzman Labs",
  description:
    "Hug Privacy Policy - Your account is your Apple sign-in and a username. Hugs are the only data. No contacts, no tracking, no ads.",
};

export default function HugPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Hug Privacy Policy
          </h1>
          <p className="text-gray-500">
            <strong>Last Updated:</strong> July 7, 2026
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Hug (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;), developed and published by
              Weitzman Labs LLC, is committed to protecting your privacy. This policy explains
              what information the app handles and how.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">When you create an account, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Your Apple account identifier</strong> — provided by Sign in with Apple
                to create and secure your account. If you choose Apple&apos;s &quot;Hide My Email,&quot;
                we never see your real email address.
              </li>
              <li>
                <strong>Your chosen username and display name</strong> — visible to people you
                exchange hugs with and to users who find you via search.
              </li>
              <li>
                <strong>Hugs you send and receive</strong> — who, when, and whether you&apos;ve seen
                them. This is the entire content of the app; hugs contain no messages.
              </li>
              <li>
                <strong>A device push token</strong> — if you enable notifications, so we can
                deliver hugs as they arrive.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Information We Do Not Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Information We DO NOT Collect
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  We do <strong>not</strong> access your contacts or address book.
                </li>
                <li>
                  We do <strong>not</strong> collect your phone number.
                </li>
                <li>
                  We do <strong>not</strong> collect your location.
                </li>
                <li>
                  We do <strong>not</strong> use analytics, advertising SDKs, or trackers of any
                  kind.
                </li>
                <li>
                  We do <strong>not</strong> sell, rent, or share your information with anyone.
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
              Your information is used solely to operate the app: signing you in, letting friends
              find you by username, delivering hugs and their notifications, and showing your own
              stats and streaks. Nothing else.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Third-Party Services</h2>
            <p className="text-gray-700">
              Hug&apos;s backend runs on{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                Supabase
              </a>
              , which stores account and hug data on our behalf. Push notifications are delivered
              through Apple&apos;s notification service. Neither is used for any purpose beyond
              operating the app.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Data Storage and Security
            </h2>
            <p className="text-gray-700">
              Your data is stored securely with access controls that limit every record to the
              signed-in user it belongs to. Your profile is visible only to people you&apos;ve
              exchanged hugs with; user search returns only usernames and display names.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Blocking */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Blocking</h2>
            <p className="text-gray-700">
              You can block any user at any time from within the app. Blocked users cannot send
              you hugs, see your profile, or find you in search.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Data Deletion */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Data Deletion</h2>
            <p className="text-gray-700">
              You can permanently delete your account and all associated data (profile, hugs,
              device tokens) at any time from the Profile tab in the app — no email or request
              required. Deletion is immediate and irreversible.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Hug is not directed at children under 13, and we do not knowingly collect
              information from them. If you believe a child has created an account, contact us
              and we will delete it.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this policy from time to time. Changes will be posted on this page
              with an updated date.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">Contact Us</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Questions about this policy or your data:</strong>{" "}
                <a
                  href="mailto:support@weitzmanlabs.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  support@weitzmanlabs.com
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
                <strong>In short:</strong> your account is your Apple sign-in and a username.
                Hugs are the only data. No contacts, no tracking, no ads — and you can delete
                everything yourself, in the app, at any time.
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
