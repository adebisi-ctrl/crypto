import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const HARD_CODED_BALANCE = 1234.56;

const DEPOSIT_DETAILS = {
  amount: "50 USDT",
  network: "TRC20",
  address: "TGu1xYexampleDepositAddress9zQvm",
  memo: "Optional memo: 123456",
  note: "Send exactly 50 USDT.",
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState<{ [k: string]: boolean }>({});

  function toggleModal(open?: boolean) {
    setModalOpen((v) => (typeof open === "boolean" ? open : !v));
  }

  async function handleCopy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((c) => ({ ...c, [key]: true }));
      setTimeout(() => setCopied((c) => ({ ...c, [key]: false })), 1800);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied((c) => ({ ...c, [key]: true }));
      setTimeout(() => setCopied((c) => ({ ...c, [key]: false })), 1800);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#070707] to-[#0b1116] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold leading-tight"
        >
          Secure & Modern <span className="text-cyan-400">USDT Wallet</span>
        </motion.h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl">
          Fast, safe, and intuitive crypto transactions with a sleek UI.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0ea5a4] px-8 py-3 text-lg font-semibold text-black shadow-lg"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 py-16">
        <div className="p-6 rounded-xl bg-gradient-to-t from-white/5 to-white/10 text-center">
          <h3 className="text-lg font-semibold">🔒 Secure</h3>
          <p className="text-gray-400 mt-2">
            Industry-grade protection for your funds.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-t from-white/5 to-white/10 text-center">
          <h3 className="text-lg font-semibold">⚡ Fast</h3>
          <p className="text-gray-400 mt-2">
            Instant deposits and withdrawals.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-t from-white/5 to-white/10 text-center">
          <h3 className="text-lg font-semibold">🎨 Customizable</h3>
          <p className="text-gray-400 mt-2">
            Easily tailor the UI for your brand.
          </p>
        </div>
      </section>

      {/* Demo Wallet Section */}
      <section className="flex flex-col items-center py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Demo Wallet Interface
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl rounded-2xl bg-gradient-to-br from-[#071018] to-[#081114] ring-1 ring-white/5 shadow-2xl p-8"
        >
          <header className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">USDT Wallet</h3>
              <p className="text-sm text-gray-400 mt-1">Dark-themed UI demo</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">Network</div>
              <div className="mt-1 inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-green-300">
                {DEPOSIT_DETAILS.network}
              </div>
            </div>
          </header>

          <main className="mt-8">
            <div>
              <div className="text-xs text-gray-300">Available balance</div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-white">
                  {HARD_CODED_BALANCE.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="text-sm text-gray-300">USDT</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleModal(true)}
                className="rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0ea5a4] px-5 py-2 text-sm font-semibold text-black shadow-md"
              >
                Withdraw
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-200"
                onClick={() => alert("This is a top-up feature")}
              >
                Top up
              </motion.button>
            </div>
          </main>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to experience the future of wallets?
        </h2>
        <p className="text-gray-400 mb-6">
          Join thousands of users already enjoying a modern crypto experience.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0ea5a4] px-8 py-3 text-lg font-semibold text-black shadow-lg"
        >
          Create Wallet
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-8 text-xs text-gray-500">
        © {new Date().getFullYear()} USDT Wallet Landing — Built with ❤️ using
        Framer Motion + Tailwind CSS
      </footer>

      {/* Modal (kept as demo) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#081218] to-[#031016] p-6 shadow-2xl ring-1 ring-white/6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">Withdraw</h2>
                  <p className="text-sm text-gray-300 mt-1">
                    To confirm the withdrawal in this demo, please make a
                    deposit of <strong>{DEPOSIT_DETAILS.amount}</strong> to the
                    account below.{" "}
                    <span className="text-amber-300 font-medium">
                      This is only a simulation — do not send real funds.
                    </span>
                  </p>
                </div>
                <button
                  aria-label="Close modal"
                  onClick={() => toggleModal(false)}
                  className="rounded-full bg-white/3 p-2 text-sm text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Amount */}
                <div className="rounded-lg border border-white/6 bg-black/40 p-4">
                  <div className="text-xs text-gray-400">Amount</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">
                        {DEPOSIT_DETAILS.amount}
                      </div>
                      <div className="text-xs text-gray-400">
                        Send exactly this amount
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        handleCopy(DEPOSIT_DETAILS.amount, "amount")
                      }
                      className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium"
                    >
                      {copied["amount"] ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Network */}
                <div className="rounded-lg border border-white/6 bg-black/40 p-4">
                  <div className="text-xs text-gray-400">Network</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-sm font-medium">
                      {DEPOSIT_DETAILS.network}
                    </div>
                    <button
                      onClick={() =>
                        handleCopy(DEPOSIT_DETAILS.network, "network")
                      }
                      className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium"
                    >
                      {copied["network"] ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Address */}
                <div className="sm:col-span-2 rounded-lg border border-white/6 bg-black/40 p-4">
                  <div className="text-xs text-gray-400">Deposit address</div>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <div className="break-all text-sm font-mono">
                      {DEPOSIT_DETAILS.address}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleCopy(DEPOSIT_DETAILS.address, "address")
                        }
                        className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium"
                      >
                        {copied["address"] ? "Copied" : "Copy"}
                      </button>
                      <button
                        onClick={() => alert("QR code feature not implemented")}
                        className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium"
                      >
                        Show QR
                      </button>
                    </div>
                  </div>
                </div>

                {/* Memo */}
                <div className="rounded-lg border border-white/6 bg-black/40 p-4">
                  <div className="text-xs text-gray-400">Memo / Tag</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-sm font-mono">{DEPOSIT_DETAILS.memo}</div>
                    <button
                      onClick={() => handleCopy(DEPOSIT_DETAILS.memo, "memo")}
                      className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium"
                    >
                      {copied["memo"] ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Note */}
                <div className="sm:col-span-2 mt-2 rounded-lg border border-white/6 bg-gradient-to-tr from-black/20 to-white/5 p-4">
                  <div className="text-xs text-gray-400">Important</div>
                  <div className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {DEPOSIT_DETAILS.note}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => toggleModal(false)}
                  className="rounded-md border border-white/6 px-4 py-2 text-sm font-medium text-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    alert("Backend handling not implemented in demo")
                  }
                  className="rounded-md bg-gradient-to-r from-[#06b6d4] to-[#0ea5a4] px-4 py-2 text-sm font-semibold text-black"
                >
                  I made the deposit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
