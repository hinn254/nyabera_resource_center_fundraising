"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const committeeWins = [
  {
    title: "Plan around real programme needs",
    copy: "Attendance, pledges, and referral notes help the committee budget for hall setup, library access, training equipment, cold storage, and packaging tools.",
  },
  {
    title: "Separate visitors from serious supporters",
    copy: "The signup list shows who is attending, who can introduce partners, who can fund, and who can contribute materials or technical expertise.",
  },
  {
    title: "Tell a stronger partnership story",
    copy: "A clear programme makes it easier to approach leaders, agribusiness partners, churches, alumni, diaspora groups, and friends of Awendo.",
  },
  {
    title: "Follow up while interest is warm",
    copy: "The committee leaves the fundraiser with names, phone numbers, pledge intent, and the next action for every promising supporter.",
  },
];

const programmes = [
  {
    label: "01",
    title: "Multi-purpose community hall",
    copy: "A dignified venue for public meetings, trainings, youth forums, cultural gatherings, committee work, and community events.",
  },
  {
    label: "02",
    title: "Virtual library",
    copy: "Digital access to learning materials, research, online applications, mentorship resources, and information services for students and families.",
  },
  {
    label: "03",
    title: "Traditional handicrafts workshop",
    copy: "A workspace for preserving local craft, improving product quality, and turning skill into income for makers and groups.",
  },
  {
    label: "04",
    title: "Tailoring, knitting, and practical training",
    copy: "Hands-on skills for youth, women, and community groups who want marketable training, production discipline, and enterprise confidence.",
  },
  {
    label: "05",
    title: "Solar cold storage and packaging",
    copy: "A renewable-energy link for high-end horticultural crops, helping farmers protect quality, reduce losses, and prepare produce for better markets.",
  },
];

const pledgeOptions = [
  {
    amount: "01",
    title: "Attend and bring energy",
    copy: "Fill the room, bring a friend, and help the fundraiser feel like the launch of a serious community asset.",
  },
  {
    amount: "02",
    title: "Refer a funder or partner",
    copy: "Open a door to an individual, business, farmer group, church, chama, diaspora network, NGO, or technical partner.",
  },
  {
    amount: "03",
    title: "Pledge cash, equipment, or expertise",
    copy: "Support the hall, virtual library, craft workshop, tailoring and knitting training, or solar cold storage and packaging line.",
  },
];

