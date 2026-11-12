# Family Tree design system

Derived from the OneHope Core Values badges and the Core Values two-pager. Everything on the site is built from these tokens; `styles.css` declares them on `:root`.

## Color

Sampled from the badge PNGs and the two-pager.

| Token | Value | Source | Use |
| --- | --- | --- | --- |
| `--cream` | `#f0decc` | badge field | node fills, panel header, chips |
| `--paper` | `#faf6f0` | two-pager page | page background |
| `--navy` | `#0c1e30` | badge outline and lettering | text, every outline (2–2.5px), trunk bark lines |
| `--navy-2` | `#1d3348` | two-pager body text | secondary text, links; Branch B canopy (`#3f618a` in dark mode) |
| `--flame` | `#de6036` | Spirit-Led, Loving, Collaborative badges | Branch A (Pentecostal heritage), headings accent |
| `--sun` | `#f6902a` | Committed, Generous, Outcome-Based badges | Branch C (outcome-based turn), orange headings on the two-pager |
| `--slate` | `#6690a2` | Pure, Innovative, Entrusting badges | Branch D (catalyst posture) |
| `--peach` | `#ea906c` | badge illustrations | highlights, hover |
| `--sand` | `#fcba7e` | badge illustrations | lighter leaf tint for sun canopy |
| `--bark` | `#b9875e` | illustration browns (Committed, Entrusting) | trunk, branches, roots |
| `--bark-2` | `#8c5a3c` | darker brown | bark lines, root shadows |
| `--soil` | `#e9c9a6` | warm tan | ground band |
| `--taupe` | `#b9a894` | neutral | bare branches, "noted" labels |
| `--rule` | `#d8d2c8` | two-pager hairlines | table rules, dividers |

Branch B (Book of Hope origin) uses `--navy-2` as its color: the book, the founding, the outline color of the whole system.

Dark mode inverts paper and ink (`#101a26` paper, cream text) and lightens flame, sun, and slate by about 10 percent for contrast. Badges are images and do not change; they sit on cream discs in both modes.

## Type

The two-pager embeds Lato Light, Regular, and Black. Badges letter their names in wide-tracked uppercase.

| Role | Face | Size | Tracking | Case |
| --- | --- | --- | --- | --- |
| Page title | Lato Light 300 | 52–72px | 0.18em | UPPERCASE (as "CORE VALUES") |
| Section title | Lato Black 900 | 26px | 0.12em | UPPERCASE |
| Node title | Lato Black 900 | 22px | 0.02em | Title case, colored by branch (as the orange value names) |
| Kicker / label | Lato Regular 400 | 11–12px | 0.14em | UPPERCASE, navy-2 |
| Body | Lato Regular 400 | 17px / 1.6 | normal | sentence |
| Scripture line | Lato Regular 400 italic | 14px | normal | as the "Our Foundation" line |

No serif anywhere. Numbers and note markers in Lato.

## Shape

- **Circles.** The badge is a circle inside a circle inside a circle. Fruit are the badges themselves; branch tips are circular canopies; chips are pills.
- **Outlines.** Every drawn shape carries a navy stroke of 2 to 2.5 units, as the badges do. Nothing floats without an edge.
- **Flat fills with one tint.** A shape has a base color and at most one lighter tint circle inside it (the badges use a subtle gradient; the site uses a second flat tint).
- **Corner radius.** 999px for pills and buttons, 14px for cards.
- **Rules.** 1px `--rule` hairlines between rows, as on the two-pager.
- **Band.** A full-width light band (`--cream` at 55 percent) carries the legend, as the "Our Nine Core Values" strip does.

## The tree

- Ground is a warm tan band with a navy-outlined top edge.
- Roots are tapered brown shapes below ground, two clusters, chips at their tips.
- Trunk is a tapered brown shape with bark lines; a navy disc on it reads "missio Dei".
- Four branches are tapered brown limbs ending in a canopy: a cluster of outlined circles in the branch color with a lighter tint. The branch letter sits in a navy disc at the canopy center.
- Fruit are the badge PNGs, 84 units across, hung from the canopy by a short stem. A dashed navy line ties a fruit to its second branch.
- Bare branches are thin brown twigs above the trunk with no canopy and a taupe tag.

## Motion

Hover lifts a node by 2 units and brightens it 6 percent. Selection draws a 3-unit flame ring. Nothing animates on load.
