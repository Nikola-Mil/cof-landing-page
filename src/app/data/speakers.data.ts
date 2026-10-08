import { Speaker } from '../models/speaker.model';
import { Language } from '../i18n/language';

// Source: speaker bios and headshots supplied by Center for Finance for the
// "Montenegro in the EU" conference (FW_ Slike, biografije i agenda).
export const SPEAKERS: Record<Language, Speaker[]> = {
  en: [
    {
      id: 'zeljko-bogetic',
      name: 'Željko Bogetić',
      title: 'Academic Director of the Conference; Fellow, Johns Hopkins University',
      photo: 'assets/images/speakers/zeljko-bogetic.jpg',
      bio: [
        'Dr Željko Bogetić is a Fellow at Johns Hopkins University (Institute for Applied Economics, Global Health, and the Study of Business Enterprise) and one of the region\'s most experienced macroeconomists.',
        'Over a career spanning more than three decades, he served as Lead Economist at the World Bank across multiple regions and a large number of countries, including the Middle East, North Africa and the Western Balkans, where he led complex programmes of macroeconomic analysis, budget support and economic reform. He spent most of his professional career at the World Bank and, in part, at the International Monetary Fund (IMF).',
        'He has worked with governments, central banks and institutions in countries including Russia, Ukraine, South Africa and other southern African states, and his research has been published in leading international journals. He holds a Ph.D. and Master\'s degree in Economics from the United States, taught at the University of Connecticut, and has been an invited lecturer at Yale, MIT, Penn State, the University of Cape Town and other prestigious institutions.',
      ],
    },
    {
      id: 'james-robinson',
      name: 'James Robinson',
      title: 'University Professor, University of Chicago; 2024 Nobel Laureate in Economic Sciences',
      photo: 'assets/images/speakers/james-robinson.jpg',
      bio: [
        'James Robinson is a University Professor at the University of Chicago, with affiliations at the Harris School of Public Policy, the Committee on Social Thought, and the Department of Political Science.',
        'He is the recipient of the Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel.',
      ],
    },
    {
      id: 'ivan-miklos',
      name: 'Ivan Miklos',
      title: 'Former Deputy Prime Minister and Minister of Finance, Slovak Republic; Co-Founder, MESA10',
      photo: 'assets/images/speakers/ivan-miklos.jpg',
      bio: [
        'Ivan Miklos is the former Deputy Prime Minister and Minister of Finance of the Slovak Republic (2002–2006, 2010–2012), Deputy Prime Minister for the Economy (1998–2002), and Minister of Privatization (1991–1992). He co-founded and led the economic think tank MESA10 (1992–1998) and was reappointed its President in 2014. Between 2006–2010 and 2012–2016 he was a Member of Parliament.',
        'During 2015–2016 he served as Chief Advisor to the Minister of Finance of Ukraine and as an Advisor to the Minister of Economic Development and Trade of Ukraine. From April 2016 to August 2019 he served as Chief Economic Advisor to the Prime Minister of Ukraine, and from November 2019 to March 2020 as an Economic Advisor to the Prime Minister of Ukraine. Between 2016–2020 he chaired the Strategic Advisory Group for Support of Ukrainian Reforms (SAGSUR), and he co-founded the Ukrainian economic think tank Centre for Economic Strategy. He served as an Advisor to the Prime Minister of Moldova (2021–2022) and, from March 2022 to June 2024, as an Advisor to the President of the Slovak Republic on economic policy.',
        'Ivan Miklos was one of the leading figures of economic transformation in the Slovak Republic. He significantly contributed to the country\'s entry into the OECD and led an extensive and effective tax reform, as well as the government agenda on economic restructuring and fiscal consolidation. The reformist government of 2002–2006 combined severe austerity measures with a comprehensive programme of structural reforms in tax, the social sector, pensions, healthcare, public finance and the labour market — reforms that helped Slovakia join the Eurozone in 2009. In 2004 he was named "Best Minister of Finance of the Year" by Euromoney and "Top Business Reformer" by the World Bank\'s Doing Business report.',
        'He is the author of "Book of Reforms" (2005) and "Rewriting the Rules" (2001), and of the chapter on Slovak reforms in "The Great Rebirth: Lessons from the Victory of Capitalism over Communism" (2014). In 2019 he led SAGSUR\'s publication "Reforms in Ukraine after the Revolution of Dignity," contributing its chapter on the political economy of reform.',
      ],
    },
    {
      id: 'marek-dabrowski',
      name: 'Marek Dabrowski',
      title: 'Non-Resident Fellow, Bruegel; Co-Founder, CASE',
      photo: 'assets/images/speakers/marek-dabrowski.jpg',
      bio: [
        'Marek Dabrowski is a Non-Resident Fellow at Bruegel, specialising in monetary and fiscal policy, trade policy, and the political economy of policy reform.',
        'His work covers country-specific and cross-country analyses of monetary and fiscal policy, macroeconomic trends and financial stability, the European Union and euro-area economy, European integration, and economic reform in emerging-market economies — particularly in Central and Eastern Europe, the former Soviet Union, and the Middle East and North Africa. He speaks English, Polish and Russian.',
        'He is a co-founder and Fellow of the Centre for Social and Economic Research (CASE). He has previously been a Visiting Professor at the Central European University in Vienna and Professor at the Higher School of Economics in Moscow, and holds a Ph.D. in Economics from the Institute of Planning, Warsaw.',
      ],
    },
    {
      id: 'lubomir-mitov',
      name: 'Lubomir Mitov',
      title: 'Independent Financial Consultant; Former Chief CEE Economist, UniCredit',
      photo: 'assets/images/speakers/lubomir-mitov.jpg',
      bio: [
        'Lubomir Mitov is an independent financial consultant with more than 25 years of experience in macroeconomic research on emerging markets and the euro area periphery, with a special focus on risk analysis, debt sustainability and restructuring, and financial markets.',
        'He served as Chief CEE Economist and Managing Director at UniCredit in London (2015–2017) and as Chief European Economist and Deputy Director at the Institute of International Finance (IIF) from 2000 to 2015.',
      ],
    },
    {
      id: 'marcin-piatkowski',
      name: 'Marcin Piątkowski',
      title: 'Professor of Economics, Kozminski University; Lead Economist for South Asia, World Bank',
      photo: 'assets/images/speakers/marcin-piatkowski.jpg',
      bio: [
        'Marcin Piątkowski is a Professor of Economics at Kozminski University in Warsaw and Lead Economist for South Asia at the Finance, Competitiveness and Innovation Department of the World Bank in New Delhi. Before moving to India, he led the World Bank\'s private sector development support for the governments of China, Vietnam, the Philippines, Mongolia, Ukraine, Latvia, Czechia and Poland.',
        'Prior to joining the World Bank, he was Chief Economist and Managing Director of PKO BP, the largest bank in Central and Eastern Europe. He also worked as an economist in the European Department of the IMF and as an Advisor to Poland\'s Deputy Premier and Minister of Finance.',
        'He holds a Ph.D. and habilitation in Economics from Kozminski University and an M.A. in Finance and Banking from the Warsaw School of Economics. He has been a visiting scholar at Harvard University, the London Business School and the OECD Development Centre, and has lectured at universities including Stanford, Yale, Princeton and Peking University.',
        'He authored "Europe\'s Growth Champion: Insights from the Economic Rise of Poland" (Oxford University Press, 2018), winner of the Polish Academy of Sciences\' "Best Book in Economics" prize in 2019.',
      ],
    },
    {
      id: 'inna-steinbuka',
      name: 'Inna Šteinbuka',
      title: 'Professor, University of Latvia; Chair, Fiscal Discipline Council of Latvia',
      photo: 'assets/images/speakers/inna-steinbuka.jpg',
      bio: [
        'Inna Šteinbuka is Professor and Director of the Master\'s degree programme "European Studies and Economic Diplomacy" at the University of Latvia. She is a full member of the Latvian Academy of Sciences and Chair of its European Policy, Politics and Institutions (EPPI) Council.',
        'In 2018–2019 she was a special advisor to European Commission Vice-President Valdis Dombrovskis. Since 2018 she has been a member, and since December 2019 Chair, of the Latvian Fiscal Discipline Council. From 2011 to 2018 she was Head of the European Commission Representation in Latvia, having joined the European Commission in 2005, previously serving as Director of the Department of Economic and Regional Statistics and the Department of Social and Information Society Statistics at Eurostat.',
        'Prior to joining the European Commission, she chaired the Public Utilities Commission of Latvia and served as Senior Advisor to the Executive Director of the Nordic–Baltic constituency at the International Monetary Fund in Washington, D.C. In 2008 she was awarded the Order of the Three Stars for her achievements in finance and economics.',
      ],
    },
    {
      id: 'madis-muller',
      name: 'Madis Müller',
      title: 'Former Governor, Bank of Estonia (Eesti Pank)',
      photo: 'assets/images/speakers/madis-muller.jpg',
      bio: [
        'Madis Müller is an Estonian economist who served as Governor of the Bank of Estonia (Eesti Pank) and as a member of the Governing Council of the European Central Bank from 2019 until June 2026. He was Deputy Governor of Eesti Pank from 2011 before becoming Governor in 2019.',
      ],
    },
    {
      id: 'mojmir-mrak',
      name: 'Mojmir Mrak',
      title: 'Professor and Jean Monnet Chair, University of Ljubljana',
      photo: 'assets/images/speakers/mojmir-mrak.jpg',
      bio: [
        'Mojmir Mrak is a full-time Professor and Jean Monnet Chair holder at the Academic Unit for Money and Finance, Faculty of Economics, University of Ljubljana, and a regular visiting professor at the Wirtschaftsuniversität Wien and the Burgundy School of Business in Dijon. His research covers international capital flows, national and EU public finances, and EU accession.',
        'He has more than 25 years of experience designing and implementing Slovenia\'s government policy on international finance and EU accession. Between 1992 and 1996 he was Slovenia\'s Chief External Debt Negotiator, responsible for its early credit arrangements with the EBRD and the World Bank, and from 1997 to 2004 he was Chief Advisor to the Slovenian Government on the financial aspects of EU accession.',
        'He has since advised on Slovenia\'s negotiating positions across several EU multi-annual financial frameworks and undertaken numerous consultancy assignments on macro-fiscal and EU accession issues for governments across South Eastern Europe. He currently serves as Senior Programme Advisor to the Centre of Excellence in Finance.',
      ],
    },
    {
      id: 'jan-marusinec',
      name: 'Jan Marusinec',
      title: 'Executive Director, MESA10',
      photo: 'assets/images/speakers/jan-marusinec.jpg',
      bio: [
        'Jan Marusinec is an economic and finance policy expert at MESA10, with a Master\'s degree in economics and 12 years of experience in public finance and public administration.',
        'He began his career on business–government relations in the NGO sector before joining Slovakia\'s Ministry of Finance, where he advised the Deputy Minister on fiscal policy and, in 2004, became Director of the Budget Analysis Department, actively participating in Slovakia\'s public finance management reform process.',
        'He joined MESA10 in 2006 as a Senior Fellow covering finance and economics, became Acting President in 2010, and later served as Executive Director. As an international consultant he focuses on public finance management reforms in transition countries and has advised high-level officials in Slovakia and abroad. Besides Slovak, he speaks fluent English and German, and some Russian.',
      ],
    },
    {
      id: 'johannes-fedderke',
      name: 'Johannes W. Fedderke',
      title: 'Professor of International Affairs and African Studies, Pennsylvania State University',
      photo: 'assets/images/speakers/johannes-fedderke.jpg',
      bio: [
        'Johannes W. Fedderke is an economist and Professor in the School of International Affairs at Pennsylvania State University. His research uses mathematical and econometric modelling to examine the dynamics of economic activity and strategic behaviour, with particular reference to the impact of institutions.',
        'He is the author of more than 80 peer-reviewed journal articles and over 100 peer-reviewed publications in total. He has directed several research institutes and schools of economics, and was the founding President of the African Econometrics Society. He has held tenured positions in the United Kingdom, South Africa and the United States.',
        'His extensive policy work has been carried out for the World Bank, the African Union, the League of Arab States, the South African Reserve Bank, the South African National Treasury, and the South African Parliament. He holds a Ph.D. and an M.Phil. in Economics from the University of Cambridge.',
      ],
    },
    {
      id: 'zsoka-koczan',
      name: 'Zsoka Koczan',
      title: 'Associate Director and Lead Economist, EBRD',
      photo: 'assets/images/speakers/zsoka-koczan.jpg',
      bio: [
        'Zsoka Koczan is a Lead Economist at the EBRD Office of the Chief Economist. She holds a Ph.D. in Economics from the University of Cambridge.',
        'Before joining the EBRD she worked as an economist at the International Monetary Fund, in the European Department (on Belarus, Montenegro, and a cross-country project on macroeconomic developments in the Western Balkans) and in the Research Department (on the World Economic Outlook).',
        'She is currently working on the new round of the Life in Transition Survey, with research focused on within-country income disparities, migration and inequality.',
      ],
    },
    {
      id: 'ivana-katnic',
      name: 'Ivana Katnić',
      bio: [],
    },
    {
      id: 'nina-drakic',
      name: 'Nina Drakić',
      bio: [],
    },
    {
      id: 'maida-gorcevic',
      name: 'Maida Gorčević',
      bio: [],
    },
    {
      id: 'jakov-milatovic',
      name: 'Jakov Milatović',
      bio: [],
    },
    {
      id: 'enrico-letta',
      name: 'Enrico Letta',
      bio: [],
    },
    {
      id: 'davor-kunc',
      name: 'Davor Kunc',
      bio: [],
    },
    {
      id: 'roko-tolic',
      name: 'Roko Tolić',
      bio: [],
    },
    {
      id: 'tamas-kamarasi',
      name: 'Tamaš Kamaraši',
      bio: [],
    },
    {
      id: 'laurian-lungu',
      name: 'Laurian Lungu',
      bio: [],
    },
    {
      id: 'vasilis-panagopoulos',
      name: 'Vasilis Panagopoulos',
      bio: [],
    },
    {
      id: 'branko-mitrovic',
      name: 'Branko Mitrović',
      bio: [],
    },
    {
      id: 'aleksa-lukic',
      name: 'Aleksa Lukić',
      bio: [],
    },
    {
      id: 'martin-leberle',
      name: 'Martin Leberle',
      bio: [],
    },
    {
      id: 'ana-draskovic',
      name: 'Ana Drašković',
      bio: [],
    },
    {
      id: 'igor-luksic',
      name: 'Igor Lukšić',
      bio: [],
    },
  ],
  me: [
    {
      id: 'zeljko-bogetic',
      name: 'Željko Bogetić',
      title: 'Akademski direktor konferencije; stipendista, Univerzitet Johns Hopkins',
      photo: 'assets/images/speakers/zeljko-bogetic.jpg',
      bio: [
        'Dr Željko Bogetić je stipendista na Univerzitetu Johns Hopkins (Institut za primijenjenu ekonomiju, globalno zdravlje i proučavanje poslovnih poduhvata) i jedan od najiskusnijih makroekonomista u regionu.',
        'Tokom karijere duže od tri decenije, radio je kao vodeći ekonomista Svjetske banke u više regiona i velikom broju zemalja, uključujući Bliski istok, sjevernu Afriku i Zapadni Balkan, gdje je vodio složene programe makroekonomske analize, budžetske podrške i ekonomskih reformi. Najveći dio svoje profesionalne karijere proveo je u Svjetskoj banci, a dio i u Međunarodnom monetarnom fondu (MMF).',
        'Sarađivao je sa vladama, centralnim bankama i institucijama u zemljama uključujući Rusiju, Ukrajinu, Južnoafričku Republiku i druge zemlje južne Afrike, a njegova istraživanja objavljivana su u vodećim međunarodnim časopisima. Doktorirao je i magistrirao ekonomiju u Sjedinjenim Američkim Državama, predavao je na Univerzitetu Konektikat, a bio je gostujući predavač na Jejlu, MIT-u, Pen Stejtu, Univerzitetu u Kejptaunu i drugim prestižnim institucijama.',
      ],
    },
    {
      id: 'james-robinson',
      name: 'James Robinson',
      title: 'Univerzitetski profesor, Univerzitet u Čikagu; dobitnik Nobelove nagrade za ekonomske nauke 2024. godine',
      photo: 'assets/images/speakers/james-robinson.jpg',
      bio: [
        'James Robinson je univerzitetski profesor na Univerzitetu u Čikagu, angažovan pri Harris School of Public Policy, Committee on Social Thought i Katedri za političke nauke.',
        'Dobitnik je Nagrade Švedske centralne banke za ekonomske nauke u spomen na Alfreda Nobela.',
      ],
    },
    {
      id: 'ivan-miklos',
      name: 'Ivan Miklos',
      title: 'Bivši potpredsjednik Vlade i ministar finansija Slovačke Republike; suosnivač MESA10',
      photo: 'assets/images/speakers/ivan-miklos.jpg',
      bio: [
        'Ivan Miklos je bivši potpredsjednik Vlade i ministar finansija Slovačke Republike (2002–2006, 2010–2012), potpredsjednik Vlade zadužen za privredu (1998–2002) i ministar privatizacije (1991–1992). Suosnovao je i vodio ekonomski tink-tenk MESA10 (1992–1998), a 2014. godine ponovo je izabran za njegovog predsjednika. U periodima 2006–2010. i 2012–2016. bio je poslanik u Parlamentu.',
        'Tokom 2015–2016. bio je glavni savjetnik ministra finansija Ukrajine i savjetnik ministra ekonomskog razvoja i trgovine Ukrajine. Od aprila 2016. do avgusta 2019. bio je glavni ekonomski savjetnik premijera Ukrajine, a od novembra 2019. do marta 2020. ekonomski savjetnik premijera Ukrajine. U periodu 2016–2020. predsjedavao je Strateškom savjetodavnom grupom za podršku ukrajinskim reformama (SAGSUR) i suosnovao ukrajinski ekonomski tink-tenk Centar za ekonomsku strategiju. Bio je savjetnik premijera Moldavije (2021–2022), a od marta 2022. do juna 2024. savjetnik predsjednika Slovačke Republike za ekonomsku politiku.',
        'Ivan Miklos je bio jedna od vodećih ličnosti ekonomske transformacije Slovačke Republike. Značajno je doprinio ulasku zemlje u OECD i predvodio je obimnu i djelotvornu poresku reformu, kao i vladinu agendu ekonomskog restrukturiranja i fiskalne konsolidacije. Reformska vlada iz perioda 2002–2006. kombinovala je stroge mjere štednje sa sveobuhvatnim programom strukturnih reformi u oblasti poreza, socijalnog sektora, penzija, zdravstva, javnih finansija i tržišta rada — reformama koje su pomogle Slovačkoj da 2009. godine uđe u evrozonu. Godine 2004. proglašen je za „Najboljeg ministra finansija godine" od strane Euromoney-ja i za „Vodećeg poslovnog reformatora" u izvještaju Svjetske banke Doing Business.',
        'Autor je knjiga „Book of Reforms" (2005) i „Rewriting the Rules" (2001), kao i poglavlja o slovačkim reformama u knjizi „The Great Rebirth: Lessons from the Victory of Capitalism over Communism" (2014). Godine 2019. vodio je izradu publikacije SAGSUR-a „Reforms in Ukraine after the Revolution of Dignity", za koju je napisao poglavlje o političkoj ekonomiji reformi.',
      ],
    },
    {
      id: 'marek-dabrowski',
      name: 'Marek Dabrowski',
      title: 'Nerezidentni stipendista, Bruegel; suosnivač CASE',
      photo: 'assets/images/speakers/marek-dabrowski.jpg',
      bio: [
        'Marek Dabrowski je nerezidentni stipendista instituta Bruegel, specijalizovan za monetarnu i fiskalnu politiku, trgovinsku politiku i političku ekonomiju reformi.',
        'Njegov rad obuhvata analize monetarne i fiskalne politike na nivou pojedinačnih zemalja i uporedne analize, makroekonomske trendove i finansijsku stabilnost, ekonomiju Evropske unije i evrozone, evropske integracije i ekonomske reforme u zemljama u razvoju — posebno u centralnoj i istočnoj Evropi, bivšem Sovjetskom Savezu, na Bliskom istoku i u sjevernoj Africi. Govori engleski, poljski i ruski jezik.',
        'Suosnivač je i stipendista Centra za društvena i ekonomska istraživanja (CASE). Ranije je bio gostujući profesor na Centralnoevropskom univerzitetu u Beču i profesor na Visokoj školi ekonomije u Moskvi, a doktorirao je ekonomiju na Institutu za planiranje u Varšavi.',
      ],
    },
    {
      id: 'lubomir-mitov',
      name: 'Lubomir Mitov',
      title: 'Nezavisni finansijski konsultant; bivši glavni ekonomista za centralnu i istočnu Evropu, UniCredit',
      photo: 'assets/images/speakers/lubomir-mitov.jpg',
      bio: [
        'Lubomir Mitov je nezavisni finansijski konsultant sa više od 25 godina iskustva u makroekonomskim istraživanjima tržišta u razvoju i periferije evrozone, sa posebnim fokusom na analizu rizika, održivost i restrukturiranje duga i finansijska tržišta.',
        'Bio je glavni ekonomista za centralnu i istočnu Evropu i izvršni direktor u UniCredit-u u Londonu (2015–2017), kao i glavni evropski ekonomista i zamjenik direktora u Institutu za međunarodne finansije (IIF) od 2000. do 2015. godine.',
      ],
    },
    {
      id: 'marcin-piatkowski',
      name: 'Marcin Piątkowski',
      title: 'Profesor ekonomije, Univerzitet Kozminski; vodeći ekonomista za Južnu Aziju, Svjetska banka',
      photo: 'assets/images/speakers/marcin-piatkowski.jpg',
      bio: [
        'Marcin Piątkowski je profesor ekonomije na Univerzitetu Kozminski u Varšavi i vodeći ekonomista za Južnu Aziju u okviru Odjeljenja za finansije, konkurentnost i inovacije Svjetske banke u Nju Delhiju. Prije odlaska u Indiju, vodio je podršku Svjetske banke razvoju privatnog sektora za vlade Kine, Vijetnama, Filipina, Mongolije, Ukrajine, Letonije, Češke i Poljske.',
        'Prije nego što se pridružio Svjetskoj banci, bio je glavni ekonomista i izvršni direktor PKO BP, najveće banke u centralnoj i istočnoj Evropi. Radio je i kao ekonomista u Evropskom odjeljenju MMF-a i kao savjetnik zamjenika premijera i ministra finansija Poljske.',
        'Doktorirao je i habilitirao ekonomiju na Univerzitetu Kozminski, a master studije finansija i bankarstva završio je na Varšavskoj školi ekonomije. Bio je gostujući istraživač na Univerzitetu Harvard, London Business School i OECD Development Centre, a predavao je na univerzitetima uključujući Stanford, Jejl, Prinston i Pekinški univerzitet.',
        'Autor je knjige „Europe\'s Growth Champion: Insights from the Economic Rise of Poland" (Oxford University Press, 2018), koja je 2019. godine dobila nagradu Poljske akademije nauka za najbolju knjigu iz ekonomije.',
      ],
    },
    {
      id: 'inna-steinbuka',
      name: 'Inna Šteinbuka',
      title: 'Profesorka, Univerzitet Letonije; predsjednica Savjeta za fiskalnu disciplinu Letonije',
      photo: 'assets/images/speakers/inna-steinbuka.jpg',
      bio: [
        'Inna Šteinbuka je profesorka i direktorka master programa „Evropske studije i ekonomska diplomatija" na Univerzitetu Letonije. Redovna je članica Letonske akademije nauka i predsjedava njenim Savjetom za evropsku politiku i institucije (EPPI).',
        'U periodu 2018–2019. bila je posebna savjetnica potpredsjednika Evropske komisije Valdisa Dombrovskisa. Od 2018. godine je članica, a od decembra 2019. i predsjednica Savjeta za fiskalnu disciplinu Letonije. Od 2011. do 2018. bila je šefica Predstavništva Evropske komisije u Letoniji, nakon što se Evropskoj komisiji pridružila 2005. godine, gdje je prethodno bila direktorka Odjeljenja za ekonomsku i regionalnu statistiku i Odjeljenja za statistiku socijalnog i informacionog društva pri Eurostatu.',
        'Prije nego što se pridružila Evropskoj komisiji, predsjedavala je Komisijom za javne usluge Letonije i bila je viša savjetnica izvršnog direktora nordijsko-baltičke konstituence pri Međunarodnom monetarnom fondu u Vašingtonu. Godine 2008. odlikovana je Ordenom tri zvijezde za doprinos u oblasti finansija i ekonomije.',
      ],
    },
    {
      id: 'madis-muller',
      name: 'Madis Müller',
      title: 'Bivši guverner Banke Estonije (Eesti Pank)',
      photo: 'assets/images/speakers/madis-muller.jpg',
      bio: [
        'Madis Müller je estonski ekonomista koji je obavljao funkciju guvernera Banke Estonije (Eesti Pank) i člana Upravnog savjeta Evropske centralne banke od 2019. do juna 2026. godine. Od 2011. godine bio je zamjenik guvernera Eesti Pank, prije nego što je 2019. postao guverner.',
      ],
    },
    {
      id: 'mojmir-mrak',
      name: 'Mojmir Mrak',
      title: 'Profesor i nosilac Žan Mone katedre, Univerzitet u Ljubljani',
      photo: 'assets/images/speakers/mojmir-mrak.jpg',
      bio: [
        'Mojmir Mrak je redovni profesor i nosilac Žan Mone katedre pri Akademskoj jedinici za novac i finansije Ekonomskog fakulteta Univerziteta u Ljubljani, kao i stalni gostujući profesor na Bečkom univerzitetu za ekonomiju i poslovanje (Wirtschaftsuniversität Wien) i Burgundy School of Business u Dižonu. Njegovo istraživanje obuhvata međunarodne tokove kapitala, nacionalne javne finansije i javne finansije EU, kao i pristupanje EU.',
        'Ima više od 25 godina iskustva u kreiranju i sprovođenju politike Vlade Slovenije u oblasti međunarodnih finansija i pristupanja EU. Između 1992. i 1996. bio je glavni pregovarač Slovenije za spoljni dug, odgovoran za njene rane kreditne aranžmane sa EBRD-om i Svjetskom bankom, a od 1997. do 2004. bio je glavni savjetnik Vlade Slovenije za finansijske aspekte pristupanja EU.',
        'Od tada je savjetovao slovenačke pregovaračke pozicije u okviru nekoliko višegodišnjih finansijskih okvira EU i realizovao brojne konsultantske angažmane u vezi sa makrofiskalnim pitanjima i pristupanjem EU za vlade širom jugoistočne Evrope. Trenutno je viši programski savjetnik Centra izvrsnosti u finansijama (Centre of Excellence in Finance).',
      ],
    },
    {
      id: 'jan-marusinec',
      name: 'Jan Marusinec',
      title: 'Izvršni direktor, MESA10',
      photo: 'assets/images/speakers/jan-marusinec.jpg',
      bio: [
        'Jan Marusinec je ekspert za ekonomsku i finansijsku politiku u MESA10, sa magistarskom diplomom iz ekonomije i 12 godina iskustva u oblasti javnih finansija i javne uprave.',
        'Karijeru je započeo u oblasti odnosa privrede i vlade u nevladinom sektoru, prije nego što se pridružio Ministarstvu finansija Slovačke, gdje je savjetovao zamjenika ministra po pitanjima fiskalne politike i 2004. godine postao direktor Odjeljenja za budžetsku analizu, aktivno učestvujući u procesu reforme upravljanja javnim finansijama Slovačke.',
        'MESA10 se pridružio 2006. godine kao viši saradnik za finansije i ekonomiju, 2010. je postao vršilac dužnosti predsjednika, a kasnije je obavljao funkciju izvršnog direktora. Kao međunarodni konsultant fokusiran je na reforme upravljanja javnim finansijama u zemljama u tranziciji i savjetovao je visoke zvaničnike u Slovačkoj i inostranstvu. Pored slovačkog, tečno govori engleski i njemački jezik, a služi se i ruskim.',
      ],
    },
    {
      id: 'johannes-fedderke',
      name: 'Johannes W. Fedderke',
      title: 'Profesor međunarodnih odnosa i afričkih studija, Univerzitet Pensilvanije',
      photo: 'assets/images/speakers/johannes-fedderke.jpg',
      bio: [
        'Johannes W. Fedderke je ekonomista i profesor u School of International Affairs na Univerzitetu Pensilvanije. Njegovo istraživanje koristi matematičko i ekonometrijsko modeliranje za proučavanje dinamike ekonomske aktivnosti i strateškog ponašanja, sa posebnim osvrtom na uticaj institucija.',
        'Autor je više od 80 recenziranih naučnih članaka i ukupno preko 100 recenziranih publikacija. Vodio je nekoliko istraživačkih instituta i ekonomskih škola, a bio je osnivač i prvi predsjednik Afričkog ekonometrijskog društva. Imao je stalna profesorska zvanja u Velikoj Britaniji, Južnoafričkoj Republici i Sjedinjenim Državama.',
        'Obiman rad na polju politika obavljao je za Svjetsku banku, Afričku uniju, Ligu arapskih država, Rezervnu banku Južnoafričke Republike, Nacionalni trezor Južnoafričke Republike i Parlament Južnoafričke Republike. Doktorirao je i magistrirao (M.Phil.) ekonomiju na Univerzitetu Kembridž.',
      ],
    },
    {
      id: 'zsoka-koczan',
      name: 'Zsoka Koczan',
      title: 'Zamjenica direktora i vodeća ekonomistkinja, EBRD',
      photo: 'assets/images/speakers/zsoka-koczan.jpg',
      bio: [
        'Zsoka Koczan je vodeća ekonomistkinja u Kabinetu glavnog ekonomiste EBRD-a. Doktorirala je ekonomiju na Univerzitetu Kembridž.',
        'Prije nego što se pridružila EBRD-u, radila je kao ekonomistkinja u Međunarodnom monetarnom fondu, u Evropskom odjeljenju (na pitanjima Bjelorusije, Crne Gore i uporednom projektu o makroekonomskim kretanjima na Zapadnom Balkanu) i u Istraživačkom odjeljenju (na izvještaju World Economic Outlook).',
        'Trenutno radi na novom krugu istraživanja Life in Transition Survey, sa fokusom na nejednakosti dohotka unutar zemalja, migracije i nejednakost.',
      ],
    },
    {
      id: 'ivana-katnic',
      name: 'Ivana Katnić',
      bio: [],
    },
    {
      id: 'nina-drakic',
      name: 'Nina Drakić',
      bio: [],
    },
    {
      id: 'maida-gorcevic',
      name: 'Maida Gorčević',
      bio: [],
    },
    {
      id: 'jakov-milatovic',
      name: 'Jakov Milatović',
      bio: [],
    },
    {
      id: 'enrico-letta',
      name: 'Enrico Letta',
      bio: [],
    },
    {
      id: 'davor-kunc',
      name: 'Davor Kunc',
      bio: [],
    },
    {
      id: 'roko-tolic',
      name: 'Roko Tolić',
      bio: [],
    },
    {
      id: 'tamas-kamarasi',
      name: 'Tamaš Kamaraši',
      bio: [],
    },
    {
      id: 'laurian-lungu',
      name: 'Laurian Lungu',
      bio: [],
    },
    {
      id: 'vasilis-panagopoulos',
      name: 'Vasilis Panagopoulos',
      bio: [],
    },
    {
      id: 'branko-mitrovic',
      name: 'Branko Mitrović',
      bio: [],
    },
    {
      id: 'aleksa-lukic',
      name: 'Aleksa Lukić',
      bio: [],
    },
    {
      id: 'martin-leberle',
      name: 'Martin Leberle',
      bio: [],
    },
    {
      id: 'ana-draskovic',
      name: 'Ana Drašković',
      bio: [],
    },
    {
      id: 'igor-luksic',
      name: 'Igor Lukšić',
      bio: [],
    },
  ],
};

export function findSpeaker(id: string, lang: Language): Speaker | undefined {
  return SPEAKERS[lang].find((s) => s.id === id);
}
