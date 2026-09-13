import { articles } from "./site-data";

export type Article = {
  slug: string;
  category: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articleBodies: Article[] = [
  {
    ...articles[0],
    sections: [
      {
        heading: "Cool was always a rental",
        paragraphs: [
          "For decades, brand strategy quietly meant aesthetic arbitrage: borrow the codes of a subculture, wear them for a season, move on before the audience notices. It worked when media was scarce and attention was cheap. Neither is true anymore.",
          "Audiences now parse provenance instantly. They can tell the difference between a brand that contributes to a culture and one that photographs it. The first earns compound interest; the second pays a rising tax in media spend.",
        ],
      },
      {
        heading: "Usefulness is the new charisma",
        paragraphs: [
          "The brands holding attention today share an unglamorous trait: they make something in the customer's life demonstrably better, then talk about it with precision. Patagonia repairs jackets. Liquid Death makes water fun at a party. Neither borrows an aesthetic they didn't earn.",
          "Usefulness doesn't mean utility advertising. It means the brand's presence in culture is a contribution — a tool, a show, a point of view — rather than an interruption wearing a costume.",
        ],
      },
      {
        heading: "A practical test",
        paragraphs: [
          "Before approving any campaign, we ask one question: if we removed the logo, would anyone be glad this exists? If the answer is no, the work is renting attention, not building it.",
          "Cool isn't dead, exactly. It's just that cool was never the asset — it was the dividend. The asset is a brand that does something worth talking about. Build that, and the dividend takes care of itself.",
        ],
      },
    ],
  },
  {
    ...articles[1],
    sections: [
      {
        heading: "Organic reach is engineered, not wished for",
        paragraphs: [
          "Every brand wants earned attention; few build the conditions for it. Organic reach behaves less like luck and more like compound interest — the output of consistent, distinctive signals repeated across every surface a customer touches.",
          "The mistake is treating brand and performance as separate budgets with separate logic. In practice, the strength of your brand signals determines the efficiency of your paid engine.",
        ],
      },
      {
        heading: "Signals before spend",
        paragraphs: [
          "Distinctive assets — a color, a phrase, a sonic mark, a typographic voice — are the raw material of memory. When those assets are consistent, every impression, paid or earned, reinforces the last. When they drift, every dollar starts from zero.",
          "We audit signal consistency before we touch a media plan. Brands that fix recognition first routinely see acquisition costs fall by a third, because platforms reward creative that people actually stop for.",
        ],
      },
      {
        heading: "Closing the loop",
        paragraphs: [
          "The model is simple to state and hard to sustain: distinctive brand signals earn attention; earned attention lowers the cost of paid reach; paid reach funds more distinctive creative. The flywheel only breaks when teams measure the halves separately.",
          "Engineer the signals, connect the measurement, and organic reach stops being a miracle. It becomes a line item you can forecast.",
        ],
      },
    ],
  },
  {
    ...articles[2],
    sections: [
      {
        heading: "The hack era is over",
        paragraphs: [
          "For a decade, growth teams could arbitrage their way to scale: a targeting trick here, a platform loophole there. Privacy changes, signal loss, and auction maturity have closed nearly all of those gaps. What remains is the oldest advantage in marketing — being chosen on purpose.",
          "That is not a romantic argument for brand advertising. It is a commercial argument for a full funnel, run with the same rigor performance teams brought to the bottom.",
        ],
      },
      {
        heading: "Brand spend is efficiency spend",
        paragraphs: [
          "The evidence is consistent across our client work: accounts with strong upper-funnel presence convert cheaper at the bottom. Branded search volume is the single best leading indicator of paid efficiency we track.",
          "This is why we plan brand and performance as one system with one P&L. Splitting them creates two teams each optimizing a fraction of the outcome, and a CFO who trusts neither.",
        ],
      },
      {
        heading: "What a modern full funnel looks like",
        paragraphs: [
          "Distinctive creative that builds memory at the top. Consideration content that answers real questions in the middle. Conversion experiences with radical clarity at the bottom. And measurement that follows a customer through all three instead of crediting the last click.",
          "None of this is new. What is new is that there is no longer an alternative. The enduring funnel is back — because it never actually left.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articleBodies.find((article) => article.slug === slug);
}

export function nextArticle(slug: string) {
  const i = articleBodies.findIndex((article) => article.slug === slug);
  return articleBodies[(i + 1) % articleBodies.length];
}
