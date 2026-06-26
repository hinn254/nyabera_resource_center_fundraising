"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const committeeWins = [
  {
    title: "Know the room before the day arrives",
    copy: "Attendance signups help the committee plan seating, protocol, refreshments, ushers, and the programme with confidence.",
  },
  {
    title: "Turn goodwill into a real pipeline",
    copy: "Pledges, referrals, and gift interests give the team a clear follow-up list instead of relying on memory after the event.",
  },
  {
    title: "Show momentum to partners",
    copy: "A visible register of supporters makes it easier to approach leaders, businesses, churches, alumni, and friends of Awendo.",
  },
  {
    title: "Fund the right things first",
    copy: "When supporters choose how they want to help, the committee can match funds to learning materials, fittings, access, and launch operations.",
  },
];

const impactAreas = [
  "A study and reading room for students after school",
  "Meeting space for local groups, trainings, and mentorship",
  "A practical base for digital literacy and youth opportunity",
  "A dignified venue where Nyabera can host ideas, not just events",
];

const pledgeOptions = [
  {
    amount: "Attend",
    title: "Show up in person",
    copy: "Fill a seat, bring a friend, and help the launch feel like the community moment it is.",
  },
  {
    amount: "Refer",
    title: "Open a door",
    copy: "Introduce the committee to a supporter, business, diaspora group, church, chama, or alumni network.",
  },
  {
    amount: "Pledge",
    title: "Commit a gift",
    copy: "Make a cash or in-kind pledge the committee can follow up and include in the resource plan.",
  },
];

