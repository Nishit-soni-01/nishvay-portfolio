"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

type Poem = {
  title: string;
  script: string;
  lines: string;
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const poems: Poem[] = [
  {
    title: "चाँद तुम सा",
    script: "हिंदी",
    lines: `तू चाँद सा या चाँद तुम सा,
सवाल का सिर्फ एक सिलसिला।

मेरी मानो तो तुम ही चाँद हो,
पर साबित कैसे करूँ चाँद तुम सा?

तेरे दीदार का माहौल कहाँ यहाँ,
अब तो चाँद भी लगता है तुम सा।

नूर का हिसाब भला कैसे करूँ?
जब फलक का चाँद भी है तुम सा।

वैसे कभी भरता नहीं है मन मेरा,
इस ज़मीनी चाँद को देखते रहना।

तुम सिर्फ चाँद हो,
या फिर... चाँद ही सिर्फ तुम सा!`,
  },
  {
    title: "कोई नहीं आया",
    script: "हिंदी",
    lines: `ज़ख्म हर सह लिए हर चीज़ के,
लेकिन पूछने कोई न आया।

दूर बहुत तक गया कमाने के लिए,
लेकिन रोटी कोई नहीं खिलाने आया।

यूँ ही सफर का आलम चलता जा रहा,
लेकिन साथी कोई न आया।

आँसू भरी आँखों को लिए चल रहा हूँ,
लेकिन उम्मीद भी देने कोई न आया।

आते-जाते सफर में कई लोग मिले,
लेकिन अपने भी कोई न आया।

ऐसे रास्ते पर मैं क्यों चल रहा हूँ,
लेकिन मुझे तो कोई रोकने भी नहीं आया।

सवाल कई हैं मन में मेरे,
लेकिन सुनने कोई कहाँ आएगा।

मुसाफ़िर का काम है चलते जाना,
उसे सफर कहाँ रोकने आएगा।

ज़िंदगी का सिलसिला यूँ ही चलता जाएगा,
एक दिन चिता जलने भी कोई नहीं आएगा...

— निशित सोनी ✍️`,
  },
  {
    title: "सफलता की तलाश",
    script: "Roman Hindi",
    lines: `Hasar aasu roya safalta panne ke liye
Ek moka khud bhee dena chaiye tha apne ke liye

Ummeed ke rha bhot dekhe
Lekin sirf ummeed ko paane ke liye

Hath bhee aage tak bahut badhiya
Lekin sirf salfta paane ke liye

Har cheez dukh saha jindagi ka
Fir bhee hath nhi ruka kamne ke liye

Reet, samja sab ke dhela dhoya sahab
Sirf kuch paise kamne ke liye

Chaar din ka javani khoo di humne
Sirf kuch izzat kamne ke liye

Jindagi jeene se phele khud ko mrr diya
Kuch Sapna ko paane ke liye

Saflta dhundhte dhundhte.....
Aaage bhot gye jindagi me
Lekin moka dena chaiye shyda khud ko ek bar aur aapne ke liye`,
  },
  {
    title: "एक ख़त और अलविदा",
    script: "हिंदी",
    lines: `Na maine usse sukh diya,
Na maine usse dukh diya,
Phir na jaane usse maine kya diya?

Ek taraf ka shaam diya,
Ek taraf ki mohabbat di,
Usko apna samajh kar sab kuch diya.

Thode din saath chali woh,
Lekin ek din poochh baithi —
"Tumne mujhe yeh sab kyun diya?"

Phir mere mann mein ek sawaal aaya,
Aakhir jise maine sab kuch diya,
Usse yeh bhi nahi pata,
Usse maine kya diya...

Na jaane yeh kab tak chalta,
Isiliye maine ek din,
Usse ek khat diya.

Us khat mein likha tha maine —
"Jo kuch bhi maine tujhe diya,
Shayad tune kabhi liya hi nahi.
Tune mujhe kuch na diya ho,
Lekin maine tujhe woh diya
Jo shayad maine kisi aur ko kabhi nahi diya."

Jaate jaate sirf itna keh gaya:
"Jo ho gaya, so ho gaya —
Zindagi mein ab aage badhna hai.
Isiliye aaj main tujhe
Apni kitaab se bhi aazaad kar diya."

Jahan bhi jaaye, khush rahe tu —
Tujhe yeh dua diya.
Mera rishta yahin tak tha,
Isiliye tujhe aaj
Alvida bhi diya...`,
  },
  {
    title: "आख़िरी झलक",
    script: "हिंदी",
    lines: `उम्र गुज़ार दी हमने, बस एक झलक पाने के लिए,
हर रोज़ तरसते रहे, उनके दीदार पाने के लिए।

आए भी नहीं वो, जिनके लिए तड़पे हम हर रोज़,
जिनकी ख़ातिर छोड़ दी दुनिया, वही बने हमसे ख़ामोश।

इज़्ज़त, शर्म सब लुटा दी, जिनकी चाहत में हमने,
वो हाल तक पूछने न आए, जिनको ख़ुदा माना था हमने।

क्या ग़लती थी हमारी, या वक़्त ही हमारे साथ न था,
शायद मोहब्बत मुक़द्दर में थी, मगर मिलना लिखा न था।

यही सोचकर आख़िर हमने, उनसे मुँह मोड़ लिया,
दिल में था बेहिसाब इश्क़, मगर ख़ुद को जोड़ लिया।

साला, अब मोहब्बत जताएँ भी तो किसके लिए,
जब वो ही न रहे अपने, जिनके लिए जिए।

उम्र गुज़ार दी हमने, बस एक झलक पाने के लिए,
लेकिन सनम न आए, हमारी आख़िरी झलक पाने के लिए।`,
  },
];

const COLLAPSED_HEIGHT = 208;
const fadeMask = "linear-gradient(to bottom, #000 55%, transparent)";

function PoemCard({ poem }: { poem: Poem }) {
  const [open, setOpen] = useState(false);

  const collapsible = poem.lines.split("\n").length > 9;
  const collapsed = collapsible && !open;

  return (
    <SpotlightCard className="p-6 md:p-8">
      <span className="inline-flex rounded-full border border-border bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
        {poem.script}
      </span>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
        {poem.title}
      </h3>

      <motion.div
        initial={false}
        animate={{ height: collapsed ? COLLAPSED_HEIGHT : "auto" }}
        transition={{ duration: 0.6, ease }}
        style={
          collapsed
            ? { maskImage: fadeMask, WebkitMaskImage: fadeMask }
            : undefined
        }
        className="relative mt-6 overflow-hidden"
      >
        <div className="whitespace-pre-line text-[0.95rem] leading-8 text-muted">
          {poem.lines}
        </div>
      </motion.div>

      {collapsible && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {open ? "Show less" : "Read full poem"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </SpotlightCard>
  );
}

export default function Poetry() {
  return (
    <section
      id="poetry"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12"
    >
      <SectionHeading
        eyebrow="A little piece of my soul"
        title="क़लम से — Words from the Heart."
        description="Some feelings are too deep for conversations. I find my way of expressing them through poetry."
      />

      <Stagger className="mt-12 grid items-start gap-4 md:grid-cols-2">
        {poems.map((poem) => (
          <StaggerItem key={poem.title}>
            <PoemCard poem={poem} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-16 text-center">
        <p className="text-lg italic text-muted">
          “हर एहसास को लफ़्ज़ मिल जाएँ, ज़रूरी तो नहीं...”
        </p>
        <p className="mt-3 font-semibold">— Nishit Soni ✍️</p>
      </Reveal>
    </section>
  );
}
