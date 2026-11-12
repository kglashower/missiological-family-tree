// data.js — the content of the Missiological Family Tree site.
// This file is the paper. The design (index.html, styles.css, script.js) never holds text.
// Conventions:
//   - Every node has: id, type, title, when (one line of dates, may be ""), body (array of sections),
//     fruit (ids of values that grew from it) or roots (ids of nodes it grew from), notes (note numbers used).
//   - Note markers in text are written as [n] and rendered as superscripts linking to NOTES[n-1].
//   - Branch colors: A = ag, B = origin, C = outcome, D = catalyst. Bare branches use "bare".

window.TREE = {

  meta: {
    title: "A Missiological Family Tree",
    subtitle: "How OneHope's Nine Core Values grew from four roots",
    byline: ["Kyle Glashower", "MISS 7013 Missional Theology", "Southeastern University", "Assessment 1.1, Missiological Family Tree", "December 2026"],
    thesis: "OneHope's Nine Core Values are not a culture statement attached to a mission. They are fruit. Four of them came with the organization's founding; five were learned. Each can be traced to the branch it grew from, and the branches that bear no fruit are as telling as the ones that do.",
    howToRead: "Click any part of the tree. Soil is the context OneHope did not choose. Roots are Scripture. The trunk is the missio Dei every branch shares. The four branches are the influences that make OneHope distinct. The nine fruit are the Core Values. The bare branches are what has not grown.",
    legend: [
      { key: "ag", label: "A · Assemblies of God and Pentecostal heritage" },
      { key: "origin", label: "B · The Book of Hope origin" },
      { key: "outcome", label: "C · The outcome-based research turn" },
      { key: "catalyst", label: "D · The catalyst and church-partnership posture" },
      { key: "bare", label: "Bare branches: underdeveloped" }
    ]
  },

  // ---------------------------------------------------------------- SOIL
  soil: [
    {
      id: "soil-activism",
      type: "soil",
      title: "Evangelical activism",
      when: "Since the 1730s",
      body: [
        { h: "Context", p: "Protestants broadly share three emphases. David Bebbington showed that evangelicalism added a fourth around the time of the Enlightenment: activism, the conviction that the gospel must be expressed in effort.[1] It is a historical addition with a date, not a timeless Christian essential. Every mission agency, abolition society, and Bible society of the last two centuries grew in this soil, and so did OneHope." },
        { h: "What it gives the tree", p: "The energy. Nobody in OneHope's story would be there without it. The printed Scripture for every child, the 300-plus programs, the two billion reached: these are activism's fruit." },
        { h: "What it costs", p: "A distinctive is a weighting, and a weighting can be raised past the point where it serves. Activism supplies no internal signal for when to stop. An organization that cannot name this inheritance experiences it as simply what Christians do, and so cannot adjust it. The cost shows up in the Committed value and in the capacity and pace strain that OneHope's own leaders name when asked where the wineskins are cracking." }
      ],
      notes: [1]
    },
    {
      id: "soil-parachurch",
      type: "soil",
      title: "The voluntary-society model",
      when: "Since 1792",
      body: [
        { h: "Context", p: "William Carey's Enquiry and the societies that followed it detached mission from the parish and attached it to the voluntary association: a board, a budget, donors, and a specialized task.[2] Bosch places this in the Enlightenment paradigm of mission, where the agency rather than the church became the sending unit.[3] OneHope is a late and self-aware example of the form." },
        { h: "What it gives the tree", p: "Focus and speed. A society can do one thing (Scripture to children) in 150 countries in a way no denomination's missions board could." },
        { h: "What it costs", p: "The parachurch's chronic theological gap: a rich account of what it does for the church and a thin account of what the church is. Every weakness named under the Collaborative and Entrusting values is a version of this one." }
      ],
      notes: [2, 3]
    },
    {
      id: "soil-wealth",
      type: "soil",
      title: "The Western donor economy",
      when: "Named by Rob Hoskins in 2019",
      body: [
        { h: "Context", p: "Rob Hoskins states the arithmetic plainly: Western evangelicals are about 12 percent of the global evangelical movement and control about 72 percent of its wealth.[4] OneHope's budget, roughly sixty million dollars a year, is raised almost entirely in the West and spent almost entirely elsewhere." },
        { h: "What it gives the tree", p: "The Generous value in its literal form. Scripture has been given free to two billion children because donors in one hemisphere paid for it." },
        { h: "What it costs", p: "Generosity that flows one direction. The soil makes the West the giver and the majority world the receiver by default, which is exactly the arrangement Melvin Hodges' self-support principle was written to end.[5] The arrangement is visible in the funding concentration an operations leader learns to live with: when most of the money comes through one channel, hiring, pace, and risk all bend toward it." }
      ],
      notes: [4, 5]
    }
  ],

  // ---------------------------------------------------------------- ROOTS
  roots: [
    {
      id: "root-worker",
      type: "root",
      title: "The worker's Scriptures",
      when: "The verses printed on the Core Values two-pager",
      body: [
        { h: "What they are", p: "Under each Core Value OneHope prints a foundation text: Luke 11:1–13 and Zechariah 4:6 (Spirit-Led), Luke 10:2 (Committed), Psalm 24:3–6 and Romans 12:1–2 (Pure), 1 John 4:7–12 and John 13:35 (Loving), 1 Corinthians 3:5–15 and Mark 4:1–20 (Outcome-Based), 1 Chronicles 12:32 and Mark 2:21–22 (Innovative), John 17:20–23 and Ephesians 4:4–6 (Collaborative), 2 Corinthians 8:9 and 9:6–8 (Generous), Matthew 25:14–30 and Luke 16:10–12 (Entrusting).[6]" },
        { h: "What they have in common", p: "Almost all are New Testament, and almost all are about the posture of the worker rather than the shape of the mission. Prayer, dependence, purity, love, stewardship, unity, generosity, faithfulness in small things. Read together they are a spirituality of the laborer, and that is consistent with the Pentecostal root: the Spirit-filled worker was the Assemblies of God's first missiological unit." },
        { h: "Strength", p: "The values are preachable. A staff member can hear any one of them taught from its text in a chapel service, which is how most OneHope staff first meet them." },
        { h: "Weakness", p: "None of these texts says what the mission is or who it is for. The mission's own scriptural roots live in a second root system that the two-pager does not print." }
      ],
      fruit: ["spirit-led", "committed", "pure", "loving", "outcome-based", "innovative", "collaborative", "generous", "entrusting"],
      notes: [6]
    },
    {
      id: "root-mission",
      type: "root",
      title: "The mission's Scriptures",
      when: "Tacit in OneHope documents; explicit in Rob Hoskins's teaching",
      body: [
        { h: "Mark 1:15 and Matthew 28:18–20", p: "Rob Hoskins's answer to \"what has not changed.\" Jesus announces the kingdom and calls for repentance and belief, preaches that one message for three years, then hands the disciples their task: make disciples of all nations.[7] For Hoskins this settles what mission is before any discussion of trends." },
        { h: "Luke 4:18–19", p: "The same teaching refuses to split the kingdom message into proclamation and wholeness. The good news is for the poor, the prisoner, the blind, and the oppressed; the kingdom's arrival is abundant life, not only eternal life.[7] This is as close as OneHope comes in its own voice to Bosch's refusal of the evangelism-versus-social-action divide.[8]" },
        { h: "Psalm 78:4–7 and Deuteronomy 6:4–9", p: "Generational transmission: one generation telling the next the praiseworthy deeds of the Lord, parents teaching children at home and on the road. This is the theological ground of \"every child\" and of the three pillars OneHope's own research keeps finding under next-generation faith: Scripture, church, and family.[9]" },
        { h: "Romans 15:20", p: "Paul's ambition to preach where Christ is not yet named. It is the scriptural ground of the line Bob Hoskins cites more than any other, \"Why should anyone hear the gospel twice before everyone has heard it once?\"[10] The sentence is the priority rule behind \"every child\" and the root of the reach story." },
        { h: "Mark 4 and Isaiah 55:10–11", p: "The Word goes out and does not return empty; the seed falls on four soils and bears fruit in only one. The parable of the sower is the text under OneHope's most important sentence about itself: \"it's not the distribution of God's Word that brings life, it's the entrance of God's Word that brings life.\"[7] Christopher Wright makes the same point from the other side: God's Word is the perfect instrument of his mission, and its effectiveness is measured in lives, not copies.[11]" },
        { h: "Matthew 25:14–30", p: "The talents. Stewardship and accountability, the shared root of Outcome-Based and Entrusting: the master expects a return, and the servant who buried what he was given is the one condemned." },
        { h: "Genesis 1:26–28 and Genesis 12:1–3", p: "Image-bearers commissioned to fill and rule; Abraham blessed to be a blessing to all nations. Wright reads the call of Abraham as the launch of God's mission and the church as the people who exist for that blessing.[12] Chad Causey builds OneHope's theology of outcomes on the same two texts, which he calls the first principles: the image of God and the vocation, the just society and the blessing of the nations.[13]" },
        { h: "Strength and weakness", p: "The two root systems are complementary: one forms the worker, the other defines the work. But the second is largely tacit. It lives in Rob Hoskins's talks and in Causey's manuscript, not in any document a new staff member receives. This site is the first place the two are drawn together, which is itself a finding." }
      ],
      fruit: ["committed", "outcome-based", "collaborative", "generous", "entrusting"],
      notes: [7, 8, 9, 10, 11, 12, 13]
    }
  ],

  // ---------------------------------------------------------------- TRUNK
  trunk: {
    id: "trunk",
    type: "trunk",
    title: "The missio Dei and the kingdom",
    when: "Willingen 1952 → Bosch 1991 → Wright 2010",
    body: [
      { h: "Context", p: "The International Missionary Council met at Willingen in 1952 with the Western missionary enterprise in crisis: China had closed, colonialism was ending, and the ecumenical movement was losing its reason to speak of Christ at all. The theological rescue was to ground mission in God rather than in the church: the Father sends the Son, the Father and Son send the Spirit, and the triune God sends the church. Mission is an attribute of God before it is a program of the church.[14] Bosch made the idea the center of Transforming Mission, and Wright gave it its biblical theology: the Bible renders the mission of God through all generations, and the church's mission is participation in it.[15]" },
      { h: "How OneHope holds it", p: "In the practitioner's register. The Hoskins School teaches it as a corrective against a specific misconception: that the church's work is our mission done for God. The reframe is that it originates with God, he does the heavy lifting, and he invites us to participate. Rob Hoskins's version is operational: the task of the Western agency now is to come in and serve what God is already doing.[7]" },
      { h: "Strength", p: "The Spirit-Led value is a direct consequence. If mission is God's, the first strategic question is discernment (where is the Spirit moving?) rather than deployment. That is why OneHope's leaders can say with a straight face that they turn to God first in problems and dedicate plans to God: it is missio Dei agency in the vocabulary of a prayer meeting." },
      { h: "Weakness", p: "OneHope's operative missiology is far more Great Commission–shaped than creation-wide. Bosch's insistence that the sending God is the Creator, so the scope of mission is as wide as creation and salvation is comprehensive, is affirmed in Hoskins's Luke 4 reading but thin in program design.[16] The programs are Scripture programs. Where the kingdom's wholeness appears, it appears as outcomes of Scripture engagement (changed attitudes, behaviors, hope), not as a theology of justice or creation care that would shape what the organization builds. Since this is an area of evangelical consensus rather than OneHope distinctiveness, the site names it and moves on." }
    ],
    fruit: ["spirit-led"],
    notes: [7, 14, 15, 16]
  },

  // ---------------------------------------------------------------- BRANCHES
  branches: [
    {
      id: "branch-a",
      key: "ag",
      type: "branch",
      title: "A · Assemblies of God and Pentecostal heritage",
      when: "AG founded 1914 · indigenous-church policy 1921 · Hodges 1953 · Bob Hoskins preaching from 1943",
      body: [
        { h: "Context", p: "The Assemblies of God organized at Hot Springs in April 1914 and, at its second council that November, committed itself to \"the greatest evangelism the world has ever seen.\"[17] In 1921 it adopted the indigenous church, self-governing, self-supporting, and self-propagating, as official foreign-missions policy, and in 1953 Melvin Hodges wrote the first book of Pentecostal missiology, The Indigenous Church, from his field in El Salvador.[18] Bob Hoskins was a Pentecostal child evangelist from age seven, founded the Assemblies of God in British Guiana as a young man, and served as an AG missionary in the Middle East from 1964.[19] Rob Hoskins is an ordained AG general-appointed missionary, and the AG was OneHope's denominational covering into the 2000s.[20] Southeastern University, where the Hoskins School of Mission now sits, is an AG school." },
        { h: "What it contributed", p: "Spirit-dependence as the first move, and prayer as strategy rather than preface. Eschatological urgency: the harvest is ready and the time is short. The indigenous-church principle, which decades later matured into the catalyst posture. And a temperament Andrea Lathrop names from the Pentecostal historians: early Pentecostalism at its best was a synergy of primitivism and pragmatism, people obsessed with and dependent on God who also built buildings, raised money, and organized, without feeling forced to choose.[21] OneHope is that synergy as an organization. It prays for workers and it runs 59 research projects in a year." },
        { h: "Strength", p: "This branch is what keeps the Outcome-Based value from becoming managerialism. A ministry that begins its planning in prayer and expects God to change the plan cannot fully reduce its work to a logic model. It also gives the Innovative value a theological warrant: the Spirit makes the same wine new in every generation, so method change is faithfulness, not accommodation." },
        { h: "Weakness", p: "Three. First, urgency plus activism with no internal stop signal: rest reads as disobedience, and the organization's own leaders name capacity, margin, and pace as a crack in the wineskin. Second, holiness framed individually. \"Clean hands and a pure heart\" is in the OneHope prayer, and the Pure value is about personal transparency and stewardship; there is almost no structural or justice register to Pentecostal holiness as OneHope has received it. Third, an apocalyptic eschatology inherited from Bob Hoskins's Beirut years, in which the sudden collapse of a prosperous city is read as a preview of Revelation 18.[22] That reading fuels urgency, but it can tip toward withdrawal rather than the new-creation hope Wright and Causey both argue for.[23]" },
        { h: "A silence worth noting", p: "Neither Bob nor Rob Hoskins cites Hodges in print, even though Hodges wrote from El Salvador, the same soil as OneHope's first distribution. The indigenous-church line is inherited practice, not acknowledged lineage. An organization that does not know where a principle came from cannot defend it when it is under pressure, and the catalyst posture is under pressure every time a donor asks why OneHope does not run its own programs." }
      ],
      fruit: ["spirit-led", "committed", "pure", "innovative"],
      notes: [17, 18, 19, 20, 21, 22, 23]
    },
    {
      id: "branch-b",
      key: "origin",
      type: "branch",
      title: "B · The Book of Hope origin",
      when: "Beirut 1965–76 · Life Publishers 1980 · the vision 1987 · El Salvador 1987 · rename 2009",
      body: [
        { h: "Context", p: "Bob and Hazel Hoskins lived in Beirut from 1965, running a literature ministry and a correspondence school with some 400,000 enrolled, until a bomb destroyed their apartment and car in 1976 and the family left Lebanon.[19] In 1980 Bob became president of Life Publishers, the AG's Spanish-language literature house in Miami. In 1987, during prayer and fasting, he received the vision that became the ministry: a generation under attack, and God's Word to the children and youth of the world through its leaders.[24] He wrote to leaders across Latin America. El Salvador's minister of education answered, inviting Scripture for every schoolchild, and El Libro de Vida, a chronological harmony of the Gospels for children, went to roughly 968,000 of them, distributed village by village by Assemblies of God churches mobilized by John Bueno.[25] Book of Hope launched under Life Publishers, became a separate ministry when the AG sold the publisher in 1996, and was renamed OneHope in 2009.[26]" },
        { h: "What it contributed", p: "\"God's Word. Every child.\" as the unchanging wine, with the line Bob cites most often as its logic: \"Why should anyone hear the gospel twice before everyone has heard it once?\"[10] The open-handed model: Scripture given free, funded by donors who will never meet the child. A kinship culture: the organization was a family before it was a staff, and \"brothers and sisters in Christ\" in the Loving value is a description, not an aspiration. And the prayer line that became the Committed value's text, \"Lord of the harvest, send laborers.\"" },
        { h: "Strength", p: "Clarity. Rob Hoskins opens his account of twenty-first-century mission with Stephen Neill's warning that when everything is mission, nothing is mission, and the founding vision is why OneHope can take that warning seriously.[27] An organization that knows it exists to put God's Word in front of children has an immune system against drift. The same instinct, made into alliance policy, is why the Close the Bible Gap coalition OneHope helps lead restricts its funding to Scripture: once broader Christian content enters, complexity, disagreement, and drift rise quickly." },
        { h: "Weakness", p: "The origin story is a reach story. It is told in copies, countries, and children counted, and that language still lives in donor materials beside an outcome theology that moved past it fifteen years ago. The two billionth child was celebrated in 2023 in El Salvador, which is a beautiful return to the beginning and also a count.[28] Generosity runs one direction, West to South, which Hodges's self-support principle would have questioned. And the founding model is Western, printed, and school-based. Urban youth, digital natives, and children in displacement arrived later as adaptations to a model built for a classroom and a book." }
      ],
      fruit: ["committed", "loving", "generous"],
      notes: [10, 19, 24, 25, 26, 27, 28]
    },
    {
      id: "branch-c",
      key: "outcome",
      type: "branch",
      title: "C · The outcome-based research turn",
      when: "Rob Hoskins president 2004 · Eswatini 2006 · youth study 2007–11 · OBM named 2014 · Hoskins School 2021",
      body: [
        { h: "Context", p: "Rob Hoskins became president in 2004. In 2006, in Swaziland (now Eswatini), the organization met a nation that was overwhelmingly Christian on paper, had received Book of Hope in its schools, and had the highest HIV rate in the world; a newspaper story about teachers abusing students made the contradiction unbearable. OneHope shut the program down to find out what was happening.[29] It knew what it meant by God's Word and by every child; it did not know what it meant by \"affect destiny.\" The answer became a research arm, a global study of 152,000 teenagers in 44 countries between 2007 and 2011, and a methodology Hoskins named Outcome Based Ministry: define the outcome, research and customize, test, measure.[30] The 2009 rename from Book of Hope to OneHope marked the move from a product to a purpose. Hoskins's 2019 staff address framed it as the third of three shifts from twentieth- to twenty-first-century mission: from outputs to outcomes.[7] The Hoskins School of Mission, launched at Southeastern in 2021, is the research turn becoming an academic program." },
        { h: "What it contributed", p: "A chain of questions that replaced a count: if we handed them a book, did they want it? Did they read it? Could they? Did they understand it? Did it affect their beliefs and attitudes? Did they encounter Jesus so that their life was transformed?[7] A maturation sequence the organization now teaches itself: from a distribution mindset (did we deliver it?) to an outcome mindset (did it change anything?) to an end-user relationship mindset (is this child being walked with, through the church and the family?). Scripture engagement as the primary indicator of the work, rather than a salvation count. And, in Chad Causey's Theological Foundations for Outcome-Based Ministry, the first full theological defense: attention to fruit is ministry's own oldest discipline, taught from the garden to the city, not borrowed management language. Causey builds it on the theology of fruit, Paul's builder and steward, the image of God, and the blessing of the nations.[13]" },
        { h: "Strength", p: "This is OneHope's most developed and most distinctive area, and the factors are nameable. A president who is a missiologist by training and temperament. A standing research team. A doctoral program built to theologize the practice. And an originating question, Eswatini's, that would not go away. Few mission agencies can say in public why they do not report conversions; OneHope can, and the reason is theological before it is methodological." },
        { h: "Weakness", p: "The managerial suspicion is partly deserved. The indicator still lacks an instrument with teeth: exposure and reading are ruled insufficient, but the standard of a continuing, transformative hold on the Word is hard to test at scale through partner churches and volunteers. Measurement in ministry is provisional by Scripture's own witness, as Causey concedes: Paul, having said the work will be tested by fire, adds that he does not judge even himself (1 Cor. 4:1–5).[13] Four core measures, capacity, scalability, sustainability, and outcomes, trade off against one another, and \"bigger is not better\" is easier to teach than to practice when the public story is still a count. And there is a tension with Spirit-Led that the two-pager never names: \"strategize with the end in mind\" sits next to \"open to God changing our course.\" The tension is productive, but unnamed tensions get resolved by whoever holds the budget." }
      ],
      fruit: ["outcome-based", "innovative", "pure"],
      notes: [7, 13, 29, 30]
    },
    {
      id: "branch-d",
      key: "catalyst",
      type: "branch",
      title: "D · The catalyst and church-partnership posture",
      when: "Vision 2030 in 2010 · Bible App for Kids 2013 · Lead Today 2016 · \"three shifts\" 2019 · two billion 2023",
      body: [
        { h: "Context", p: "A hundred years ago three-quarters of the global church lived in the West; today three-quarters lives in the majority world. Rob Hoskins draws two shifts from that inversion: from a pioneer model to a collaborative one, and from a generalist model to a specialist one. Nationals can do almost anything better, cheaper, and faster; the Western agency's role is to ask the \"unstoppables\" in each nation what they need and supply it.[7] OneHope's Vision 2030 (2010) was worded to catalyze a movement to reach every child through the Church, not to reach every child itself.[31] The Bible App for Kids was built by YouVersion with OneHope's content, Lead Today was piloted in Ghana because partners asked for it, and when the two billionth child was reached in 2023 Hoskins wrote that tens of thousands of churches did the reaching.[28] Alongside this sits Hoskins's named disagreement with Bill Hybels: the local church is not the hope of the world; the big-C body of Christ, lived out through the Spirit, is." },
        { h: "What it contributed", p: "A scope boundary: motivate, train, supply, support, and do not do for the church what is the church's to do. Four catalyst functions, convene, equip, connect, amplify, each of which strengthens work without leading or branding it. National offices understood as advisors to the churches of their nation rather than as distributors. White-labeled resources the church owns. A definition of \"catalyzing a movement\" that is explicit about what it is not: not a new structure, not infinite scaling of the organization, not a movement carrying OneHope's brand. And Hoskins's three pillars of mission, customization, collaboration, and intentional outcomes, as the organization's public self-description.[32]" },
        { h: "Strength", p: "Well developed in strategy language, and theologically grounded. John 17's prayer for unity is the Collaborative value's text, and Bosch's bold humility is its posture: bold because the church has news to announce, humble because it is a witness to the news and never its proprietor.[33] An agency that treats other agencies as colleagues rather than competitors for territory has passed the humility test whatever its brochures say. OneHope's alliance work, in Bible agency forums and digital mission consortia, is that test being passed in practice." },
        { h: "Weakness", p: "The parachurch's chronic gap, in its OneHope form: a rich theology of partnership with the church and a thin theology of what the church is. There is no stated ecclesiology of online church, multi-site church, or house church, even though OneHope's digital products reach children no congregation has met. The posture and the structure are not yet aligned: when OneHope's leaders are asked where the wineskins are cracking, movement and field ownership ranks third, after decision rights and pace. The theology gap and the structural gap close together or not at all. And \"specialization\" is sometimes framed as Western media competence, the nation of Walt Disney and Steve Jobs supplying what the majority world asks for.[7] That framing risks re-inscribing the pioneer posture in a new form, with the West still the one who has what the others need." }
      ],
      fruit: ["collaborative", "generous", "entrusting"],
      notes: [7, 28, 31, 32, 33]
    }
  ],

  // ---------------------------------------------------------------- FRUIT (the Nine Core Values)
  fruit: [
    {
      id: "spirit-led",
      type: "fruit",
      badge: "badges/spirit-led.png",
      tone: "flame",
      title: "Spirit-Led",
      statement: "We prayerfully seek God's presence and power in everything we do, needing the Holy Spirit's wisdom and guidance from beginning to end.",
      scripture: "Luke 11:1–13; Zechariah 4:6",
      roots: ["branch-a", "trunk"],
      inherited: true,
      body: [
        { h: "Where it grew from", p: "Branch A, straight from the Pentecostal trunk, and from the missio Dei itself. If mission is God's, discernment precedes deployment, and the organization's practices of turning to God first and dedicating plans to God are that theology in the language of prayer." },
        { h: "Well developed", p: "Prayer is structural, not ceremonial: a prayer team, a prayer line in every planning cycle, and leaders who expect God to change the plan. The OneHope prayer, which staff pray together, carries the organization's theology better than any strategy document." },
        { h: "Weak or in tension", p: "Spirit-Led can short-circuit analysis. \"We prayed about it\" ends conversations that outcome-based discipline would keep open. The two-pager places Spirit-Led and Outcome-Based four values apart and never names the tension between being open to God changing the course and strategizing with the end in mind. Naming it would strengthen both." }
      ],
      notes: []
    },
    {
      id: "committed",
      type: "fruit",
      badge: "badges/committed.png",
      tone: "sun",
      title: "Committed",
      statement: "We follow Jesus's call and pursue His mission daily. We pray for workers in the field, and God provides Kingdom-minded people willing to sacrifice for the mission.",
      scripture: "Luke 10:2",
      roots: ["branch-a", "branch-b"],
      inherited: true,
      body: [
        { h: "Where it grew from", p: "Branch A's eschatological urgency and Branch B's founding prayer. \"Lord of the harvest, send laborers\" is in the OneHope prayer because it was Bob Hoskins's prayer before there was an organization." },
        { h: "Well developed", p: "Perseverance and a culture of \"the mission, not ego.\" The organization has outlived its founder's active leadership, a civil war, a publisher's sale, and a rename without changing what it is for." },
        { h: "Weak or in tension", p: "This is where activism is over-weighted. Rest reads as disobedience; the people who cannot stop are the people the culture rewards. Capacity, margin, and pace are the second crack OneHope's own leaders name. The corrective is not less commitment but its recombination with contemplation, which the Pentecostal synergy of primitivism and pragmatism had and the organization has partly lost.[21]" }
      ],
      notes: [21]
    },
    {
      id: "pure",
      type: "fruit",
      badge: "badges/pure.png",
      tone: "slate",
      title: "Pure",
      statement: "We pursue our work and our lives with clean hands and pure hearts. We live with transparency and accountability, asking God to mold us to the image of His Son.",
      scripture: "Psalm 24:3–6; Romans 12:1–2",
      roots: ["branch-a", "branch-c"],
      inherited: true,
      body: [
        { h: "Where it grew from", p: "Branch A's holiness heritage, with a graft from Branch C: \"we face the truth even when it's difficult\" is an outcome-based sentence sitting under a holiness value. ECFA-style financial accountability is the institutional form." },
        { h: "Well developed", p: "Integrity, transparency, and stewardship are real and audited. Faithful stewardship of time, effort, and resources is practiced as a spiritual discipline, which is rarer than it sounds." },
        { h: "Weak or in tension", p: "Holiness is individualized. Clean hands and a pure heart describe a person; there is almost no structural or justice register, no sense that an organization's systems, contracts, or pay scales can be pure or impure. Wright's insistence that ethics is the purpose of election and that God's people are to be a visibly just society has no corresponding line in the value.[34]" }
      ],
      notes: [34]
    },
    {
      id: "loving",
      type: "fruit",
      badge: "badges/loving.png",
      tone: "flame",
      title: "Loving",
      statement: "We are brothers and sisters in Christ, motivated by love and service in our words and actions. We go the extra mile to show hospitality.",
      scripture: "1 John 4:7–12; John 13:35",
      roots: ["branch-b"],
      inherited: true,
      body: [
        { h: "Where it grew from", p: "Branch B. The organization was a family before it was a staff, and the Johannine texts describe what the Hoskins household already was." },
        { h: "Well developed", p: "Hospitality, authenticity, and vulnerability are real features of the culture, and \"we are honest and sharpen each other for the mission\" is a surprisingly hard-edged line for a love value." },
        { h: "Weak or in tension", p: "A family culture and a matrix organization pull against each other. When leaders are asked where the wineskins crack, decision rights and ownership rank first: a matrix without clear decision rules drifts toward silos and bottlenecks, and a family culture resolves that drift by relationship rather than by rule. Love is also framed as hospitality, rarely as justice. The value describes how staff treat one another; it says nothing about how the organization loves the child in a refugee camp or the national office employee on a contract." }
      ],
      notes: []
    },
    {
      id: "outcome-based",
      type: "fruit",
      badge: "badges/outcome-based.png",
      tone: "sun",
      title: "Outcome-Based",
      statement: "We are an outcome-based ministry, which means we strategize with the end in mind and build in ways to measure the impact of our efforts.",
      scripture: "1 Corinthians 3:5–15; Mark 4:1–20",
      roots: ["branch-c"],
      inherited: false,
      body: [
        { h: "Where it grew from", p: "Branch C, entirely. This value did not exist in 1987. It is the Eswatini question turned into a discipline, and Mark 4 and 1 Corinthians 3 are its texts because the sower and the builder both expect a result." },
        { h: "Well developed", p: "The most distinctive value OneHope holds. Scripture engagement as the primary indicator, a research team, an annual cycle of studies, and a theology of fruit that can answer the managerial suspicion in its own terms.[13] Most ministries measure outputs and call them outcomes; OneHope knows the difference and can explain it to a donor." },
        { h: "Weak or in tension", p: "The instrument gap: the indicator is defined more strictly than it can yet be measured. Provisionality: the verdict on ministry is the Lord's and has not been rendered, so every dashboard is penultimate. And the pull of the measurable: what can be counted crowds out what matters, and the public story is still a count of children reached." }
      ],
      notes: [13]
    },
    {
      id: "innovative",
      type: "fruit",
      badge: "badges/innovative.png",
      tone: "slate",
      title: "Innovative",
      statement: "While our mission and message remain the same, we innovate and improve our methods to share truth with each new generation.",
      scripture: "1 Chronicles 12:32; Mark 2:21–22",
      roots: ["branch-c", "branch-a"],
      inherited: false,
      body: [
        { h: "Where it grew from", p: "Branch C's research discipline and Branch A's pragmatism, through two of Rob Hoskins's favorite frames: the sons of Issachar who understood the times, and the wineskin. The wine is the gospel and never changes; the wineskin is the delivery method and must be rebuilt in every season. An old wineskin is not a failure; it faithfully held its season." },
        { h: "Well developed", p: "Method agility is real: more than 300 programs, print to film to app to storytelling cards, each designed for an audience and tested. The wine-and-wineskin discipline keeps innovation instrumental to fidelity of delivery rather than an end in itself." },
        { h: "Weak or in tension", p: "Technological optimism and platform sprawl: each department optimizing for itself produces global incoherence, and \"the only real mistake is not learning\" can excuse a lot of tools nobody adopted. And innovation framed as Western specialization, the thing the West still has that the majority world asks for, is the pioneer posture in new clothes." }
      ],
      notes: []
    },
    {
      id: "collaborative",
      type: "fruit",
      badge: "badges/collaborative.png",
      tone: "flame",
      title: "Collaborative",
      statement: "We foster collaboration, believing that God's redemptive plan is unfolding through the unity of the global Church.",
      scripture: "John 17:20–23; Ephesians 4:4–6",
      roots: ["branch-d", "branch-a"],
      inherited: false,
      body: [
        { h: "Where it grew from", p: "Branch D, with Branch A's indigenous-church principle underneath it. Hodges's self-governing, self-supporting, self-propagating church is the grandparent of \"we go further together rather than faster alone.\"" },
        { h: "Well developed", p: "The catalyst functions, the alliances, the white-label products, and a definition of movement that refuses to make it the organization's growth by another name. This is the value the organization has thought about hardest in the last decade." },
        { h: "Weak or in tension", p: "A thin ecclesiology. Partnership with the church is richly described; the church itself is not. Online church is underdeveloped, and the structures that would let field partners own the work lag the posture that says they should." }
      ],
      notes: []
    },
    {
      id: "generous",
      type: "fruit",
      badge: "badges/generous.png",
      tone: "sun",
      title: "Generous",
      statement: "We are an open-handed ministry. God is our source, and thanks to our partners' generous obedience, we confidently offer all we have in service to the Kingdom with joy.",
      scripture: "2 Corinthians 8:9; 9:6–8",
      roots: ["branch-b", "branch-d"],
      inherited: false,
      body: [
        { h: "Where it grew from", p: "Branch B's free-distribution model and Branch D's open-handed partnership. Scripture has always been given, never sold, and \"if it aligns with our mission and values, we say yes whenever possible\" is the catalyst posture as a rule of thumb." },
        { h: "Well developed", p: "Open-handedness is practiced at scale and theologized well: God is the source and he never runs out. The value also governs intellectual property, which is unusual; OneHope gives its content away to partners who re-brand it." },
        { h: "Weak or in tension", p: "The flow runs one direction. Generosity from the West to the majority world is coupled to a donor economy and can produce the dependency Hodges warned about seventy years ago.[5] A theology of mutual gift, in which the majority-world church's spiritual wealth is received as seriously as the West's financial wealth is given, is missing." }
      ],
      notes: [5]
    },
    {
      id: "entrusting",
      type: "fruit",
      badge: "badges/entrusting.png",
      tone: "slate",
      title: "Entrusting",
      statement: "Young people are not only our mission to reach, they are our partners in God's redemptive work.",
      scripture: "Matthew 25:14–30; Luke 16:10–12",
      roots: ["branch-d"],
      inherited: false,
      body: [
        { h: "Where it grew from", p: "Branch D, and the organization's own research on youth leadership. The newest value, and the one that most clearly points where the tree is growing: toward the majority-world young person as the center of the coming century's church, with the local church as part of the mechanism rather than only the beneficiary." },
        { h: "Well developed", p: "Lead Today and the practice of putting young people at every level of the organization. The value aligns with the direction of the global church more than any other on the list." },
        { h: "Weak or in tension", p: "Least institutionalized: it has a verse, a program, and a sentence, not yet a doctrine of the child. \"Empowerment and accountability go hand in hand\" can let the accountability clause swallow the empowerment. And the research on faith transmission, which keeps finding that parents, and mothers first, are the ceiling on a child's faith, has not yet reshaped a value that still imagines the young person alone with the organization.[9]" }
      ],
      notes: [9]
    }
  ],

  // ---------------------------------------------------------------- BARE BRANCHES
  bare: [
    {
      id: "bare-technology",
      type: "bare",
      title: "Technology, AI, and online church",
      when: "The most active frontier, 2023 to now",
      foregrounded: true,
      body: [
        { h: "What is present", p: "OneHope's digital products reach more children than its printed ones. Rob Hoskins has written publicly on generative AI as an anthropological and spiritual crisis the church must engage for the next generation, and OneHope sits in the consortia and convenings where the church's response is being shaped.[35]" },
        { h: "What is absent", p: "A stated theology of mediation, and any ecclesiology of online church. Digital is still at risk of being treated as an amplification layer, a job for whoever is good with technology, which confuses the medium with the preaching. The question a church must answer before any digital strategy means anything, whether digital participation is an on-ramp or an endpoint, has no OneHope answer." },
        { h: "What it would take", p: "A theology of mediation that starts from the fact that all formation is already mediated (by translation, tradition, and print), so formation can travel through a medium without ceasing to be formation. This is the branch the author's own doctoral work intends to graft onto: how new technologies, AI in particular, could let majority-world young people take ownership of their calling at a moment when market forces and access barriers are leaving them behind, with the local church as part of the solution." }
      ],
      notes: [35]
    },
    {
      id: "bare-displacement",
      type: "bare",
      title: "War, immigration, and displacement",
      when: "Beirut 1975–76; the Lumière Project in closed countries; nothing written",
      foregrounded: true,
      body: [
        { h: "What is present", p: "An irony. The founder's formative decade was the Lebanese civil war; his family left after a bomb destroyed their home. OneHope works today in closed and conflict countries through national believers who, as Rob Hoskins puts it, are waiting to lay down their lives to reach people no Western face can.[7]" },
        { h: "What is absent", p: "Any articulated theology of mission under displacement: to refugees, to diaspora, to the child whose school no longer exists. What Bob Hoskins drew from Beirut was apocalyptic: a preview of how fast violence comes and prosperity goes, read through Genesis 6 and Revelation 18.[22] That is a theology of the end, not a missiology of the displaced child. Tennent lists migration among the megatrends any mission must now reckon with, and the mission field now arrives in the sending country, yet OneHope's model still assumes a child in a school in a nation.[36]" },
        { h: "What it would take", p: "A missiology of displacement that treats the refugee child as a primary audience rather than an exception, and asks what Scripture engagement looks like when there is no school, no stable church, and often no parent." }
      ],
      notes: [7, 22, 36]
    },
    {
      id: "bare-urban",
      type: "bare",
      title: "Urbanization and globalization",
      when: "Noted, not foregrounded",
      foregrounded: false,
      body: [
        { h: "In brief", p: "The model was built for schools and print. The organization's own research now points to family and church as the units of faith transmission, and the world's children are increasingly urban, but urban youth strategy remains adaptation rather than design. The right frame comes from a church planter in the course cohort: the city is not harder to reach; the models are poorly contextualized, because they were born somewhere else. That is contextualization, not difficulty, and it is a design task OneHope has not yet taken up." }
      ],
      notes: []
    },
    {
      id: "bare-consensus",
      type: "bare",
      title: "Left out for lack of consensus",
      when: "Noted, not foregrounded",
      foregrounded: false,
      body: [
        { h: "In brief", p: "The assignment asks what was left out because the tradition had no consensus. For OneHope's Pentecostal and broadly evangelical family, gender and human sexuality are that item. One data point shows the cost of silence: in OneHope's own Gen Alpha research, mothers are the first person a child asks about God at 84 percent, while the church structures those mothers belong to routinely marginalize women's teaching voice.[9] No position is taken here; the observation is that a strategy problem is visible before any theological question is settled." }
      ],
      notes: [9]
    }
  ],

  // ---------------------------------------------------------------- PRUNING
  pruning: {
    deconstruct: {
      title: "To deconstruct",
      intro: "Inheritances that are not sufficiently biblical or no longer useful in OneHope's context.",
      items: [
        { h: "Reach counts as the public story", p: "Outcomes are the private theology and copies-and-children the public one. The organization has moved past the distribution mindset internally; its donor narrative has not. Deconstruct the count, or at least demote it, before it hollows out the outcome theology from the outside." },
        { h: "Western specialization as the West's continuing role", p: "\"The nation of Walt Disney and Steve Jobs\" is a true description of a capability and a bad theology of mission. Replace it with mutual gift: the West brings media and money, the majority world brings proximity, suffering, and spiritual vitality, and neither is the senior partner." },
        { h: "Apocalyptic withdrawal", p: "Bob Hoskins's eschatology was forged in Beirut and reads the collapse of cities as prophecy fulfilled. It fuels urgency and it can counsel survival rather than mission. Wright's new-creation hope, in which human culture is redeemed and brought into the city of God, and Causey's account of why the present age matters, already supply the replacement from inside the family.[23]" },
        { h: "\"Every child\" as an individual-reach metric", p: "The phrase is right and its operationalization is wrong. A child reached once is a count; a child in a church with a parent who reads the Bible is an outcome. Reframe \"every child\" through the three pillars." }
      ]
    },
    develop: {
      title: "To develop",
      intro: "Areas that need to be more sufficiently developed in light of the scriptural witness and contemporary need.",
      items: [
        { h: "A theology of the child", p: "Entrusting has a verse and a program but not a doctrine. What does Scripture say a child is, and what does it mean that the kingdom belongs to such as these?" },
        { h: "A theology of mediation and technology", p: "Everything is mediated, so formation can travel through a medium. Say that, then say what a medium can and cannot carry, and what belongs to the embodied church." },
        { h: "A missiology of displacement", p: "From the founder's own story. The refugee child as a primary audience, not an exception." },
        { h: "An ecclesiology of the catalyst", p: "What the church is, not only how to serve it. Until OneHope can say what a church is, it cannot say what counts as partnering with one, online or off." }
      ]
    }
  },

  // ---------------------------------------------------------------- DATED TABLE (notes page)
  dates: [
    { year: "1914", event: "Assemblies of God organized at Hot Springs (April); the November council commits the movement to \"the greatest evangelism the world has ever seen.\"", branch: "ag", note: 17 },
    { year: "1921", event: "Indigenous church (self-governing, self-supporting, self-propagating) adopted as AG foreign-missions policy.", branch: "ag", note: 18 },
    { year: "1936", event: "Bob Hoskins born, Ponca City, Oklahoma; preaching from age seven.", branch: "origin", note: 19 },
    { year: "1952", event: "Willingen: the missio Dei enters the missiological vocabulary.", branch: "trunk", note: 14 },
    { year: "1953", event: "Melvin Hodges, The Indigenous Church, written from El Salvador.", branch: "ag", note: 18 },
    { year: "1965–76", event: "The Hoskins family in Beirut: literature ministry, correspondence school; they leave after their home is bombed.", branch: "origin", note: 19 },
    { year: "1980", event: "Bob Hoskins president of Life Publishers (AG), Miami.", branch: "origin", note: 19 },
    { year: "1987", event: "The vision; El Libro de Vida to ~968,000 schoolchildren in El Salvador through AG churches. Book of Hope begins.", branch: "origin", note: 25 },
    { year: "1990", event: "First legally distributed Scripture in Soviet schools in seventy years.", branch: "origin", note: 19 },
    { year: "1991", event: "Bosch, Transforming Mission.", branch: "trunk", note: 3 },
    { year: "1996", event: "AG sells Life Publishers; Book of Hope becomes a separate ministry.", branch: "origin", note: 26 },
    { year: "2004", event: "Rob Hoskins becomes president.", branch: "outcome", note: 29 },
    { year: "2006", event: "The Eswatini epiphany: program shut down to reassess; origin of outcome-based ministry.", branch: "outcome", note: 29 },
    { year: "2007–11", event: "Attitudes and Behavior of Youth study: 152,000 teenagers, 44 countries.", branch: "outcome", note: 30 },
    { year: "2009", event: "Book of Hope renamed OneHope (March).", branch: "outcome", note: 26 },
    { year: "2010", event: "Vision 2030: catalyze a movement to reach every child through the Church. Wright, The Mission of God's People.", branch: "catalyst", note: 31 },
    { year: "2012", event: "The AG described as OneHope's denominational covering \"until a few years ago.\"", branch: "ag", note: 20 },
    { year: "2013", event: "Bible App for Kids launched with YouVersion.", branch: "catalyst", note: 32 },
    { year: "2014", event: "One billionth child. MissioLOGICAL; \"Outcome Based Ministry\" blog posts.", branch: "outcome", note: 30 },
    { year: "2016", event: "Lead Today piloted in Ghana at partners' request.", branch: "catalyst", note: 32 },
    { year: "2019", event: "Rob Hoskins's \"three shifts\" address: pioneer to collaborative, generalist to specialist, outputs to outcomes.", branch: "catalyst", note: 7 },
    { year: "2021", event: "Reimagine Mission. Bob and Hazel Hoskins School of Mission launched at Southeastern University.", branch: "outcome", note: 32 },
    { year: "2023", event: "Two billionth child, El Salvador; Vision 2033.", branch: "catalyst", note: 28 },
    { year: "2026", event: "Rob Hoskins on generative AI and the next generation. Causey, Theological Foundations for Outcome-Based Ministry (manuscript).", branch: "bare", note: 35 }
  ],

  // ---------------------------------------------------------------- NOTES (Turabian, notes-bibliography)
  // Numbered in reading order. Shortened forms after first citation.
  notes: [
    /* 1 */ "David W. Bebbington, <i>Evangelicalism in Modern Britain: A History from the 1730s to the 1980s</i> (London: Unwin Hyman, 1989), 2–3, 10–12.",
    /* 2 */ "William Carey, <i>An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens</i> (Leicester: Ann Ireland, 1792).",
    /* 3 */ "David J. Bosch, <i>Transforming Mission: Paradigm Shifts in Theology of Mission</i> (Maryknoll, NY: Orbis Books, 1991), 262–345.",
    /* 4 */ "Rob Hoskins, \"Bringing Clarity to 21st Century Missions\" (address to OneHope staff, Pompano Beach, FL, 2019), transcript, MISS 7013 Pre-Intensive Work, Southeastern University.",
    /* 5 */ "Melvin L. Hodges, <i>The Indigenous Church</i> (Springfield, MO: Gospel Publishing House, 1953), 7–15.",
    /* 6 */ "OneHope, <i>Our Nine Core Values</i> (Pompano Beach, FL: OneHope, n.d.), internal document.",
    /* 7 */ "Hoskins, \"Bringing Clarity.\"",
    /* 8 */ "Bosch, <i>Transforming Mission</i>, 393–400.",
    /* 9 */ "Barry Saylor, \"Reading the Story: Toward a Strategic Narrative for NextGen Missiology\" (lecture, Hoskins School of Mission missiology intensive, Southeastern University, September 10, 2026), citing OneHope, <i>Global Youth Culture</i> (Pompano Beach, FL: OneHope, 2020), and OneHope, <i>Gen Alpha</i> (2024).",
    /* 10 */ "Widely attributed to Oswald J. Smith; the earliest printed source has not been located. Cited here as used by Bob Hoskins in OneHope teaching.",
    /* 11 */ "Christopher J. H. Wright, <i>The Mission of God's People: A Biblical Theology of the Church's Mission</i> (Grand Rapids: Zondervan, 2010), 208.",
    /* 12 */ "Wright, <i>Mission of God's People</i>, 41–43.",
    /* 13 */ "Chad Causey, <i>Theological Foundations for Outcome-Based Ministry: Missional Leadership in Apocalyptic Times</i> (unpublished manuscript, Hoskins School of Mission, 2026), chaps. 1–2. Cited with the author's permission.",
    /* 14 */ "Bosch, <i>Transforming Mission</i>, 389–93.",
    /* 15 */ "Wright, <i>Mission of God's People</i>, 17–20.",
    /* 16 */ "Bosch, <i>Transforming Mission</i>, 393–400; Wright, <i>Mission of God's People</i>, 110, 182.",
    /* 17 */ "Darrin J. Rodgers, \"Fully Committed: 100 Years of the Assemblies of God,\" <i>Assemblies of God Heritage</i> 34 (2014). The 1914 Chicago minutes should be cited directly from the Flower Pentecostal Heritage Center for the exact wording.",
    /* 18 */ "Gary B. McGee, <i>This Gospel Shall Be Preached: A History and Theology of Assemblies of God Foreign Missions to 1959</i> (Springfield, MO: Gospel Publishing House, 1986); Hodges, <i>Indigenous Church</i>.",
    /* 19 */ "Shelly Pond, \"OneHope Founder Bob Hoskins: 80 Years of Ministry,\" <i>Good News Florida</i>, January 4, 2023, https://www.goodnewsfl.org/onehope-founder-bob-hoskins-80-years/.",
    /* 20 */ "Jennifer LeClaire, \"One (Big) Hope,\" <i>Charisma</i>, October 19, 2012, https://mycharisma.com/propheticrevival/evangelism2/one-big-hope/.",
    /* 21 */ "Andrea Lathrop, \"Missiology and a High View of God\" (lecture, Hoskins School of Mission missiology intensive, Southeastern University, September 9, 2026).",
    /* 22 */ "Bob Hoskins, \"To Which Kingdom Do You Belong?\" (MISS 7013 pre-intensive reading, Southeastern University, 2026). [Verify original publication.]",
    /* 23 */ "Wright, <i>Mission of God's People</i>, 142, 227–29; Causey, <i>Theological Foundations</i>, chap. 2, sec. VI.",
    /* 24 */ "Chris Colvin, \"Vision From Blindness,\" <i>Influence</i>, May 21, 2020, https://influencemagazine.com/practice/vision-from-blindness; OneHope, \"About Us,\" https://onehope.net/about-us/.",
    /* 25 */ "Colvin, \"Vision From Blindness\"; \"Book of Hope Marks Distribution Milestone,\" <i>Christian Post</i>, ca. 2005, https://www.christianpost.com/news/book-of-hope-marks-distribution-milestone.html.",
    /* 26 */ "Pond, \"OneHope Founder\"; Michelle A. Vu, \"Ministry Finds Disturbing Statistics about World's Youth,\" <i>Christian Post</i>, July 29, 2009. [The 1996 sale rests on secondary sources; verify.]",
    /* 27 */ "Stephen Neill, <i>Creative Tension</i> (London: Edinburgh House Press, 1959), 81, quoted in Hoskins, \"Bringing Clarity.\"",
    /* 28 */ "Rob Hoskins, \"Reaching 2 Billion Children and Youth,\" Rob Hoskins (blog), March 29, 2023, https://robhoskins.onehope.net/?p=7612.",
    /* 29 */ "Rob Hoskins, \"Outcome Based Ministry Origins,\" Rob Hoskins (blog), August 7, 2014, https://robhoskins.onehope.net/?p=1121; Rob Hoskins, <i>Reimagine Mission</i> (Pompano Beach, FL: OneHope, 2021), chap. 9.",
    /* 30 */ "Rob Hoskins, <i>MissioLOGICAL</i> (Pompano Beach, FL: OneHope, 2014), https://robhoskins.onehope.net/wp-content/uploads/2025/01/Missiological-by-Rob-Hoskins-2014.pdf; Rob Hoskins, \"Outcome Based Ministry—What Is It?\" Rob Hoskins (blog), August 4, 2014.",
    /* 31 */ "LeClaire, \"One (Big) Hope.\"",
    /* 32 */ "Hoskins, <i>Reimagine Mission</i>; OneHope, <i>Global Report</i> (Pompano Beach, FL: OneHope, September 2023).",
    /* 33 */ "Bosch, <i>Transforming Mission</i>, 489.",
    /* 34 */ "Wright, <i>Mission of God's People</i>, 93–94, 131.",
    /* 35 */ "\"OneHope President Responds to Papal AI Encyclical, Calls on Churches to Engage Next Generation,\" <i>Christian Daily</i>, June 4, 2026.",
    /* 36 */ "Timothy C. Tennent, <i>Invitation to World Missions: A Trinitarian Missiology for the Twenty-First Century</i> (Grand Rapids: Kregel, 2010), 18–50."
  ],

  bibliography: [
    "Bebbington, David W. <i>Evangelicalism in Modern Britain: A History from the 1730s to the 1980s</i>. London: Unwin Hyman, 1989.",
    "Bosch, David J. <i>Transforming Mission: Paradigm Shifts in Theology of Mission</i>. Maryknoll, NY: Orbis Books, 1991.",
    "Carey, William. <i>An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens</i>. Leicester: Ann Ireland, 1792.",
    "Causey, Chad. <i>Theological Foundations for Outcome-Based Ministry: Missional Leadership in Apocalyptic Times</i>. Unpublished manuscript, Hoskins School of Mission, 2026.",
    "Colvin, Chris. \"Vision From Blindness.\" <i>Influence</i>, May 21, 2020. https://influencemagazine.com/practice/vision-from-blindness.",
    "Hodges, Melvin L. <i>The Indigenous Church</i>. Springfield, MO: Gospel Publishing House, 1953.",
    "Hoskins, Bob. \"To Which Kingdom Do You Belong?\" MISS 7013 pre-intensive reading, Southeastern University, 2026.",
    "Hoskins, Rob. \"Bringing Clarity to 21st Century Missions.\" Address to OneHope staff, Pompano Beach, FL, 2019. Transcript.",
    "Hoskins, Rob. <i>MissioLOGICAL</i>. Pompano Beach, FL: OneHope, 2014.",
    "Hoskins, Rob. \"Outcome Based Ministry Origins.\" Rob Hoskins (blog), August 7, 2014. https://robhoskins.onehope.net/?p=1121.",
    "Hoskins, Rob. \"Outcome Based Ministry—What Is It?\" Rob Hoskins (blog), August 4, 2014.",
    "Hoskins, Rob. \"Reaching 2 Billion Children and Youth.\" Rob Hoskins (blog), March 29, 2023. https://robhoskins.onehope.net/?p=7612.",
    "Hoskins, Rob. <i>Reimagine Mission</i>. Pompano Beach, FL: OneHope, 2021.",
    "Lathrop, Andrea. \"Missiology and a High View of God.\" Lecture, Hoskins School of Mission missiology intensive, Southeastern University, September 9, 2026.",
    "LeClaire, Jennifer. \"One (Big) Hope.\" <i>Charisma</i>, October 19, 2012. https://mycharisma.com/propheticrevival/evangelism2/one-big-hope/.",
    "McGee, Gary B. <i>This Gospel Shall Be Preached: A History and Theology of Assemblies of God Foreign Missions to 1959</i>. Springfield, MO: Gospel Publishing House, 1986.",
    "Neill, Stephen. <i>Creative Tension</i>. London: Edinburgh House Press, 1959.",
    "OneHope. \"About Us.\" https://onehope.net/about-us/.",
    "OneHope. <i>Global Youth Culture</i>. Pompano Beach, FL: OneHope, 2020.",
    "OneHope. <i>Our Nine Core Values</i>. Pompano Beach, FL: OneHope, n.d. Internal document.",
    "\"OneHope President Responds to Papal AI Encyclical, Calls on Churches to Engage Next Generation.\" <i>Christian Daily</i>, June 4, 2026.",
    "Pond, Shelly. \"OneHope Founder Bob Hoskins: 80 Years of Ministry.\" <i>Good News Florida</i>, January 4, 2023. https://www.goodnewsfl.org/onehope-founder-bob-hoskins-80-years/.",
    "Rodgers, Darrin J. \"Fully Committed: 100 Years of the Assemblies of God.\" <i>Assemblies of God Heritage</i> 34 (2014).",
    "Saylor, Barry. \"Reading the Story: Toward a Strategic Narrative for NextGen Missiology.\" Lecture, Hoskins School of Mission missiology intensive, Southeastern University, September 10, 2026.",
    "Tennent, Timothy C. <i>Invitation to World Missions: A Trinitarian Missiology for the Twenty-First Century</i>. Grand Rapids: Kregel, 2010.",
    "Vu, Michelle A. \"Ministry Finds Disturbing Statistics about World's Youth.\" <i>Christian Post</i>, July 29, 2009.",
    "Wright, Christopher J. H. <i>The Mission of God's People: A Biblical Theology of the Church's Mission</i>. Grand Rapids: Zondervan, 2010."
  ]
};