const contributionBands = [
  "I will attend",
  "I can refer supporters",
  "I can pledge cash",
  "I can give materials",
  "I can volunteer",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPath, setSelectedPath] = useState("I will attend");

  const signupMessage = useMemo(() => {
    if (selectedPath.includes("refer")) {
      return "Excellent. The strongest fundraisers are often one warm introduction away.";
    }

    if (selectedPath.includes("pledge") || selectedPath.includes("materials")) {
      return "Beautiful. The committee can follow up with the right details and keep the pledge moving.";
    }

    if (selectedPath.includes("volunteer")) {
      return "Wonderful. A launch day needs reliable hands as much as generous wallets.";
    }

    return "Perfect. A full room tells Nyabera this center already belongs to the people.";
  }, [selectedPath]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#18231d]">
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#18231d] text-white">
        <Image
          src="/nyabera-resource-center-hero.png"
          alt="Community members arriving at a resource center in rural Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,24,18,0.92)_0%,rgba(15,24,18,0.72)_42%,rgba(15,24,18,0.12)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-10 border-b border-white/15 bg-[#121a15]/55 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <a href="#top" className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Nyabera Resource Center
            </a>
            <div className="hidden items-center gap-7 text-sm font-semibold text-white/82 md:flex">
              <a href="#why" className="transition hover:text-white">
                Why it matters
              </a>
              <a href="#committee" className="transition hover:text-white">
                Committee tools
              </a>
              <a href="#pledge" className="transition hover:text-white">
                Give or refer
              </a>
            </div>
            <a
              href="#signup"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f2c14e] px-5 text-sm font-black text-[#18231d] shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:bg-white"
            >
              Register
            </a>
          </nav>
        </div>

        <div id="top" className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-bold text-[#f8df98] backdrop-blur-md">
              Nyabera, Awendo | Guest of Honour: Hon. Eddy Oketch, Migori Senator
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Build the room where Nyabera&apos;s next ideas get to work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              A resource center is not just a building. It is where students find quiet, youth find direction,
              committees meet with purpose, and a community turns ambition into shared infrastructure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#signup"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#f2c14e] px-7 text-base font-black text-[#18231d] shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Sign up to attend
              </a>
              <a
                href="#pledge"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/28 bg-white/10 px-7 text-base font-black text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-[#18231d]"
              >
                Refer, give, or pledge
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 overflow-hidden rounded-[8px] border border-white/15 bg-white/12 text-white backdrop-blur-md">
              <div className="border-r border-white/15 p-4">
                <dt className="text-xs font-bold uppercase text-white/62">Location</dt>
                <dd className="mt-1 text-lg font-black">Nyabera</dd>
              </div>
              <div className="border-r border-white/15 p-4">
                <dt className="text-xs font-bold uppercase text-white/62">Event</dt>
                <dd className="mt-1 text-lg font-black">Fundraiser</dd>
              </div>
              <div className="p-4">
                <dt className="text-xs font-bold uppercase text-white/62">Action</dt>
                <dd className="mt-1 text-lg font-black">Register</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b3432f]">The cause</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#18231d] sm:text-5xl">
              This is the kind of place a community keeps using long after the speeches end.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4e5b52]">
              The Nyabera Resource Center can become a serious home for learning, meetings, mentorship,
              information access, and practical community coordination. Every signup tells the committee who is
              coming. Every referral expands the circle. Every pledge moves the center from intention to use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {impactAreas.map((item) => (
              <article key={item} className="rounded-[8px] border border-[#eadfcb] bg-white p-6 shadow-[0_18px_50px_rgba(38,48,40,0.08)]">
                <div className="mb-8 h-2 w-16 rounded-full bg-[#1c8a68]" />
                <p className="text-lg font-extrabold leading-7 text-[#1d2a22]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="committee" className="bg-[#173a32] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c14e]">Built for follow-through</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              A fundraiser page the committee can actually use.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              The goal is not applause. The goal is a practical list of people to welcome, call, thank, and move
              into action before and after the fundraiser.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {committeeWins.map((item, index) => (
              <article key={item.title} className="rounded-[8px] border border-white/14 bg-white/8 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.12)]">
                <span className="text-sm font-black text-[#f2c14e]">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pledge" className="bg-[#f7f3eb] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1c8a68]">Three ways to help</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#18231d] sm:text-5xl">
                Bring yourself. Bring someone. Bring something.
              </h2>
            </div>
            <a
              href="#signup"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#b3432f] px-6 text-sm font-black text-white shadow-[0_16px_34px_rgba(179,67,47,0.22)] transition hover:-translate-y-0.5 hover:bg-[#173a32]"
            >
              Start with your name
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pledgeOptions.map((option) => (
              <article key={option.amount} className="rounded-[8px] border border-[#e4d8c4] bg-white p-7 shadow-[0_20px_60px_rgba(38,48,40,0.08)]">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b3432f]">{option.amount}</p>
                <h3 className="mt-4 text-2xl font-black text-[#18231d]">{option.title}</h3>
                <p className="mt-4 leading-7 text-[#536157]">{option.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="signup" className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b3432f]">Reserve your place</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#18231d] sm:text-5xl">
              Tell the committee how you want to stand with Nyabera.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4e5b52]">
              Register to attend the fundraiser with Hon. Eddy Oketch, Migori Senator, as Guest of Honour. Add a
              pledge, referral, or volunteer note so the team knows the best next step.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[8px] border border-[#e4d8c4] bg-white p-5 shadow-[0_24px_70px_rgba(38,48,40,0.10)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-[#253329]">Full name</span>
                <input
                  required
                  name="name"
                  className="mt-2 h-13 w-full rounded-[8px] border border-[#d7cbb8] bg-[#fffaf0] px-4 text-base outline-none transition focus:border-[#1c8a68] focus:ring-4 focus:ring-[#1c8a68]/12"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#253329]">Phone or WhatsApp</span>
                <input
                  required
                  name="phone"
                  className="mt-2 h-13 w-full rounded-[8px] border border-[#d7cbb8] bg-[#fffaf0] px-4 text-base outline-none transition focus:border-[#1c8a68] focus:ring-4 focus:ring-[#1c8a68]/12"
                  placeholder="+254 ..."
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#253329]">I want to</span>
                <select
                  name="supportType"
                  value={selectedPath}
                  onChange={(event) => setSelectedPath(event.target.value)}
                  className="mt-2 h-13 w-full rounded-[8px] border border-[#d7cbb8] bg-[#fffaf0] px-4 text-base outline-none transition focus:border-[#1c8a68] focus:ring-4 focus:ring-[#1c8a68]/12"
                >
                  {contributionBands.map((band) => (
                    <option key={band}>{band}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-black text-[#253329]">Number attending</span>
                <input
                  name="attendees"
                  type="number"
                  min="1"
                  max="20"
                  className="mt-2 h-13 w-full rounded-[8px] border border-[#d7cbb8] bg-[#fffaf0] px-4 text-base outline-none transition focus:border-[#1c8a68] focus:ring-4 focus:ring-[#1c8a68]/12"
                  placeholder="1"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-black text-[#253329]">Pledge, referral, or note to the committee</span>
              <textarea
                name="note"
                rows={5}
                className="mt-2 w-full rounded-[8px] border border-[#d7cbb8] bg-[#fffaf0] px-4 py-3 text-base outline-none transition focus:border-[#1c8a68] focus:ring-4 focus:ring-[#1c8a68]/12"
                placeholder="Example: I can pledge KSh..., I can introduce..., I will attend with..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 border-t border-[#eadfcb] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold leading-6 text-[#5c685f]">{signupMessage}</p>
              <button
                type="submit"
                className="inline-flex min-h-13 shrink-0 items-center justify-center rounded-full bg-[#173a32] px-7 text-base font-black text-white shadow-[0_18px_36px_rgba(23,58,50,0.20)] transition hover:-translate-y-0.5 hover:bg-[#b3432f]"
              >
                Submit interest
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-[8px] border border-[#8bc9b5] bg-[#e9f7f1] p-5 text-[#173a32]" role="status">
                <p className="font-black">You are on the list.</p>
                <p className="mt-2 leading-7">
                  Thank you for standing with the Nyabera Resource Center. The committee can now follow up on
                  attendance, referrals, gifts, and pledges from one clear signal.
                </p>
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
