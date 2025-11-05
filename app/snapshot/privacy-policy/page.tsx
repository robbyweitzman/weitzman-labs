import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Snapshot | Weitzman Labs",
  description: "Privacy Policy for Snapshot - Screenshot-to-Text. Zero data collection, fully private, on-device text extraction for macOS.",
};

export default function SnapshotPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001845] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Privacy Policy for Snapshot - Screenshot-to-Text
          </h1>
          <p className="text-gray-400">
            <strong>Last Updated:</strong> January 11, 2025
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Overview</h2>
            <p className="text-gray-200 leading-relaxed">
              Snapshot - Screenshot-to-Text is designed with privacy as a core principle. All text
              extraction happens on your device using Apple's Vision framework. We do not collect,
              store, or transmit any of your data.
            </p>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Data Collection */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Collection</h2>
            <p className="text-gray-200 mb-4">
              <strong>Snapshot does NOT collect any data, including:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
              <li>Screenshots or images you capture</li>
              <li>Text extracted from screenshots</li>
              <li>Usage statistics or analytics</li>
              <li>Personally identifiable information (PII)</li>
              <li>Device information</li>
              <li>Location data</li>
              <li>User preferences or settings (stored locally only)</li>
            </ul>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Data Processing */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Processing</h2>
            <p className="text-gray-200 mb-4">
              All screenshot processing happens <strong>locally on your device</strong> using
              Apple's Vision framework.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">How it works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-200 ml-4">
                <li>You trigger a screenshot capture using the hotkey (⌘⌥⇧4)</li>
                <li>The screenshot is captured to your clipboard</li>
                <li>Snapshot reads the image from your clipboard</li>
                <li>
                  Text extraction occurs <strong>in memory</strong> using Apple's on-device Vision
                  OCR
                </li>
                <li>Extracted text is copied back to your clipboard</li>
                <li>The image data is immediately discarded</li>
              </ol>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Key privacy principles:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>No screenshots are saved or stored by Snapshot</li>
                <li>No extracted text is logged or retained</li>
                <li>All processing happens in memory and is discarded immediately</li>
                <li>No data ever leaves your device</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Data Storage */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Storage</h2>
            <p className="text-gray-200 mb-4">
              <strong>Snapshot does NOT store any user data.</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4 mb-6">
              <li>Screenshots are processed in memory only and never saved to disk</li>
              <li>Extracted text is not retained after being copied to clipboard</li>
              <li>No files are created or saved containing user data</li>
              <li>
                User preferences (e.g., hotkey settings, launch at login) are stored locally using
                macOS UserDefaults
              </li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Local storage only includes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>App preferences (hotkey configuration, notification settings)</li>
                <li>Launch at login preference</li>
                <li>Stored locally on your Mac using macOS standard UserDefaults</li>
                <li>Never synchronized or transmitted</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <p className="text-gray-200 mb-4">
              <strong>Snapshot does NOT use any third-party services</strong>, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4 mb-6">
              <li>No analytics tools or crash reporting</li>
              <li>No advertising networks or trackers</li>
              <li>No cloud services or remote servers</li>
              <li>No data sharing with external parties</li>
              <li>No embedded third-party SDKs</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Apple's Vision framework:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Built into macOS (not a third-party service)</li>
                <li>Processes all text recognition on-device</li>
                <li>No data sent to Apple servers</li>
                <li>Fully offline and private</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Internet Connectivity */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Internet Connectivity</h2>
            <p className="text-gray-200 mb-4">
              <strong>Snapshot does NOT require an internet connection</strong> to function.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4 mb-6">
              <li>All features work completely offline</li>
              <li>No network requests are made during normal operation</li>
              <li>No data is transmitted over the internet</li>
              <li>Works on air-gapped or offline systems</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                The only network access (optional):
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Opening documentation links (when you click help links)</li>
                <li>Opening privacy policy (this page, when you click the link in Settings)</li>
                <li>Checking for App Store updates (handled by macOS, not the app)</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Permissions */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Permissions</h2>
            <p className="text-gray-200 mb-6">
              Snapshot requests the following macOS system permissions:
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Screen Recording Permission (Required)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                  <li>
                    <strong>Purpose:</strong> Required to capture screenshots for text extraction
                  </li>
                  <li>
                    <strong>How it's used:</strong> Only when you trigger the hotkey to capture a
                    screenshot
                  </li>
                  <li>
                    <strong>Data handling:</strong> Screenshot processed in memory, immediately
                    discarded
                  </li>
                  <li>
                    <strong>Managed by:</strong> macOS System Settings &gt; Privacy & Security &gt;
                    Screen Recording
                  </li>
                  <li>
                    <strong>Can be revoked:</strong> Yes, at any time in System Settings
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Accessibility Permission (Optional)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                  <li>
                    <strong>Purpose:</strong> Only required if you want to use the global hotkey
                    feature (⌘⌥⇧4)
                  </li>
                  <li>
                    <strong>How it's used:</strong> Registers the keyboard shortcut to trigger
                    screenshot capture
                  </li>
                  <li>
                    <strong>Data handling:</strong> Only monitors the specific hotkey combination,
                    nothing else
                  </li>
                  <li>
                    <strong>Managed by:</strong> macOS System Settings &gt; Privacy & Security &gt;
                    Accessibility
                  </li>
                  <li>
                    <strong>Can be revoked:</strong> Yes, at any time (app will still work via menu
                    bar)
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Clipboard Access (Automatic)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                  <li>
                    <strong>Purpose:</strong> Read screenshot from clipboard, write extracted text to
                    clipboard
                  </li>
                  <li>
                    <strong>How it's used:</strong> Only when you trigger a capture
                  </li>
                  <li>
                    <strong>Data handling:</strong> Clipboard content is read temporarily and
                    immediately discarded
                  </li>
                  <li>
                    <strong>macOS 15.4+ note:</strong> macOS may show alerts when apps read clipboard
                  </li>
                  <li>
                    <strong>Can be controlled:</strong> Yes, via System Settings &gt; Privacy &
                    Security &gt; Paste from Other Apps
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Notifications (Optional)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                  <li>
                    <strong>Purpose:</strong> Display brief notifications when text extraction
                    completes
                  </li>
                  <li>
                    <strong>How it's used:</strong> Optional success/error notifications
                  </li>
                  <li>
                    <strong>Data handling:</strong> No data included in notifications (just "Text
                    copied" message)
                  </li>
                  <li>
                    <strong>Managed by:</strong> macOS System Settings &gt; Notifications
                  </li>
                  <li>
                    <strong>Can be revoked:</strong> Yes, at any time
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Security</h2>
            <p className="text-gray-200 mb-4">
              <strong>How we protect your privacy:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-200 ml-4">
              <li>
                <strong>On-Device Processing:</strong> All text extraction happens locally using
                Apple's Vision framework
              </li>
              <li>
                <strong>No Data Retention:</strong> Screenshots and text are processed in memory and
                immediately discarded
              </li>
              <li>
                <strong>No Network Access:</strong> App functions completely offline, no data
                transmission
              </li>
              <li>
                <strong>Sandboxed Environment:</strong> App runs in macOS App Sandbox with restricted
                access
              </li>
              <li>
                <strong>Minimal Permissions:</strong> Only requests essential permissions for core
                functionality
              </li>
              <li>
                <strong>No Logging:</strong> Extracted text is never logged, even in debug mode
              </li>
              <li>
                <strong>Memory-Only Processing:</strong> No temporary files created during OCR
              </li>
            </ol>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Your Privacy Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Your Privacy Rights</h2>
            <p className="text-gray-200 mb-4">
              Since Snapshot does not collect any data, there is no data to access, modify, or
              delete.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">You have full control:</h3>
              <ul className="space-y-2 text-gray-200 ml-4">
                <li>✅ All processing happens on your device</li>
                <li>✅ No data collection or storage</li>
                <li>✅ No user accounts or profiles</li>
                <li>✅ No data to request or delete</li>
                <li>✅ Uninstall removes all app data (preferences only)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Revoking permissions:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Screen Recording: System Settings &gt; Privacy & Security &gt; Screen Recording</li>
                <li>Accessibility: System Settings &gt; Privacy & Security &gt; Accessibility</li>
                <li>
                  Clipboard: System Settings &gt; Privacy & Security &gt; Paste from Other Apps
                </li>
                <li>Notifications: System Settings &gt; Notifications</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Children's Privacy</h2>
            <p className="text-gray-200">
              Snapshot does not knowingly collect any information from anyone, including children
              under 13. Since the app collects no data whatsoever, it is safe for users of all ages.
            </p>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-200 mb-4">
              We will update this privacy policy if there are any changes to our data practices. Any
              changes will be reflected in this document and in the app's Settings panel.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">How you'll be notified:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Updated "Last Updated" date at the top of this policy</li>
                <li>Changes noted in app release notes (if significant)</li>
                <li>Updated policy available in app Settings</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Compliance</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                App Store Privacy Nutrition Label:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>Data Collection: <strong>None</strong></li>
                <li>Data Tracking: <strong>None</strong></li>
                <li>Data Linked to You: <strong>None</strong></li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Compliance standards:</h3>
              <ul className="space-y-2 text-gray-200 ml-4">
                <li>✅ GDPR compliant (no data collection)</li>
                <li>✅ CCPA compliant (no data sale or sharing)</li>
                <li>✅ Apple App Store privacy requirements</li>
                <li>✅ macOS App Sandbox security model</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact Information</h2>
            <p className="text-gray-200 mb-4">
              For privacy questions, concerns, or support:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="text-gray-200 mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@weitzmanlabs.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  support@weitzmanlabs.com
                </a>
              </p>
              <p className="text-gray-200 mb-2">
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/robbyweitzman/snapshot"
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/robbyweitzman/snapshot
                </a>{" "}
                (for bug reports and feature requests)
              </p>
              <p className="text-gray-200">
                <strong>Support:</strong> Available through the Mac App Store or via email
              </p>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Technical Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Technical Details</h2>
            <p className="text-gray-200 mb-6">
              For transparency, here's exactly what Snapshot does:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                When you press the hotkey (⌘⌥⇧4):
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-200 ml-4">
                <li>macOS's native screenshot tool launches</li>
                <li>You select an area on screen</li>
                <li>Screenshot is saved to clipboard (by macOS)</li>
                <li>Snapshot detects new image in clipboard</li>
                <li>Snapshot reads the image data from clipboard</li>
                <li>Apple Vision framework processes the image in memory</li>
                <li>Text is extracted and copied to clipboard (replacing image)</li>
                <li>Image data is released from memory</li>
                <li>Brief notification shown (optional)</li>
              </ol>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold mb-3 text-white">Data flow:</h3>
              <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`Screen → macOS Screenshot Tool → Clipboard (image)
       → Snapshot (reads image)
       → Apple Vision (in-memory OCR)
       → Clipboard (text)
       → Memory freed`}
              </pre>
            </div>

            <p className="text-center text-xl font-semibold text-white">
              No data leaves this flow. No data is stored. No data is transmitted.
            </p>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Open Source & Transparency */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Open Source & Transparency
            </h2>
            <p className="text-gray-200 mb-4">
              We believe in privacy through transparency. While Snapshot is not currently open
              source, we are committed to clear documentation of our privacy practices.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">What you can verify:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>All processing is on-device (no network activity)</li>
                <li>No data collection or storage</li>
                <li>Minimal permissions requested</li>
                <li>Standard macOS App Sandbox restrictions apply</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Summary</h2>
            <p className="text-gray-200 mb-4">
              <strong>In plain English:</strong>
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-gray-200">
                <li>✅ Snapshot processes screenshots on your Mac</li>
                <li>✅ No data is collected, stored, or shared</li>
                <li>✅ Everything happens offline on your device</li>
                <li>✅ You can use it with complete privacy</li>
                <li>✅ Uninstalling removes everything (just app preferences)</li>
              </ul>
            </div>
            <p className="text-center text-xl font-semibold text-white">
              We can't access your data because we never have it in the first place.
            </p>
          </section>

          <hr className="border-white/10 my-12" />

          {/* Version Info */}
          <section className="mb-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <p className="text-gray-200 mb-2">
                <strong>Privacy Policy Version:</strong> 1.0
              </p>
              <p className="text-gray-200 mb-2">
                <strong>Effective Date:</strong> November 1, 2025
              </p>
              <p className="text-gray-200">
                <strong>Last Reviewed:</strong> January 11, 2025
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2025 Weitzman Labs LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