const contributionBands = [
  "I will attend",
  "I can refer supporters",
  "I can pledge cash",
  "I can give equipment or materials",
  "I can offer technical expertise",
  "I can volunteer",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPath, setSelectedPath] = useState("I will attend");

  const signupMessage = useMemo(() => {
    if (selectedPath.includes("refer")) {
      return "Excellent. The strongest fundraisers are often one warm introduction away.";
    }

    if (selectedPath.includes("pledge") || selectedPath.includes("equipment")) {
      return "Beautiful. The committee can follow up with the right details and keep the pledge moving.";
    }

    if (selectedPath.includes("expertise")) {
      return "Strong. Technical support can turn buildings and equipment into working systems.";
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
                Programme
              </a>
              <a href="#committee" className="transition hover:text-white">
                Committee
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
              Build Nyabera&apos;s home for learning, craft, enterprise, and market access.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              A multi-purpose community hall, virtual library, practical skills workshop, and solar-powered
              cold storage hub can turn local talent and high-value horticulture into opportunity that lasts.
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
                <dt className="text-xs font-bold uppercase text-white/62">Focus</dt>
                <dd className="mt-1 text-lg font-black">Skills</dd>
              </div>
              <div className="p-4">
                <dt className="text-xs font-bold uppercase text-white/62">Action</dt>
                <dd className="mt-1 text-lg font-black">Pledge</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b3432f]">The cause</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#18231d] sm:text-5xl">
                One center. Five engines for local progress.
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-[#4e5b52]">
              The Nyabera Resource Center is designed as useful infrastructure: a hall for convening, a virtual
              library for information, workshops for craft and skills, and cold-chain support that helps farmers
              protect quality and reach better markets.
            </p>
          </div>

          <div className="mt-14 border-y border-[#d9ccb6]">
            {programmes.map((item) => (
              <article key={item.title} className="grid gap-5 border-b border-[#d9ccb6] py-8 last:border-b-0 md:grid-cols-[120px_0.8fr_1.2fr] md:items-start">
                <p className="text-sm font-black tracking-[0.18em] text-[#b3432f]">{item.label}</p>
                <h3 className="text-2xl font-black leading-tight text-[#18231d]">{item.title}</h3>
                <p className="max-w-3xl text-base leading-7 text-[#56635b]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="committee" className="bg-[#173a32] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c14e]">Built for follow-through</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              A sharper ask makes the committee&apos;s work easier.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              Supporters can now see exactly what they are helping build: space, access, skills, production,
              storage, packaging, and market readiness.
            </p>
          </div>

          <div className="border-t border-white/18">
            {committeeWins.map((item, index) => (
              <article key={item.title} className="grid gap-4 border-b border-white/18 py-7 sm:grid-cols-[64px_1fr]">
                <span className="text-sm font-black text-[#f2c14e]">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.copy}</p>
                </div>
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
                Bring attendance, influence, or resources.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#536157]">
                The strongest pledges are specific. Help fit out a hall, connect a virtual library, equip a workshop,
                train makers, or support solar cold storage and packaging for horticultural crops.
              </p>
            </div>
            <a
              href="#signup"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#b3432f] px-6 text-sm font-black text-white shadow-[0_16px_34px_rgba(179,67,47,0.22)] transition hover:-translate-y-0.5 hover:bg-[#173a32]"
            >
              Start with your name
            </a>
          </div>

          <div className="mt-12 overflow-hidden rounded-[8px] border border-[#d9ccb6] bg-[#fffaf0]">
            {pledgeOptions.map((option) => (
              <article key={option.amount} className="grid gap-5 border-b border-[#d9ccb6] bg-white/45 p-6 last:border-b-0 sm:grid-cols-[72px_0.8fr_1.25fr] sm:items-center lg:p-8">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b3432f]">{option.amount}</p>
                <h3 className="text-2xl font-black text-[#18231d]">{option.title}</h3>
                <p className="leading-7 text-[#536157]">{option.copy}</p>
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
              Tell the committee where your support fits.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4e5b52]">
              Register to attend the fundraiser with Hon. Eddy Oketch, Migori Senator, as Guest of Honour. Add a
              pledge, referral, or technical note so the team can match your support to the right part of the center.
            </p>
            <div className="mt-8 border-y border-[#d9ccb6] py-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1c8a68]">Useful pledges include</p>
              <p className="mt-3 text-base font-bold leading-7 text-[#18231d]">
                books, computers, internet access, hall furniture, sewing machines, knitting tools, craft equipment,
                cold-room components, packaging materials, solar equipment, training time, and cash.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[8px] border border-[#d9ccb6] bg-[#18231d] p-5 text-white shadow-[0_24px_70px_rgba(38,48,40,0.14)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-white">Full name</span>
                <input
                  required
                  name="name"
                  className="mt-2 h-13 w-full rounded-[8px] border border-white/16 bg-white px-4 text-base text-[#18231d] outline-none transition focus:border-[#f2c14e] focus:ring-4 focus:ring-[#f2c14e]/18"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-white">Phone or WhatsApp</span>
                <input
                  required
                  name="phone"
                  className="mt-2 h-13 w-full rounded-[8px] border border-white/16 bg-white px-4 text-base text-[#18231d] outline-none transition focus:border-[#f2c14e] focus:ring-4 focus:ring-[#f2c14e]/18"
                  placeholder="+254 ..."
                />
              </label>
              <label className="block">
                <span className="text-sm font-black text-white">I want to</span>
                <select
                  name="supportType"
                  value={selectedPath}
                  onChange={(event) => setSelectedPath(event.target.value)}
                  className="mt-2 h-13 w-full rounded-[8px] border border-white/16 bg-white px-4 text-base text-[#18231d] outline-none transition focus:border-[#f2c14e] focus:ring-4 focus:ring-[#f2c14e]/18"
                >
                  {contributionBands.map((band) => (
                    <option key={band}>{band}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-black text-white">Number attending</span>
                <input
                  name="attendees"
                  type="number"
                  min="1"
                  max="20"
                  className="mt-2 h-13 w-full rounded-[8px] border border-white/16 bg-white px-4 text-base text-[#18231d] outline-none transition focus:border-[#f2c14e] focus:ring-4 focus:ring-[#f2c14e]/18"
                  placeholder="1"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-black text-white">Pledge, referral, or note to the committee</span>
              <textarea
                name="note"
                rows={5}
                className="mt-2 w-full rounded-[8px] border border-white/16 bg-white px-4 py-3 text-base text-[#18231d] outline-none transition focus:border-[#f2c14e] focus:ring-4 focus:ring-[#f2c14e]/18"
                placeholder="Example: I can pledge KSh..., donate sewing machines, introduce a buyer, support solar cold storage..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/14 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold leading-6 text-white/72">{signupMessage}</p>
              <button
                type="submit"
                className="inline-flex min-h-13 shrink-0 items-center justify-center rounded-full bg-[#f2c14e] px-7 text-base font-black text-[#18231d] shadow-[0_18px_36px_rgba(0,0,0,0.20)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Submit interest
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-[8px] border border-[#8bc9b5] bg-[#e9f7f1] p-5 text-[#173a32]" role="status">
                <p className="font-black">You are on the list.</p>
                <p className="mt-2 leading-7">
                  Thank you for standing with the Nyabera Resource Center. The committee can now follow up on
                  attendance, referrals, gifts, skills, equipment, and pledges from one clear signal.
                </p>
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
