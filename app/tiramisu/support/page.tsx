import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiramisu Support - Weitzman Labs",
  description:
    "Help with Tiramisu — signing in, logging and ranking slices, following friends, photos, deleting your account, and how to reach us.",
};

export default function TiramisuSupportPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Tiramisu Support
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
                Bug reports are welcome and genuinely useful. Telling us what
                you tapped, what you expected, and what happened instead is
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
              Tiramisu is an iPhone app for logging the tiramisu you eat,
              ranking each slice against the ones you have already had, seeing
              them on a map, and following other people doing the same. It is
              free, has no ads or purchases, and is currently a TestFlight beta.
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>Signing in</strong> — the only way in is Sign in with
                Apple, so you need an Apple account. We ask Apple for your name
                to prefill your display name, and never for your email address.
              </li>
              <li>
                <strong>Setting up your profile</strong> — you pick a username,
                a display name, and a city. All three are shown on your profile
                and are visible to everyone.
              </li>
              <li>
                <strong>Usernames</strong> — first come, first served. One
                person, one account.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Logging a Slice */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Logging a Slice
            </h2>
            <p className="text-gray-700 mb-4">
              Each entry you log is made up of:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>The restaurant</strong> — found through Apple Maps
                search, which is biased toward wherever you are so nearby places
                come up first. Everyone&apos;s entries for the same restaurant
                land on the same map pin.
              </li>
              <li>
                <strong>Your gut reaction</strong> — your first take on the
                slice.
              </li>
              <li>
                <strong>Where it ranks</strong> — the slice gets placed against
                the ones you have already logged, which is what builds your
                ordered list.
              </li>
              <li>
                <strong>The date you ate it</strong> — so the entry lands in the
                right place on your timeline.
              </li>
              <li>
                <strong>A note</strong> — optional, and public like everything
                else.
              </li>
              <li>
                <strong>A photo</strong> — optional, taken with the camera or
                picked from your library. The app only ever touches the one
                photo you choose.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can add, edit, or delete your own entries at any time. Nobody
              else can change them.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Following People */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Following People
            </h2>
            <p className="text-gray-700 mb-4">
              Tiramisu is more fun with other people in it. You can:
            </p>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <strong>Find people by username</strong> — every profile is
                searchable.
              </li>
              <li>
                <strong>Follow them</strong> — their slices then show up in your
                feed.
              </li>
              <li>
                <strong>React with emoji</strong> — on anyone&apos;s entry.
              </li>
              <li>
                <strong>Bookmark places</strong> — a want-to-try list of
                restaurants you have seen but not eaten at yet.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Your follows, bookmarks, and reactions are all visible to
              everyone. If your feed looks empty, it usually means you
              aren&apos;t following anyone yet.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Everything Is Public */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Everything You Post Is Public
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                This is the thing most worth knowing before you start. Tiramisu
                has <strong>no private or followers-only mode</strong>. Your
                profile, entries, notes, rankings, reactions, and photos are
                visible to everyone using the app — not only to the people who
                follow you. Photos are served from public web addresses that
                work outside the app, so anyone holding the link can open one.
                Please don&apos;t post anything you would not want public. The{" "}
                <a
                  href="/tiramisu/privacy-policy"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  privacy policy
                </a>{" "}
                has the specifics.
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Your Account and Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Your Account and Your Data
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Deleting your account.</strong> You can do this yourself,
              in the app, without emailing anyone: open the{" "}
              <strong>Profile</strong> tab, tap the gear icon, then{" "}
              <strong>Delete account</strong>. It removes your profile, entries,
              photos, notes, reactions, follows, and bookmarks.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                Deletion is <strong>immediate and irreversible</strong>. There
                is no undo and no grace period, so save any photos you want to
                keep before you tap it.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Your location</strong> is used on the device to center the
              map and to bias restaurant search toward you. It is never saved or
              sent to our servers. The app has no analytics, no ad SDKs, and no
              trackers, and sends no push notifications.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Troubleshooting
            </h2>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              A restaurant doesn&apos;t come up in search
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                Restaurant results come from Apple Maps, so a place missing
                there will be missing here too.
              </li>
              <li>
                Try the shortest distinctive part of the name, without
                punctuation or the neighborhood.
              </li>
              <li>
                If the app can&apos;t see your location, results won&apos;t be
                biased toward you and a nearby spot may rank low. Check location
                access for Tiramisu in the iOS Settings app.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              A photo won&apos;t attach or upload
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                Photos upload over the network, so a weak connection is the
                usual cause. Try again on a better one.
              </li>
              <li>
                Check that Tiramisu has camera and photo access in the iOS
                Settings app.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-black mt-6">
              Something looks wrong or the app misbehaves
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                Make sure you&apos;re on the latest build in TestFlight — beta
                builds move quickly, and the fix may already be out.
              </li>
              <li>
                Force-quit and reopen the app. Your data lives on the server, so
                nothing you have logged is lost by doing this.
              </li>
              <li>
                If it persists, email us with your iPhone model, iOS version,
                and what you did right before it happened.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Reporting */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Reporting Content or Behavior
            </h2>
            <p className="text-gray-700">
              If you see content or behavior that breaks the{" "}
              <a
                href="/tiramisu/terms-of-service"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                terms of service
              </a>{" "}
              — harassment, impersonation, spam, ratings written to promote or
              damage a business — email{" "}
              <a
                href="mailto:robby@weitzmanlabs.com"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                robby@weitzmanlabs.com
              </a>{" "}
              with a link to the profile or entry and we will review it. We can
              remove content and suspend or terminate accounts.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Beta */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              This Is a Beta
            </h2>
            <p className="text-gray-700">
              Tiramisu is in active development. Features may change or
              disappear, bugs are expected, and the service may be interrupted.
              Keep your own copies of any photos that matter to you.
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Legal Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Policies
            </h2>
            <ul className="list-disc list-outside space-y-2 text-gray-700 pl-6">
              <li>
                <a
                  href="/tiramisu/privacy-policy"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Privacy Policy
                </a>{" "}
                — what the app collects, what it doesn&apos;t, and what is
                public.
              </li>
              <li>
                <a
                  href="/tiramisu/terms-of-service"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  Terms of Service
                </a>{" "}
                — the rules for using the app.
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
