import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Snapshot Support | Weitzman Labs",
  description: "Get help with Snapshot - the fast, private OCR text extraction app for macOS. Find answers to common questions and troubleshooting tips.",
};

export default function SnapshotSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001845] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Snapshot Support</h1>
          <p className="text-lg text-gray-300">Having trouble with Snapshot? We're here to help!</p>
        </header>

        {/* Contact Info */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Contact Us</CardTitle>
            <CardDescription className="text-gray-300">
              Get in touch with our support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@weitzmanlabs.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                support@weitzmanlabs.com
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              We typically respond within 24-48 hours.
            </p>
          </CardContent>
        </Card>

        {/* Quick Start Guide */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Quick Start Guide</CardTitle>
            <CardDescription className="text-gray-300">
              Get started with Snapshot in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">How to use Snapshot:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-200">
                <li>Launch Snapshot (it appears in your menu bar)</li>
                <li>Press ⌘⌥⇧4 (Command + Option + Shift + 4)</li>
                <li>Select the area containing text</li>
                <li>Text is automatically copied to your clipboard</li>
                <li>Paste anywhere with ⌘V</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Where to find the app:</h3>
              <p className="text-gray-200">
                Snapshot is a menu bar app. Look for the 🔎 icon in the top-right corner of your
                screen, next to the clock.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Permissions FAQs */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Permissions</CardTitle>
            <CardDescription className="text-gray-300">
              Understanding the permissions Snapshot needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2">
                Why does Snapshot need Screen Recording permission?
              </h3>
              <p className="text-gray-200 mb-3">
                Snapshot needs Screen Recording permission to capture screenshots for text
                extraction. All processing happens on your Mac - no data is sent anywhere.
              </p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">To grant permission:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-200 text-sm">
                  <li>Open <strong>System Settings</strong></li>
                  <li>
                    Go to <strong>Privacy & Security</strong> → <strong>Screen Recording</strong>
                  </li>
                  <li>
                    Enable the checkbox next to <strong>Snapshot</strong>
                  </li>
                  <li>Restart the app</li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">
                Why does Snapshot need Accessibility permission?
              </h3>
              <p className="text-gray-200 mb-3">
                This permission allows Snapshot to register the global hotkey (⌘⌥⇧4). It's only
                used for the hotkey and nothing else.
              </p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">To grant permission:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-200 text-sm">
                  <li>Open <strong>System Settings</strong></li>
                  <li>
                    Go to <strong>Privacy & Security</strong> → <strong>Accessibility</strong>
                  </li>
                  <li>
                    Enable the checkbox next to <strong>Snapshot</strong>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Troubleshooting</CardTitle>
            <CardDescription className="text-gray-300">
              Solutions to common issues
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Hotkey not working</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Check that you've granted Accessibility permission (see above)</li>
                <li>Make sure no other app is using ⌘⌥⇧4</li>
                <li>Try restarting Snapshot from the menu bar icon</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">No text being extracted</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Ensure Screen Recording permission is granted</li>
                <li>Try switching to "Accurate" mode in Settings for better results</li>
                <li>Make sure the screenshot contains clear, readable text</li>
                <li>Snapshot works best with printed text, not handwriting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Slow extraction</h3>
              <p className="text-gray-200 mb-2">Typical extraction times:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li><strong>Fast mode</strong> (default): 0.1-0.3 seconds</li>
                <li><strong>Accurate mode</strong>: 0.5-1 second</li>
              </ul>
              <p className="text-gray-200 mt-2">
                You can change this in Settings (click menu bar icon → Settings).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">App crashes</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Make sure you're running macOS 13.0 (Ventura) or later</li>
                <li>Try reinstalling the app</li>
                <li>
                  If the issue persists, email us at{" "}
                  <a
                    href="mailto:support@weitmanlabs.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    support@weitmanlabs.com
                  </a>{" "}
                  with your macOS version and steps to reproduce
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Section */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Privacy & Security</CardTitle>
            <CardDescription className="text-gray-300">
              Your data stays on your device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Zero data collection</h3>
              <p className="text-gray-200">
                Snapshot collects <strong>zero data</strong>. All text extraction happens on your
                device using Apple's Vision framework. We never see your screenshots or extracted
                text.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">All processing on-device</h3>
              <p className="text-gray-200">
                Snapshot doesn't store your screenshots or extracted text. Everything is processed
                in memory and immediately discarded after copying to your clipboard.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Works offline</h3>
              <p className="text-gray-200">
                Since Snapshot works completely offline and doesn't send any data to external
                servers, it's safe to use in secure or air-gapped environments. No internet
                required.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Technical Details</CardTitle>
            <CardDescription className="text-gray-300">
              System requirements and capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">System Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>
                  <strong>macOS:</strong> 13.0 (Ventura) or later
                </li>
                <li>
                  <strong>Disk Space:</strong> ~10 MB
                </li>
                <li>
                  <strong>Permissions:</strong> Screen Recording (required), Accessibility (optional
                  for hotkey)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Languages Supported</h3>
              <p className="text-gray-200 mb-2">
                Snapshot supports all languages supported by Apple's Vision framework, including:
              </p>
              <p className="text-gray-200">
                English, Spanish, French, German, Italian, Portuguese, Chinese (Simplified &
                Traditional), Japanese, Korean, and many more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">OCR Speed Benchmarks</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>
                  <strong>Fast mode:</strong> 0.1-0.3 seconds per screenshot
                </li>
                <li>
                  <strong>Accurate mode:</strong> 0.5-1 second per screenshot
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Version History */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Version History</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="font-semibold text-white mb-2">Version 1.0.0 (Current)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>Initial release</li>
                <li>Fast OCR text extraction (&lt;1 second)</li>
                <li>Multi-language support</li>
                <li>Customizable keyboard shortcuts</li>
                <li>100% private, on-device processing</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Made with care by Weitzman Labs LLC
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Weitzman Labs LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
