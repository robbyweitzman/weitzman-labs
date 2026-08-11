import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiramisu Privacy Policy - Weitzman Labs",
  description:
    "Tiramisu Privacy Policy - No email, no contacts, no stored location, no tracking. Everything you log in Tiramisu is public, and you can delete all of it yourself in the app.",
};

export default function TiramisuPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Tiramisu Privacy Policy
          </h1>
          <p className="text-gray-500">
            <strong>Last Updated:</strong> August 9, 2026
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Tiramisu (&quot;we,&quot; &quot;our,&quot; or &quot;the
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
              When you sign in and start logging slices, we collect:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>Your Apple account identifier</strong> — provided by
                Sign in with Apple to create and secure your account. We ask
                Apple only for your name, which prefills your display name
                during setup; we never request your email address.
              </li>
              <li>
                <strong>Your username, display name, and city</strong> — all
                chosen by you, and all shown on your profile.
              </li>
              <li>
                <strong>The slices you log</strong> — the restaurant, your gut
                reaction, where the slice lands in your ranking, the date you
                ate it, and any note you write.
              </li>
              <li>
                <strong>Photos you attach</strong> — taken with the camera or
                chosen from your photo library, and uploaded with the entry. We
                access the camera and photo library only when you attach a
                photo, and only the photo you pick.
              </li>
              <li>
                <strong>Your follows, bookmarks, and reactions</strong> — who
                you follow, the places on your want-to-try list, and the emoji
                you leave on other people&apos;s entries.
              </li>
              <li>
                <strong>Restaurant details from Apple Maps</strong> — the name,
                address, city, and coordinates of a place you log, saved so that
                everyone&apos;s entries for the same restaurant line up on one
                map pin.
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
                  We do <strong>not</strong> store your location. Your
                  device&apos;s location is used on the device to center the map
                  and to bias restaurant search toward you; it is never saved or
                  sent to our servers.
                </li>
                <li>
                  We do <strong>not</strong> access your contacts or address
                  book.
                </li>
                <li>
                  We do <strong>not</strong> collect your phone number.
                </li>
                <li>
                  We do <strong>not</strong> send push notifications, and we do
                  not collect a device token.
                </li>
                <li>
                  The app contains <strong>no</strong> analytics, advertising
                  SDKs, or trackers of any kind.
                </li>
                <li>
                  We do <strong>not</strong> sell, rent, or share your
                  information with anyone.
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
              Your information is used solely to operate the app: signing you
              in, keeping your ranked list in order, showing your slices on your
              profile and on the map, letting people find you by username, and
              delivering the people you follow into your feed. Nothing else.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* What Is Public */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              What Is Public
            </h2>
            <p className="text-gray-700 mb-4">
              Tiramisu is a public app. There is no private or followers-only
              mode, and what you post is visible to everyone using it — not only
              to the people who follow you.
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>Your profile</strong> — username, display name, and city
                are visible to everyone, including in user search.
              </li>
              <li>
                <strong>Your entries</strong> — the restaurants you log, your
                rankings, your notes, and the dates are visible to everyone.
              </li>
              <li>
                <strong>Your photos</strong> — stored in a public bucket and
                served from a public web address. Anyone holding that address
                can open the photo, including outside the app.
              </li>
              <li>
                <strong>Your follows, bookmarks, and reactions</strong> —
                visible to everyone.
              </li>
              <li>
                Only you can add, edit, or delete your own content. Please do
                not post anything you would not want to be public.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Third-Party Services
            </h2>
            <p className="text-gray-700">
              Tiramisu&apos;s backend runs on{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                Supabase
              </a>
              , which stores account, entry, and photo data on our behalf.
              Signing in uses Sign in with Apple, and restaurant search and maps
              are powered by Apple Maps; both are governed by{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                Apple&apos;s privacy policy
              </a>
              . Our website is hosted on{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                Vercel
              </a>{" "}
              and counts page views with Vercel Analytics, which uses no cookies
              and does not track you across sites. None of these are used for
              any purpose beyond operating the app.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Data Storage and Security
            </h2>
            <p className="text-gray-700">
              Your data is stored on Supabase under row-level security: every
              record can be created, edited, or deleted only by the signed-in
              account it belongs to. Reads are deliberately open, as described
              above. Photos are stored in a public bucket, in a folder keyed to
              your account, which only you can write to. Your sign-in session is
              held in the device keychain, and all traffic between the app and
              our servers is encrypted in transit.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Data Deletion */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Data Deletion
            </h2>
            <p className="text-gray-700">
              You can permanently delete your account and everything attached to
              it — profile, entries, photos, notes, reactions, follows, and
              bookmarks — from inside the app: open the Profile tab, tap the
              gear icon, then <strong>Delete account</strong>. Deletion is
              immediate and irreversible, and requires no email or request to
              us.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Children&apos;s Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700">
              Tiramisu is not directed at children under 13, and we do not
              knowingly collect information from them. If you believe a child
              has created an account, contact us and we will delete it.
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
                <strong>In short:</strong> Tiramisu is a public app. Your
                account is your Apple sign-in and a username — we never ask
                Apple for your email, we never touch your contacts, and your
                location is never stored. Everything you log is visible to
                everyone, and you can delete all of it yourself, in the app, at
                any time.
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
